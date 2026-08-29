/*
  makeTICGenerator.js
  This script reads the issues data from procs/score/tic.js and writes a generator. Executing the generator will create a new generatedTIC.ts file containing TypeScript code that can be used for creation of TIC data in a two-object format:
  - issuesData: Contains the issue data with summary, why, wcag, weight, and max properties.
  - rulesData: Contains the rule data with issueID, quality, and what properties.
  After executing the generator, execute npx eslint --fix generatedTIC.ts to correct the quotation format.
*/

//  IMPORTS

const fs = require('fs');
const {issues: oldIssues} = require('./procs/score/tic');

// CONSTANTS

const newIssues = {};
const rules = {};
const errors = [];

// EXECUTION

Object.entries(oldIssues).forEach(([issueID, issueData]) => {
  const {summary, why, wcag, weight, max, tools} = issueData;
  newIssues[issueID] = {summary, why, wcag, weight, ...(max !== undefined && {max})};
  Object.entries(tools).forEach(([toolID, toolRules]) => {
    rules[toolID] ??= {invariant: {}, variable: {}};
    Object.entries(toolRules).forEach(([ruleID, ruleData]) => {
      const {variable, quality, what} = ruleData;
      const bucket = variable ? 'variable' : 'invariant';
      let key = ruleID;
      if (variable) {
        if (key.startsWith('^')) {
          key = key.slice(1);
        }
        if (key.endsWith('$')) {
          key = key.slice(0, -1);
        }
      }
      if (rules[toolID][bucket][key]) {
        errors.push(`Duplicate rule ${toolID}:${key} (${bucket})`);
      }
      rules[toolID][bucket][key] = {issueID, quality, what};
    });
  });
});
if (errors.length) {
  console.error(`Found ${errors.length} duplicate rule assignment(s):`);
  errors.forEach(error => console.error(`  ${error}`));
}
fs.writeFileSync(
  'ticData.ts',
  `const issuesData = ${JSON.stringify(newIssues, null, 2)} as const;\n\n`
  + `const rulesData = ${JSON.stringify(rules, null, 2)};\n`
);
console.log(`Wrote ticData.ts (${Object.keys(newIssues).length} issues, ${Object.keys(rules).length} tools)`);
