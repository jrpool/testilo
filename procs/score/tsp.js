/*
  © 2025 CVS Health and/or one of its affiliates. All rights reserved.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

/*
  tsp
  Testilo score proc

  Computes score data and adds them to a Testaro report.
*/

// IMPORTS

const {issues} = require('./tic');

// MISCELLANEOUS CONSTANTS

// ID of this proc.
const scoreProcID = 'tsp';

// WEIGHT CONSTANTS

// How much is added to the page score by each component.

// 1. Issue

// Each issue.
const issueCountWeight = 10;
/*
  Expander of instance counts for issues with inherently limited instance counts. Divide this by
  the maximum possible instance count and add the quotient to 1, then multiply the sum by the actual
  instance count, i.e. the largest rule-quality-weighted instance count among the tools with any
  instances of the issue.
*/
const maxWeight = 30;

// 2. Tool

// Severity: amount the ordinal severity of each violation adds to the raw tool score.
const severityWeights = [1, 2, 3, 4];
// Final: multiplier of the raw tool score to obtain the final tool score.
const toolWeight = 0.1;

// 3. Element
// Multiplier of the count of elements with at least 1 rule violation.
const elementWeight = 2;

// 4. Prevention
// Each tool prevention by the page.
const preventionWeight = 300;
// Each prevention of a Testaro rule test by the page.
const testaroRulePreventionWeight = 30;

// 5. Log
// Multipliers of log values to obtain the log score.
const logWeights = {
  logCount: 0.1,
  logSize: 0.002,
  errorLogCount: 0.2,
  errorLogSize: 0.004,
  prohibitedCount: 3,
  visitRejectionCount: 2
};

// 6. Latency
// Normal latency (11 visits [1 per tool], with 2 seconds per visit).
const normalLatency = 22;
// Total latency exceeding normal, in seconds.
const latencyWeight = 2;

// RULE CONSTANTS

// Initialize a directory of issue-classified tool rules.
const issueIndex = {};
// Initialize an array of variable rule IDs.
const variableRuleIDs = [];
// For each classified issue:
Object.keys(issues).forEach(issueID => {
  // For each tool with rules belonging to that issue:
  Object.keys(issues[issueID].tools).forEach(toolID => {
    // For each of those rules:
    Object.keys(issues[issueID].tools[toolID]).forEach(ruleID => {
      issueIndex[toolID] ??= {};
      // Add its ID to the directory of tool rule IDs.
      issueIndex[toolID][ruleID] = issueID;
      // If it has a variable ID:
      if (issues[issueID].tools[toolID][ruleID].variable) {
        // Add its ID to the array of variable rule IDs.
        variableRuleIDs.push(ruleID);
      }
    })
  });
});

// FUNCTIONS

