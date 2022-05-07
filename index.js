/*
  index.js
  Testilo main script.
*/

// ########## IMPORTS

// Module to perform tests.
const {handleRequest} = require('testaro');
const fs = require('fs').promises;

// ########## FUNCTIONS

// Converts a script to a batch-based array of scripts.
const batchify = (script, batch, timeStamp) => {
  const {hosts} = batch;
  const specs = hosts.map(host => {
    const newScript = Object.assign({}, script);
    newScript.acts.forEach(act => {
      if (act.type === 'url') {
        act.which = host.which;
        act.what = host.what;
      }
    });
    const spec = {
      id: `${timeStamp}-${host.id}`,
      script: newScript
    };
    return spec;
  });
  return specs;
};
// Calls Testaro.
const callTestaro = async (id, script) => {
  const report = {
    id,
    log: [],
    script,
    acts: []
  };
  await handleRequest(report);
  const reportJSON = JSON.stringify(report, null, 2);
  await fs.writeFile(`reports/${id}.json`, reportJSON);
};
// Runs a job.
const run = async () => {
  const scriptName = process.argv[2];
  const batchName = process.argv[3];
  if (scriptName) {
    try {
      const scriptJSON = await fs.readFile(`scripts/${scriptName}.json`, 'utf8');
      const script = JSON.parse(scriptJSON);
      let batch = null;
      // Identify the start time and a timestamp.
      const timeStamp = Math.floor((Date.now() - Date.UTC(2022, 1)) / 2000).toString(36);
      // If there is a batch:
      if (batchFileName) {
        // Convert the script to a batch-based set of scripts.
        const batchJSON = await fs.readFile(`batches/${batchName}.json`, 'utf8');
        batch = JSON.parse(batchJSON);
        const specs = batchify(script, batch, timeStamp);
        // For each script:
        while (specs.length) {
          const spec = specs.shift();
          const {id, script} = spec;
          // Call Testaro on it and save the result with a host-suffixed ID.
          await callTestaro(id, script);
        }
      }
      // Otherwise, i.e. if there is no batch:
      else {
        // Call Testaro on the script and save the result with a timestamp ID.
        await callTestaro(timeStamp, script);
      }
    }
    catch(error) {
      console.log(`ERROR: ${error.message}\n${error.stack}`);
    }
  }
  else {
    console.log('ERROR: no script specified');
  }
};

// ########## OPERATION

run();
