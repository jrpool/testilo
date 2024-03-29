/*
  script.js
  Creates and returns a script to perform the tests for issues.
*/

// ########## VARIABLES

// Testaro tool IDs.
const toolIDs = exports.toolIDs = [
  'alfa', 'aslint', 'axe', 'ed11y', 'htmlcs', 'ibm', 'nuVal', 'qualWeb', 'testaro', 'wave'
];

// ########## FUNCTIONS

// Creates and returns a script.
exports.script = (id, what, options = {}) => {
  const toolsRulesData = {};
  // If options are specified:
  if (options.type && options.specs) {
    const {type, specs} = options;
    // If the option type is tools and is valid:
    if (
      type === 'tools'
      && Array.isArray(specs)
      && specs.length
      && specs.every(spec => toolIDs.includes(spec))
    ) {
      // Populate the data on tools and rules.
      specs.forEach(spec => {
        toolsRulesData[spec] = [];
      });
    }
    // Otherwise, if the option type is issues and is valid:
    else if (
      type === 'issues'
      && typeof specs === 'object'
      && specs.issues
      && specs.issueIDs
      && typeof specs.issues === 'object'
      && Array.isArray(specs.issueIDs)
      && specs.issueIDs.length
    ) {
      // For each specified issue:
      const {issueIDs, issues} = specs;
      issueIDs.forEach(issueID => {
        // If it exists in the classification:
        const issueData = issues[issueID];
        if (issueData) {
          // For each tool that tests for the issue:
          const issueToolIDs = Object.keys(issueData.tools);
          issueToolIDs.forEach(issueToolID => {
            // For each of the rules of the tool for the issue:
            toolsRulesData[issueToolID] ??= [];
            const toolRuleIDs = toolsRulesData[issueToolID];
            const toolData = issueData.tools[issueToolID];
            Object.keys(toolData).forEach(ruleID => {
              // Add the rule to the data on tools and rules.
              let rulePrefix = '';
              if (issueToolID === 'nuVal') {
                rulePrefix = toolData[ruleID].variable ? '~' : '=';
              }
              const fullRuleID = `${rulePrefix}${ruleID}`;
              if (! toolRuleIDs.includes(fullRuleID)) {
                toolRuleIDs.push(fullRuleID);
              }
            });
          });
        }
        // Otherwise, i.e. if it does not exist in the classification:
        else {
          // Report this and quit.
          console.log(`ERROR: Issue ${issueID} not in issue classification`);
          return {};
        }
      });
    }
    // Otherwise, i.e. if the option specification is invalid:
    else {
      // Report this and quit.
      console.log(`ERROR: Options invalid`);
      return {};
    }
  }
  // Otherwise, i.e. if options are not specified:
  else {
    // Populate the data on tools and rules.
    toolIDs.forEach(toolID => {
      toolsRulesData[toolID] = [];
    });
  }
  // Initialize a script.
  const timeLimit = Math.round(50 + 30 * Object.keys(toolsRulesData).length);
  const scriptObj = {
    id,
    what,
    strict: true,
    isolate: true,
    timeLimit,
    acts: [
      {
        "type": "placeholder",
        "which": "main",
        "launch": "webkit"
      }
    ]
  };
  // For each tool used:
  Object.keys(toolsRulesData).forEach(toolID => {
    // Initialize a test act for it.
    const toolAct = {
      type: 'test',
      which: toolID
    };
    // If rules were specified:
    const ruleIDs = toolsRulesData[toolID];
    if (ruleIDs.length) {
      // Add a rules array as a property to the act.
      toolAct.rules = ruleIDs;
      // If the tool is QualWeb:
      if (toolID === 'qualWeb') {
        // For each QualWeb module:
        const specs = [];
        const prefixes = {
          act: 'QW-ACT-R',
          wcag: 'QW-WCAG-T',
          best: 'QW-BP'
        };
        Object.keys(prefixes).forEach(prefix => {
          // Specify the rules of that module to be tested for.
          const ids = toolAct.rules.filter(id => id.startsWith(prefixes[prefix]));
          const integers = ids.map(id => id.slice(prefixes[prefix].length));
          specs.push(`${prefix}:${integers.join(',')}`);
        });
        // Replace the generic rule list with the QualWeb-format list.
        toolAct.rules = specs;
      }
      // Otherwise, if the tool is Testaro:
      else if (toolID === 'testaro') {
        // Prepend the inclusion option to the rule array.
        toolAct.rules.unshift('y');
      }
    }
    // Add any needed option defaults to the act.
    if (toolID === 'axe') {
      toolAct.detailLevel = 2;
    }
    else if (toolID === 'ibm') {
      toolAct.withItems = true;
      toolAct.withNewContent = false;
    }
    else if (toolID === 'qualWeb') {
      toolAct.withNewContent = false;
    }
    else if (toolID === 'testaro') {
      toolAct.withItems = true;
      toolAct.stopOnFail = false;
    }
    else if (toolID === 'wave') {
      toolAct.reportType = 4;
    }
    // Add the act to the script.
    scriptObj.acts.push(toolAct);
  });
  // Return the script.
  return scriptObj;
}