// Scores a report.
exports.scorer = report => {
  const {acts} = report;
  // If there are any acts in the report:
  if (Array.isArray(acts) && acts.length) {
    const testActs = acts.filter(act => act.type === 'test');
    const testTools = new Set(testActs.map(act => act.which));
    // If any of them are test acts:
    if (testActs.length) {
      // Initialize the score data.
      const score = {
        scoreProcID,
        weights: {
          severities: severityWeights,
          tool: toolWeight,
          element: elementWeight,
          log: logWeights,
          latency: latencyWeight,
          prevention: preventionWeight,
          testaroRulePrevention: testaroRulePreventionWeight,
          maxInstanceCount: maxWeight
        },
        normalLatency,
        summary: {
          total: 0,
          issueCount: 0,
          issue: 0,
          solo: 0,
          tool: 0,
          element: 0,
          prevention: 0,
          log: 0,
          latency: 0
        },
        details: {
          severity: {
            total: [0, 0, 0, 0],
            byTool: {}
          },
          prevention: {},
          issue: {},
          solo: {},
          tool: {},
          element: {}
        }
      };
      // Initialize the job and issue-specific sets of path-identified elements.
      const pathIDs = new Set();
      const issuePaths = {};
      const {summary, details} = score;
      // For each test act:
      testActs.forEach(act => {
        const {data, which, standardResult} = act;
        // If the tool is Testaro and the count of rule preventions was reported:
        if (which === 'testaro' && data && data.rulePreventions) {
          // Add their score to the score.
          details.prevention.testaro = testaroRulePreventionWeight * data.rulePreventions.length;
        }
        // If the page prevented the tool from operating:
        if (! standardResult || standardResult.prevented) {
          // Add this to the score.
          details.prevention[which] = preventionWeight;
        }
        // Otherwise, if a valid standard result exists:
        else if (
          standardResult
          && standardResult.totals
          && standardResult.totals.length === 4
          && standardResult.instances
        ) {
          // Add the severity totals of the tool to the score.
          const {totals} = standardResult;
          details.severity.byTool[which] = totals;
          // Add the severity-weighted tool totals to the score.
          details.tool[which] = totals.reduce(
            (sum, current, index) => sum + severityWeights[index] * current, 0
          );
          // For each instance of the tool:
          standardResult.instances.forEach(instance => {
            const {ordinalSeverity, pathID, ruleID, what} = instance;
            const count = instance.count || 1;
            let canonicalRuleID = ruleID;
            // If the rule is not classified:
            if (! issueIndex[which][ruleID]) {
              // Convert its ID to the variable rule ID that it matches, if any.
              canonicalRuleID = variableRuleIDs.find(pattern => {
                const patternRE = new RegExp(pattern);
                return patternRE.test(ruleID);
              });
            }
            // If the rule is classified:
            if (canonicalRuleID) {
              // Get the issue of the rule.
              const issueID = issueIndex[which][canonicalRuleID];
              // If the issue is non-ignorable:
              if (issueID !== 'ignorable') {
                // Initialize the issue details if necessary.
                details.issue[issueID] ??= {
                  summary: issues[issueID].summary,
                  wcag: issues[issueID].wcag || '',
                  score: 0,
                  maxCount: 0,
                  weight: issues[issueID].weight,
                  countLimit: issues[issueID].max,
                  instanceCounts: {},
                  tools: {}
                };
                const issueDetails = details.issue[issueID];
                if (! issueDetails.countLimit) {
                  delete issueDetails.countLimit;
                }
                issueDetails.tools[which] ??= {};
                issueDetails.instanceCounts[which] ??= 0;
                // Add the instance count to the tool instance count.
                issueDetails.instanceCounts[which] += count;
                const ruleData = issues[issueID].tools[which][canonicalRuleID];
                // Initialize the the issue details for the rule if necessary.
                issueDetails.tools[which][canonicalRuleID] ??= {
                  quality: ruleData.quality,
                  what: ruleData.what,
                  violations: {
                    countTotal: 0,
                    descriptions: new Set()
                  }
                };
                const ruleDetails = issueDetails.tools[which][canonicalRuleID];
                // Add the instance count to the rule instance count.
                ruleDetails
                .violations
                .countTotal += count || 1;
                // Ensure that the violation description is among the violation descriptions.
                ruleDetails
                .violations
                .descriptions
                .add(what);
                // If the element has a path ID:
                if (pathID) {
                  issuePaths[issueID] ??= {};
                  issuePaths[issueID][pathID] ??= new Set();
                  // Ensure that the tool is among those reporting the issue for the element.
                  issuePaths[issueID][pathID].add(which);
                }
              }
            }
            // Otherwise, i.e. if the rule is not classified:
            else {
              // Add the instance to the solo details of the score data.
              details.solo[which] ??= {};
              details.solo[which][ruleID] ??= 0;
              details.solo[which][ruleID] += (count || 1) * (ordinalSeverity + 1);
              // Report this.
              console.log(`ERROR: Unclassified rule of ${which}: ${ruleID}`);
            }
            // If the element has a path ID:
            if (pathID) {
              // Ensure it is among the job path IDs.
              pathIDs.add(pathID);
            }
          });
        }
        // Otherwise, i.e. if a failed standard result exists:
        else {
          // Add an inferred prevention to the score.
          details.prevention[which] = preventionWeight;
        }
      });
      // For each non-ignorable issue with any instances:
      Object.keys(details.issue).forEach(issueID => {
        const issueDetails = details.issue[issueID];
        // For each tool with any instances in the issue:
        Object.keys(issueDetails.tools).forEach(toolID => {
          // Get the sum of the quality-weighted counts of its issue rules.
          let weightedCount = 0;
          Object.values(issueDetails.tools[toolID]).forEach(ruleData => {
            weightedCount += ruleData.quality * ruleData.violations.countTotal;
          });
          // Update the maximum count for the issue if necessary.
          issueDetails.maxCount = Math.max(issueDetails.maxCount, weightedCount);
        });
        // Get the score for the issue, including any addition for the instance count limit.
        const maxAddition = issueDetails.countLimit ? maxWeight / issueDetails.countLimit : 0;
        issueDetails.score = Math.round(
          issueDetails.weight * issueDetails.maxCount * (1 + maxAddition)
        );
        // For each tool that has any rule in the issue:
        Object.keys(issues[issueID].tools).forEach(toolID => {
          // If the tool was in the job and has no instances of the issue:
          if (testTools.has(toolID) && ! issueDetails.instanceCounts[toolID]) {
            // Report its instance count as 0.
            issueDetails.instanceCounts[toolID] = 0;
          }
        });
      });
      // Add the severity detail totals to the score.
      details.severity.total = Object
      .keys(details.severity.byTool)
      .reduce((severityTotals, toolID) => {
        details.severity.byTool[toolID].forEach((severityScore, index) => {
          severityTotals[index] += severityScore;
        });
        return severityTotals;
      }, details.severity.total);
      const elementData = {};
      // For each issue:
      Object.keys(issuePaths).forEach(issueID => {
        // For each element reported as exhibiting it:
        Object.keys(issuePaths[issueID]).forEach(pathID => {
          const toolList = issuePaths[issueID][pathID].sort().join(' + ');
          elementData[issueID] ??= {};
          elementData[issueID][toolList] ??= [];
          // Classify the element by the set of tools reporting it for the issue.
          elementData[issueID][toolList].push(pathID);
        });
        // Sort the XPaths reported by each tool list.
        Object.keys(elementData).forEach(issueID => {
          Object.keys(elementData[issueID]).forEach(toolList => {
            elementData[issueID][toolList].sort();
          });
        });
        // Sort the tool lists by their tool counts and alphabetically.
        const toolLists = Object.keys(elementData[issueID]);
        toolLists.sort((a, b) => {
          const aToolCount = a.replace(/[^+]/g, '').length;
          const bToolCount = b.replace(/[^+]/g, '').length;
          if (aToolCount === bToolCount) {
          return a.localeCompare(b);
          }
          else {
            return bToolCount - aToolCount;
          };
        });
        // Add the element data to the score details.
        details.element[issueID] = {};
        toolLists.forEach(toolList => {
          details.element[issueID][toolList] = elementData[issueID][toolList];
        });
      });
      // Add the summary issue-count total to the score.
      summary.issueCount = Object.keys(details.issue).length * issueCountWeight;
      // Add the summary issue total to the score.
      summary.issue = Object
      .values(details.issue)
      .reduce((total, current) => total + current.score, 0);
      // Add the summary solo total to the score.
      Object.keys(details.solo).forEach(tool => {
        summary.solo += Object
        .values(details.solo[tool])
        .reduce((total, current) => total + current);
      });
      // Add the summary tool total to the score.
      summary.tool = toolWeight * details.severity.total.reduce(
        (total, current, index) => total + severityWeights[index] * current, 0
      );
      // Get the minimum count of violating elements.
      const actRuleIDs = testActs.filter(act => act.standardResult).map(
        act => act.standardResult.instances.map(instance => `${act.which}:${instance.ruleID}`)
      );
      const allRuleIDs = actRuleIDs.flat();
      const ruleCounts = Array
      .from(new Set(allRuleIDs))
      .map(ruleID => allRuleIDs.filter(id => id === ruleID).length);
      /*
        Add the summary element total to the score, based on the count of identified violating
        elements or the largest count of instances of violations of any rule, whichever is
        greater.
      */
      summary.element = elementWeight * Math.max(pathIDs.size, ... ruleCounts);
      // Add the summary prevention total to the score.
      summary.prevention = Object.values(details.prevention).reduce(
        (total, current) => total + current, 0
      );
      // Add the summary log score to the score.
      const {jobData} = report;
      if (jobData) {
        summary.log = Math.max(0, Math.round(
          logWeights.logCount * jobData.logCount
          + logWeights.logSize * jobData.logSize +
          + logWeights.errorLogCount * jobData.errorLogCount
          + logWeights.errorLogSize * jobData.errorLogSize
          + logWeights.prohibitedCount * jobData.prohibitedCount +
          + logWeights.visitRejectionCount * jobData.visitRejectionCount
        ));
        // Add the summary latency score to the score.
        summary.latency = Math.round(
          latencyWeight * (Math.max(0, jobData.visitLatency - normalLatency))
        );
      }
      // Round the unrounded scores.
      Object.keys(summary).forEach(summaryTypeName => {
        summary[summaryTypeName] = Math.round(summary[summaryTypeName]);
      });
      details.severity.total.forEach((severityTotal, index) => {
        details.severity.total[index] = Math.round(severityTotal);
      });
      // Add the summary total score to the score.
      summary.total = summary.issueCount
      + summary.issue
      + summary.solo
      + summary.tool
      + summary.element
      + summary.prevention
      + summary.log
      + summary.latency;
      // Add a, or replace the, score property of the report.
      report.score = score;
    }
    // Otherwise, i.e. if none of them is a test act:
    else {
      // Report this.
      console.log('ERROR: No test acts');
    }
  }
  // Otherwise, i.e. if there are no acts in the report:
  else {
    // Report this.
    console.log('ERROR: No acts');
  }
};
