/*
modify-htmlcs.js

This script modifies a tic-old.js file to add prefixes to the htmlcs rule IDs.

The script is run from the command line as:
node modify-htmlcs.js

This script is no longer needed, but may serve as a template for future code modifications.
*/

const fs = require('fs');

const filePath = '/Users/pool/Documents/Topics/repos/a11yTesting/testilo/procs/score/tic-old.js';

let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
let currentWeight = null;
let inHtmlcs = false;
let htmlcsIndent = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  const weightMatch = line.match(/^\s+weight:\s*(\d+),?\s*$/);
  if (weightMatch) {
    currentWeight = parseInt(weightMatch[1]);
  }

  if (line.match(/^\s+htmlcs:\s*\{/)) {
    inHtmlcs = true;
    htmlcsIndent = line.search(/\S/);
    continue;
  }

  if (inHtmlcs) {
    const currentIndent = line.search(/\S/);

    if (currentIndent !== -1 && currentIndent <= htmlcsIndent) {
      inHtmlcs = false;
      currentWeight = null;
      continue;
    }

    const propertyMatch = line.match(/^(\s+)'([^']+)':\s*\{/);
    if (propertyMatch && currentWeight !== null) {
      const indent = propertyMatch[1];
      let propName = propertyMatch[2];

      // Remove existing prefix if present
      if (propName.startsWith('W-') || propName.startsWith('E-')) {
        propName = propName.substring(2);
      }

      // Apply correct prefix based on weight
      const prefix = currentWeight === 1 ? 'W-' : 'E-';
      lines[i] = `${indent}'${prefix}${propName}': {`;
    }
  }
}

content = lines.join('\n');
fs.writeFileSync(filePath, content, 'utf8');

console.log('Modifications complete!');
