/*
  tsp33
  Testilo score proc 33

  Computes target score data and adds them to a ts33 report.
*/

// IMPORTS

const {issues} = require('./tic33');

// CONSTANTS

// ID of this proc.
const scoreProcID = 'tsp33';
// Configuration disclosures.
const severityWeights = [1, 2, 3, 4];
const toolWeight = 0.1;
const logWeights = {
  logCount: 0.1,
  logSize: 0.002,
  errorLogCount: 0.2,
  errorLogSize: 0.004,
  prohibitedCount: 3,
  visitRejectionCount: 2
};
// How much each second of excess latency adds to the score.
const latencyWeight = 1;
// Normal latency (1.5 second per visit).
const normalLatency = 9;
// How much each prevention adds to the score.
const preventionWeight = 300;
// Indexes of issues.
const issueIndex = {};
const issueMatcher = [];
Object.keys(issues).forEach(issueName => {
  Object.keys(issues[issueName].tools).forEach(toolName => {
    Object.keys(issues[issueName].tools[toolName]).forEach(issueID => {
      if (! issueIndex[toolName]) {
        issueIndex[toolName] = {};
      }
      issueIndex[toolName][issueID] = issueName;
      if (issues[issueName].tools[toolName][issueID].variable) {
        issueMatcher.push(issueID);
      }
    })
  });
});

// FUNCTIONS

// Scores a report.
exports.scorer = report => {
  console.log(`Scoring report ${report.id}`);
  // If there are any acts in the report:
  const {acts} = report;
  if (Array.isArray(acts) && acts.length) {
    // If any of them are test acts:
    const testActs = acts.filter(act => act.type === 'test');
    if (testActs.length) {
      // Initialize the score data.
      const score = {
        scoreProcID,
        summary: {
          total: 0,
          issue: 0,
          tool: 0,
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
          issue: {}
        }
      };
      const {summary, details} = score;
      // For each test act:
      testActs.forEach(act => {
        // If the page prevented the tool from operating:
        const {which, standardResult} = act;
        if (! standardResult || standardResult.prevented) {
          // Add this to the score.
          details.prevention[which] = preventionWeight;
        }
        // Otherwise, if a successful standard result exists:
        else if (
          standardResult
          && standardResult.totals
          && standardResult.totals.length === 4
          && standardResult.instances
        ) {
          // Add the severity totals of the tool to the score.
          const {totals} = standardResult;
          details.severity.byTool[which] = totals;
          // Add the instance data of the tool to the score.
          standardResult.instances.forEach(instance => {
            let {ruleID} = instance;
            if (! issueIndex[which][ruleID]) {
              ruleID = issueMatcher.find(pattern => {
                const patternRE = new RegExp(pattern);
                return patternRE.test(instance.ruleID);
              });
            }
            if (ruleID) {
              const issueID = issueIndex[which][ruleID];
              if (! details.issue[issueID]) {
                details.issue[issueID] = {
                  score: 0,
                  maxCount: 0,
                  weight: issues[issueID].weight,
                  tools: {}
                };
              }
              if (! details.issue[issueID].tools[which]) {
                details.issue[issueID].tools[which] = {};
              }
              if (! details.issue[issueID].tools[which][ruleID]) {
                const ruleData = issues[issueID].tools[which][ruleID];
                details.issue[issueID].tools[which][ruleID] = {
                  quality: ruleData.quality,
                  what: ruleData.what,
                  complaints: {
                    countTotal: 0,
                    texts: []
                  }
                };
              }
              details
              .issue[issueID]
              .tools[which][ruleID]
              .complaints
              .countTotal += instance.count || 1;
              if (
                ! details
                .issue[issueID]
                .tools[which][ruleID]
                .complaints
                .texts
                .includes(instance.what)
              ) {
                details.issue[issueID].tools[which][ruleID].complaints.texts.push(instance.what);
              }
            }
            else {
              console.log(`ERROR: ${instance.ruleID} of ${which} not found in issues`);
            }
          });
        }
        // Otherwise, i.e. if a failed standard result exists:
        else {
          // Add an inferred prevention to the score.
          details.prevention[which] = preventionWeight;
        }
      });
      // For each issue with any complaints:
      Object.keys(details.issue).forEach(issueID => {
        const issueData = details.issue[issueID];
        // For each tool with any complaints for the issue:
        Object.keys(issueData.tools).forEach(toolID => {
          // Get the sum of the weighted counts of its issue rules.
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
        // Get the score for the issue.
        issueData.score = Math.round(issueData.weight * issueData.maxCount);
      });
      // Add the severity detail totals to the score.
      details.severity.total = Object.keys(details.severity.byTool).reduce((severityTotals, toolID) => {
        details.severity.byTool[toolID].forEach((severityScore, index) => {
          severityTotals[index] += severityScore;
        });
        return severityTotals;
      }, details.severity.total);
      // Add the summary issue total to the score.
      summary.issue = Object
      .values(details.issue)
      .reduce((total, current) => total + current.score, 0);
      // Add the summary tool total to the score.
      summary.tool = toolWeight * details.severity.total.reduce(
        (total, current, index) => total + severityWeights[index] * current, 0
      );
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
      summary.total = summary.issue
      + summary.tool
      + summary.prevention
      + summary.log
      + summary.latency;
      // Add the score to the report.
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