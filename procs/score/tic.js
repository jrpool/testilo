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
  tic
  Testilo issue classification

  Classifies about 1300 rules of the rule engines in the ensemble of Testaro into about 350 issues.

  Issue properties:
    summary: minimal description
    why: expected impact on a user
    wcag: most relevant WCAG Principle, Guideline, Success Criterion, or Technique
    weight: weight of the issue in score computation
    max?: maximum possible count of instances if finite
    tools: rule engines (including Testaro) defining rules classified as belonging to the issue

  Each property of tools is data about one of the rule engines that test for the issue. The key is the name of the rule engine. The value is an object containing data about the rules of the rule engine that pertain to the issue. Each property of that object is data about one of those rules. The key is the identifier of the rule, and the value is an object with these properties:
      variable: whether the key is a regular expression
      quality: the estimated quality of the test for the rule (normally 1)
      what: description of a rule violation

  The issues object in this module is generated from data imported from the testaro-issues package.
*/

// IMPORTS

const {issues: issueData, rules: ruleData} = require('testaro-issues');

// EXECUTION

const issues = {};
Object.entries(issueData).forEach(([issueID, issueProps]) => {
  issues[issueID] = {...issueProps, tools: {}};
});
Object.entries(ruleData).forEach(([toolID, {invariant, variable}]) => {
  Object.entries(invariant).forEach(([ruleID, {issueID, quality, what}]) => {
    issues[issueID].tools[toolID] ??= {};
    issues[issueID].tools[toolID][ruleID] = {variable: false, quality, what};
  });
  Object.entries(variable).forEach(([ruleID, {issueID, quality, what}]) => {
    issues[issueID].tools[toolID] ??= {};
    issues[issueID].tools[toolID][`^${ruleID}$`] = {variable: true, quality, what};
  });
});
exports.issues = issues;
