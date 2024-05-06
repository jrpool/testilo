/*
  © 2024 CVS Health and/or one of its affiliates. All rights reserved.

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
  tsp42
  Testilo score proc 42

  Computes target score data and adds them to a ts40 report.
*/

// IMPORTS

const {issues} = require('./tic41');

// CONSTANTS

// ID of this proc.
const scoreProcID = 'tsp42';
// Latency weight (how much each second of excess latency adds to the score).
const latencyWeight = 1;
// Normal latency (6 visits, with 1.5 second per visit).
const normalLatency = 9;
// Prevention weights (how much each prevention adds to the score).
const preventionWeight = 300;
const testaroRulePreventionWeight = 30;
// Maximum instance count addition weight (divisor of max).
const maxWeight = 30;
// Issue count weight.
const issueCountWeight = 10;
// Other weights.
const severityWeights = [1, 2, 3, 4];
const toolWeight = 0.1;
const elementWeight = 3;
const logWeights = {
  logCount: 0.1,
  logSize: 0.002,
  errorLogCount: 0.2,
  errorLogSize: 0.004,
  prohibitedCount: 3,
  visitRejectionCount: 2
};
// Initialize a table of tool rules.
const issueIndex = {};
// Initialize an array of variably named tool rules.
const issueMatcher = [];
// For each issue:
Object.keys(issues).forEach(issueName => {
  // For each tool with rules belonging to that issue:
  Object.keys(issues[issueName].tools).forEach(toolName => {
    // For each of those rules:
    Object.keys(issues[issueName].tools[toolName]).forEach(ruleID => {
      // Add it to the table of tool rules.
      if (! issueIndex[toolName]) {
        issueIndex[toolName] = {};
      }
      issueIndex[toolName][ruleID] = issueName;
      // If it is variably named:
      if (issues[issueName].tools[toolName][ruleID].variable) {
        // Add it to the array of variably named tool rules.
        issueMatcher.push(ruleID);
      }
    })
  });
});

// FUNCTIONS

// Scores a report.
exports.scorer = report => {
  // If there are any acts in the report:
  const {acts} = report;
  if (Array.isArray(acts) && acts.length) {
    // If any of them are test acts:
    const testActs = acts.filter(act => act.type === 'test');
    const testTools = new Set(testActs.map(act => act.which));
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
          tool: {}
        }
      };
      // Initialize the set of path-identified elements.
      const pathIDs = new Set();
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
            const {count, ordinalSeverity, pathID, ruleID, what} = instance;
            // Get the rule ID.
            // If it is not in the table of tool rules:
            let canonicalRuleID = ruleID;
            if (! issueIndex[which][ruleID]) {
              // Convert it to the variably named tool rule that it matches, if any.
              canonicalRuleID = issueMatcher.find(pattern => {
                const patternRE = new RegExp(pattern);
                return patternRE.test(ruleID);
              });
            }
            // If the rule ID belongs to a non-ignorable issue:
            if (canonicalRuleID) {
              // Get the issue.
              const issueName = issueIndex[which][canonicalRuleID];
              // Add the instance to the issue details of the score data.
              if (issueName !== 'ignorable') {
                if (! details.issue[issueName]) {
                  details.issue[issueName] = {
                    summary: issues[issueName].summary,
                    wcag: issues[issueName].wcag || '',
                    score: 0,
                    maxCount: 0,
                    weight: issues[issueName].weight,
                    countLimit: issues[issueName].max,
                    instanceCounts: {},
                    tools: {}
                  };
                  if (! details.issue[issueName].countLimit) {
                    delete details.issue[issueName].countLimit;
                  }
                }
                if (! details.issue[issueName].tools[which]) {
                  details.issue[issueName].tools[which] = {};
                }
                if (! details.issue[issueName].instanceCounts[which]) {
                  details.issue[issueName].instanceCounts[which] = 0;
                }
                details.issue[issueName].instanceCounts[which] += count || 1;
                if (! details.issue[issueName].tools[which][canonicalRuleID]) {
                  const ruleData = issues[issueName].tools[which][canonicalRuleID];
                  details.issue[issueName].tools[which][canonicalRuleID] = {
                    quality: ruleData.quality,
                    what: ruleData.what,
                    complaints: {
                      countTotal: 0,
                      texts: []
                    }
                  };
                }
                details
                .issue[issueName]
                .tools[which][canonicalRuleID]
                .complaints
                .countTotal += count || 1;
                if (
                  ! details
                  .issue[issueName]
                  .tools[which][canonicalRuleID]
                  .complaints
                  .texts
                  .includes(what)
                ) {
                  details
                  .issue[issueName]
                  .tools[which][canonicalRuleID]
                  .complaints
                  .texts
                  .push(what);
                }
              }
            }
            // Otherwise, i.e. if the rule ID belongs to no issue:
            else {
              // Add the instance to the solo details of the score data.
              if (! details.solo[which]) {
                details.solo[which] = {};
              }
              if (! details.solo[which][ruleID]) {
                details.solo[which][ruleID] = 0;
              }
              details.solo[which][ruleID] += (count || 1) * (ordinalSeverity + 1);
              // Report this.
              console.log(`ERROR: ${ruleID} of ${which} not found in issues`);
            }
            // Ensure that the element, if path-identified, is in the set of elements.
            if (pathID) {
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
      // For each non-ignorable issue with any complaints:
      Object.keys(details.issue).forEach(issueName => {
        const issueData = details.issue[issueName];
        // For each tool with any complaints for the issue:
        Object.keys(issueData.tools).forEach(toolID => {
          // Get the sum of the quality-weighted counts of its issue rules.
          let weightedCount = 0;
          Object.values(issueData.tools[toolID]).forEach(ruleData => {
            weightedCount += ruleData.quality * ruleData.complaints.countTotal;
          });
          // If the sum exceeds the existing maximum weighted count for the issue:
          if (weightedCount > issueData.maxCount) {
            // Change the maximum count for the issue to the sum.
            issueData.maxCount = weightedCount;
          }
        });
        // Get the score for the issue, including any addition for the instance count limit.
        const maxAddition = issueData.countLimit ? maxWeight / issueData.countLimit : 0;
        issueData.score = Math.round(issueData.weight * issueData.maxCount * (1 + maxAddition));
        // For each tool that has any rule of the issue:
        Object.keys(issues[issueName].tools).forEach(toolName => {
          // If the tool was in the job and has no instances of the issue:
          if (testTools.has(toolName) && ! issueData.instanceCounts[toolName]) {
            // Report its instance count as 0.
            issueData.instanceCounts[toolName] = 0;
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
      // Add the summary element total to the score.
      summary.element = elementWeight * pathIDs.size;
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
      // Add the score to the report or replace the existing score of the report.
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
