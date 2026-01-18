/*
  © 2025 Jonathan Robert Pool. All rights reserved.

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
  classify
  Standard instance issue classification proc

  Adds an issue ID to each standard instance in a Testaro report.
*/

// IMPORTS

const {issues} = require('../score/tic');

// FUNCTIONS

// Returns a directory of issue-classified tool rules, including an array of variable rule IDs.
const getIssueDirectory = exports.getIssueDirectory = () => {
  // Initialize the directory.
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
        // Add its ID to the directory.
        issueIndex[toolID][ruleID] = issueID;
        // If it has a variable ID:
        if (issues[issueID].tools[toolID][ruleID].variable) {
          // Add its ID to the array of variable rule IDs.
          variableRuleIDs.push(ruleID);
        }
      })
    });
  });
  return {
    issueIndex,
    variableRuleIDs
  };
};
// Returns the issue ID of a standard instance.
const getIssueID = (toolID, instance, issueDirectory) => {
  const {issueIndex, variableRuleIDs} = issueDirectory;
  const {ruleID} = instance;
  let canonicalRuleID = ruleID;
  // If the rule is not in the issue index:
  if (! issueIndex[toolID][ruleID]) {
    // Convert its ID to the variable rule ID that it matches, if any.
    canonicalRuleID = variableRuleIDs.find(pattern => {
      const patternRE = new RegExp(pattern);
      return patternRE.test(ruleID);
    });
  }
  // If the rule or a variable match is in the issue index:
  if (canonicalRuleID) {
    // Return the issue ID of the rule.
    return issueIndex[toolID][canonicalRuleID];
  }
  // Otherwise, i.e. if neither the rule nor a variable match is in the issue index, report this.
  console.log(`ERROR: Unclassified rule of ${toolID}: ${ruleID}`);
};
// Adds an issue ID to each standard instance in a report.
exports.issueAnnotate = report => {
  const {acts} = report;
  // If there are any acts in the report:
  if (Array.isArray(acts) && acts.length) {
    // Get those that are test acts.
    const testActs = acts.filter(act => act.type === 'test');
    // If there are any:
    if (testActs.length) {
      // Get an issue index and an array of variable rule IDs.
      const issueDirectory = getIssueDirectory();
      // For each test act:
      testActs.forEach(act => {
        const {which, standardResult} = act;
        // If a valid non-empty standard result exists:
        if (
          standardResult
          && standardResult.totals
          && standardResult.totals.length === 4
          && standardResult.instances
          && standardResult.instances.length
        ) {
          // For each instance of the tool:
          standardResult.instances.forEach(instance => {
            // Get the issue ID, if any, of the rule.
            const issueID = getIssueID(which, instance, issueDirectory);
            // If the issue ID exists:
            if (issueID) {
              // Add the issue ID to the instance.
              instance.issueID = issueID;
            }
          });
        }
      });
    }
  }
};
