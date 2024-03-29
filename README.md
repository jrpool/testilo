# testilo
Utilities for Testaro

## Introduction

The Testilo package contains utilities that facilitate the use of the [Testaro](https://www.npmjs.com/package/testaro) package.

Testaro performs jobs and creates reports in JSON format. The utilities in Testilo fall into two categories:
- Job preparation
- Report enhancement

Because Testilo supports Testaro, this `README` file presumes that you have access to the Testaro `README` file and therefore does not repeat information provided there.

## Dependencies

The `dotenv` dependency lets you set environment variables in an untracked `.env` file. This prevents secret data, such as passwords, from being shared as part of this package.

When Testilo is a dependency of another application, the `.env` file is not imported, because it is not tracked, so all needed environment variables must be provided by the importing application.

## Architecture

Testilo is written in Node.js. Commands are given to Testilo in a command-line (terminal) interface or programmatically.

Shared routines, called _procs_, are located in the `procs` directory.

Testilo can be installed wherever Node.js (version 14 or later) is installed. This can be a server or the same workstation on which Testaro is installed.

The reason for Testilo being an independent package, rather than part of Testaro, is that Testilo can be installed on any host, while Testaro can run successfully only on a Windows, Macintosh, Ubuntu, or Debian workstation. Testaro runs tests similar to those that a human accessibility tester would run, using whatever browsers, input devices, system settings, simulated and attached devices, and assistive technologies tests may require. Thus, Testaro is limited to functionalities that require workstation attributes. For maximum flexibility in the management of Testaro jobs, all other functionalities are located outside of Testaro. You could have software such as Testilo running on a server, communicating with multiple workstations running Testaro. The workstations could receive jobs from the server and return job reports to the server for further processing.

## Configuration

Environment variables for Testilo can be specified in a `.env` file. An example:

```bash
FUNCTIONDIR=./procs
SPECDIR=../testdir/specs
JOBDIR=../testdir/jobs
REPORTDIR=../testdir/reports
SCORED_REPORT_URL=../scored/__id__.json
DIGEST_URL=../digested/__id__.html
```

The first four variables above tell Testilo where to find or save files when a user invokes a function. This decreases the count of arguments that the user would otherwise need to specify.

The other two variables specify the destinations of links to scored reports and digests. Digests produced by Testilo digesters link to scored reports, and difgests produced by Testilo difgesters link to digests. The URLs can be absolute, or, if digests and difgests will be opened from a local filesystem, they can be relative to the linking document, as shown. They include the substring `__id__`. A function that needs the URL of a scored report or digest is expected to substitute the ID of that document for `__id__` to produce the URL. Since the `.env` file is excluded from the repository, importing modules that will use `digest()` need a `SCORED_REPORT_URL` environment variable, and importing modules that will use `difgest()` need a `DIGEST_URL` environment variable.

## Job preparation

### Introduction

Testaro executes _jobs_. In a job, Testaro performs _acts_ (tests and other operations) on _targets_ (typically, web pages). The Testaro `README.md` file specifies the requirements for a job.

You can create a job for Testaro directly, without using Testilo.

Testilo can, however, make job preparation more efficient in these scenarios:
- You want to perform a battery of tests on multiple targets.
- You want to test targets only for particular issues, using whichever tools happen to have tests for those issues.

### Target lists

The simplest version of a list of targets is a _target list_. It is an array of arrays defining 1 or more targets. It can be stored as a text file.

A target is defined by 2 items:
- A description
- A URL

For example, a target list might be:

```javaScript
[
  ['World Wide Web Consortium', 'https://www.w3.org/'],
  ['Mozilla Foundation', 'https://foundation.mozilla.org/en/']
]
```

If this target list were stored as a file, its content would be this, with vertical bars separating the URLs from the descriptions:

```text
World Wide Web Consortium|https://www.w3.org/
Mozilla Foundation|https://foundation.mozilla.org/en/
```

### Batches

Targets can be specified in a more complex way, too. That allows you to create jobs in which particular targets are handled distinctively in particular contexts. The more complex representation of a set of targets is a _batch_. Here is the start of a batch, showing its first target:

```javaScript
{
  id: 'clothing-stores',
  what: 'clothing stores',
  targets: [
    {
      id: 'acme',
      what: 'Acme Clothes',
      which: 'https://acmeclothes.com/',
      acts: {
        public: [
          {
            type: 'launch',
            what: 'Acme Clothes home page',
            url: 'https://acmeclothes.com/'
          }
        ],
        private: [
          {
            type: 'launch',
            what: 'Acme Clothes login page',
            url: 'https://acmeclothes.com/login.html'
          },
          {
            type: 'text',
            which: 'User Name',
            what: 'tester34'
          },
          {
            type: 'text',
            which: 'Password',
            what: '__TESTER34_PASSWORD__'
          },
          {
            type: 'button',
            which: 'Submit',
            what: 'submit the login form'
          },
          {
            type: 'wait',
            which: 'title',
            what: 'account'
          }
        ]
      }
    },
    …
  ]
}
```

As shown, a batch, unlike a target list, defines named sequences of acts. They can be plugged into jobs, so various complex operations can be performed on each target.

A batch is a JavaScript object. It can be converted to JSON and stored in a file.

### Scripts

The generic, target-independent description of a job is _script_. A script can contain _placeholders_ that Testilo replaces with acts from a batch, creating one job per target. Thus, one script plus a batch containing _n_ targets will generate _n_ jobs.

Here is a script:

```javaScript
{
  id: 'ts99',
  what: 'aside mislocation',
  strict: true,
  isolate: true,
  timeLimit: 60,
  acts: [
    {
      type: 'placeholder',
      which: 'private',
      launch: 'chromium'
    },
    {
      type: 'test',
      which: 'axe',
      detailLevel: 2,
      rules: ['landmark-complementary-is-top-level'],
      what: 'Axe'
    },
    {
      type: 'test',
      which: 'qualWeb',
      withNewContent: false,
      rules: ['QW-BP25', 'QW-BP26']
      what: 'QualWeb'
    }
  ]
}
```

A script has several properties that specify facts about the jobs to be created. They include:
- `id`: an ID. A script can be converted from a JavaScript object to JSON and saved in a file in the `SPECDIR` directory, where it will be named by its ID (e.g., if the ID is `ts99`, the file name will be `ts99.json`). Thus, each script needs an `id` with a unique value.
- `what`: a description of the script.
- `strict`: `true` if Testaro is to abort jobs when a target redirects a request to a URL differing substantially from the one specified. If `false` Testaro is to allow redirection. All differences are considered substantial unless the URLs differ only in the presence and absence of a trailing slash.
- `isolate`: If `true`, Testilo, before creating a job, will isolate test acts, as needed, from effects of previous test acts, by inserting a copy of the latest placeholder after each target-modifying test act other than the final act. If `false`, placeholders will not be duplicated.
- `timeLimit`: This specifies the maximum duration, in seconds, of a job. Testaro will abort jobs that are not completed within that time.
- `acts`: an array of acts.

The first act in this example script is a placeholder, whose `which` property is `'private'`. If the above batch were merged with this script, in each job the placeholder would be replaced with the `private` acts of a target. For example, the first act of the first job would launch a Chromium browser, navigate to the Acme login page, complete and submit the login form, wait for the account page to load, run the Axe tests, and then run the QualWeb tests. If the batch contained additional targets, additional jobs would be created, with the login actions for each target specified in the `private` array of the `acts` object of that target.

As shown in this example, when a browser is launched by placeholder substitution, the script can determine the browser type (`chromium`, `firefox`, or `webkit`) by assigning a value to a `launch` property of the placeholder. This allows a script to ensure that the tests it requires are performed with appropriate browser types. Some browser types are incompatible with some tests.

### Target list to batch

If you have a target list, the `batch` module of Testilo can convert it to a simple batch. The batch will contain, for each target, only one array of acts, named `main`, containing only a `launch` act (depending on the script to specify the browser type and the target to specify the URL).

#### Invocation

There are two ways to use the `batch` module.

##### By a module

A module can invoke `batch()` in this way:

```javaScript
const {batch} = require('testilo/batch');
const id = 'divns';
const what = 'divisions';
const targets = [
  ['Energy', 'https://abc.com/energy'],
  ['Water', 'https://abc.com/water']
];
const batchObj = batch(id, what, targets);
```

The `id` argument to `batch()` is a unique identifier for the target list. The `what` variable describes the target list. The `targets` variable is an array of arrays, with each array containing the 2 items (description and URL) defining one target.

The `batch()` function of the `batch` module generates a batch and returns it as an object. Within the batch, each target is given a sequential (base-62 alphanumeric) string as an ID.

The invoking module can further dispose of the batch as needed.

##### By a user

A user can invoke `batch()` in this way:

- Create a target list and save it as a text file (with tab-delimited items in newline-delimited lines) in the `targetLists` subdirectory of the `SPECDIR` directory. Name the file `x.txt`, where `x` is the list ID.
- In the Testilo project directory, execute the statement `node call batch id what`.

In this statement, replace `id` with the list ID and `what` with a string describing the batch. Example: `node call batch divns 'ABC company divisions'`.

The `call` module will retrieve the named target list.
The `batch` module will convert the target list to a batch.
The `call` module will save the batch as a JSON file named `x.json` (replacing `x` with the list ID) in the `batches` subdirectory of the `SPECDIR` directory.

### Script creation

You can use the `script()` function of the `script` module to simplify the creation of scripts.

#### Without options

In its simplest form, `script()` requires two string arguments:
- An ID for the script
- A description of the script

Called in this way, `script()` produces a script that tells Testaro to perform the tests for all of the evaluation rules defined by all of the tools integrated by Testaro.

#### With options

If you want a more focused script, you can add an additional option argument to `script()`. The option argument lets you restrict the rules to be tested for. You may choose between restrictions of two types:
- Tools
- Issues

The option argument is an object. Its properties depend on the restriction type.

For a tool restriction, it has this structure:

```javascript
{
  type: 'tools',
  specs: ['toolID0', 'toolID1', 'toolIDn']
}
```

For an issue restriction, it has this structure:

```javascript
{
  type: 'issues',
  specs: {
    issues: issueClassification,
    issueIDs: ['issue0', 'issue1', 'issueN']
  }
}
```

If you specify tool options, the script will prescribe the tests for all evaluation rules of the tools that you specify.

If you specify issue options, the script will prescribe the tests for all evaluation rules that are classified in the issues whose IDs you specify. Any tools that do not have any of those rules will be omitted. The value of `specs/issues` is an issue classification object, with a structure like the one in `procs/score/tic40.js`. That one classifies about 1000 rules into about 300 issues.

For example, one issue in the `tic40.js` file is `mainNot1`. Four rules are classified as belonging to that issue: rule `main_element_only_one` of the `aslint` tool and 3 more rules defined by 3 other tools. You can also create custom classifications and save them in a `score` subdirectory of the `FUNCTIONDIR` directory.

#### Invocation

There are two ways to use the `script` module.

##### By a module

A module can invoke `script()` in one of these ways:

```javaScript
const {script} = require('testilo/script');
const scriptObj = script('monthly', 'landmarks');
```

```javaScript
const {script} = require('testilo/script');
const options = {…};
const scriptObj = script('monthly', 'landmarks', options);
```

In this example, the script will have `'monthly'` as its ID and `'landmarks'` as its description. It will tell Testaro to test for all evaluation rules if the first form is used, or for all rules specified by the options argument if the second form is used.

The invoking module can further modify and use the script (`scriptObj`) as needed.

##### By a user

A user can invoke `script()` by executing one of these statements in the Testilo project directory:

```javascript
node call script id what
node call script id what tools toolID0 toolID1 toolID2 …
node call script id what issues tic99 issueID0 issueID1 …
```

The first form will create a script with no restrictions.

The second form will create a script that prescribes tests for all the rules of the specified tools.

The third form will create a script that prescribes tests for all the rules classified by the specified issue classification into any of the specified issues.

In this statement, replace `id` with an ID for the script, such as `headings1`, consisting of ASCII alphanumeric characters.

The `call` module will retrieve the named classification, if any.
The `script` module will create a script.
The `call` module will save the script as a JSON file in the `scripts` subdirectory of the `SPECDIR` directory, using the `id` value as the base of the file name.

#### Options

The `script` module will use the value of the `SEND_REPORT_TO` environment variable as the value of the `sendReportTo` property of the script, if that variable exists, and otherwise will leave that property with an empty-string value.

When the `script` module creates a script for you, it does not ask you for all of the other options that the script may require. Instead, it chooses default options. For example, it sets the values of `isolate` and `strict` to `true`, and it sets the `withNewContent` property of the `ibm` tool to `false` to prevent occasional infinite loops or crashes when targets cause HTTP2 protocol errors. After you invoke `script`, you can edit the script that it creates to revise options.

### Merge

Testilo merges batches with scripts, producing Testaro jobs, by means of the `merge` module.

#### Invocation

There are two ways to use the `merge` module.

##### By a module

A module can invoke `merge()` in this way:

```javaScript
const {merge} = require('testilo/merge');
const script = …;
const batch = …;
const standard = 'only';
const observe = false;
const requester = 'me@mydomain.tld';
const timeStamp = '241215T1200';
const jobs = merge(script, batch, standard, observe, requester, timeStamp);
```

The first two arguments are a script and a batch obtained from files or from prior calls to `script()` and `batch()`.

The `standard` argument specifies how to handle standardization. If `also`, jobs will tell Testaro to include in its reports both the original results of the tests of tools and the Testaro-standardized results. If `only`, reports are to include only the standardized test results. If `no`, reports are to include only the original results, without standardization.

The `observe` argument tells Testaro whether the jobs should allow granular observation. If `true`, it will. If `false`, Testaro will not report job progress, but will send reports to the server only when the reports are completed. It is generally user-friendly to allow granular observation, and for user applications to implement it, if they make users wait while jobs are assigned and performed, since that process typically takes a few minutes.

The `requester` argument is an email address to which any notices about the job are to be sent.

The `timeStamp` argument specifies the earliest UTC date and time when the jobs may be assigned, or it may be an empty string if now.

The `merge()` function returns the jobs in an array. The invoking module can further dispose of the jobs as needed.

##### By a user

A user can invoke `merge()` in this way:

- Create a script and save it as a JSON file in the `scripts` subdirectory of the `SPECDIR` directory.
- Create a batch and save it as a JSON file in the `batches` subdirectory of the `SPECDIR` directory.
- In the Testilo project directory, execute the statement:

```javascript
node call merge scriptID batchID standard observe requester timeStamp todoDir
```

In this statement, replace:
- `scriptID` with the ID (which is also the base of the file name) of the script.
- `batchID` with the ID (which is also the base of the file name) of the batch.
- `standard`, `observe`, `requester`, and `timeStamp` as described above.
- `todoDir`: `true` if the jobs are to be saved in the `todo` subdirectory, or `false` if they are to be saved in the `pending` subdirectory, of the `JOBDIR` directory.

The `call` module will retrieve the named script and batch from their respective directories.
The `merge` module will create an array of jobs.
The `call` module will save the jobs as JSON files in the `todo` or `pending` subdirectory of the `JOBDIR` directory.

#### Output

A Testaro job produced by `merge` may look like this:

```javaScript
{
  id: '240115T1200-4R-0',
  what: 'aside mislocation',
  strict: true,
  timeLimit: 60,
  standard: 'also',
  observe: false,
  sendReportTo: 'https://ourdomain.com/testman/api/report'
  timeStamp: '240115T1200',
  acts: [
    {
      type: 'launch',
      which: 'webkit',
      what: 'Acme Clothes',
      url: 'https://acmeclothes.com/'
    },
    {
      type: 'test',
      which: 'axe',
      detailLevel: 2,
      rules: ['landmark-complementary-is-top-level'],
      what: 'Axe'
    },
    {
      type: 'launch',
      which: 'webkit',
      what: 'Acme Clothes',
      url: 'https://acmeclothes.com/'
    },
    {
      type: 'test',
      which: 'qualWeb',
      withNewContent: false,
      rules: ['QW-BP25', 'QW-BP26']
      what: 'QualWeb'
    }
  ],
  sources: {
    script: 'ts99',
    batch: 'clothing-stores',
    lastTarget: false,
    target: {
      id: 'acme',
      what: 'Acme Clothes'
    },
    requester: 'you@yourdomain.tld'
  },
  creationTimeStamp: '241120T1550'
}
```

#### Validation

To test the `merge` module, in the project directory you can execute the statement `node validation/merge/validate`. If `merge` is valid, all logging statements will begin with “Success” and none will begin with “ERROR”.

## Report enhancement

### Introduction

Testaro executes jobs and produces reports of test results. A report is identical to a job (see the example above), except that:
- The acts contain additional data recorded by Testaro to describe the results of the performance of the acts. Acts of type `test` have additional data describing test results (successes, failures, and details).
- Testaro also adds a `jobData` property, describing information not specific to any particular act.

Thus, a report produced by Testaro contains these properties:
- `id`
- `what`
- `strict`
- `timeLimit`
- `standard`
- `observe`
- `sendReportTo`
- `timeStamp`
- `acts`
- `sources`
- `creationTimeStamp`
- `jobData`

Testilo can enhance such a report by:
- adding scores
- creating digests
- creating difgests
- summarizing reports
- comparing scores
- tracking score changes
- crediting tools

### Scoring

The `score` module of Testilo performs computations on test results and adds a `score` property to a report.

The `score()` function of the `score` module takes two arguments:
- a scoring function
- a report object

A scoring function defines scoring rules. The Testilo package contains a `procs/score` directory, in which there are modules that export scoring functions. You can use one of those scoring functions, or you can create your own.

#### Scorers

The built-in scoring functions are named `scorer()` and are exported by files whose names begin with `tsp` (for Testilo scoring proc).

##### Issues

Those functions make use of `issues` objects defined in files whose names begin with `tic`. An `issues` object defines an issue classification: a body of data about rules of tools and the tool-agnostic issues that those rules are deemed to belong to.

The properties of an `issues` object are issue objects: objects containing data about issues. Here is an example from `tic40.js`:

```javascript
multipleLabelees: {
  summary: 'labeled element ambiguous',
  why: 'User cannot get help on the topic of a form item',
  wcag: '1.3.1',
  weight: 4,
  tools: {
    aslint: {
      label_implicitly_associatedM: {
        variable: false,
        quality: 1,
        what: 'Element contains more than 1 labelable element.'
      }
    },
    nuVal: {
      'The label element may contain at most one button, input, meter, output, progress, select, or textarea descendant.': {
        variable: false,
        quality: 1,
        what: 'Element has more than 1 labelable descendant.'
      },
      'label element with multiple labelable descendants.': {
        variable: false,
        quality: 1,
        what: 'Element has multiple labelable descendants.'
      }
    }
  }
},
```

In this example, `multipleLabelees` is the issue ID. The `weight` property represents the severity of the issue and ranges from 1 to 4. The `tools` property is an object containing data about the tools that have rules deemed to belong to the issue. Here there are 2 such tools: `aslint` and `nuVal`. The tool properties are objects containing data about the relevant rules of those tools: 1 from the `aslint` tool and 2 from the `nuVal` tool.

The property for each rule has the rule ID as its name.

The `variable` property is `true` if the rule ID is a regular expression or `false` if the rule ID is a string. Most rule IDs are strings, but some rules have patterns rather than constant strings as their identifiers, and in those cases regular expressions matching the patterns are the property names.

The `quality` property is usually 1, but if the test of the rule is known to be inaccurate the value is a fraction of 1, so the result of that test will be downweighted.

Some issue objects (such as `flash` in `tic40.js`) have a `max` property, equal to the maximum possible count of instances. That property allows a scorer to ascribe a greater weight to an instance of that issue.

##### Output

A scorer adds a `score` property to the report that it scores.

#### Invocation

There are two ways to invoke the `score` module.

##### By a module

A module can invoke `score()` in this way:

```javaScript
const {score} = require('testilo/score');
const {scorer} = require('testilo/procs/score/tsp99');
const report = …;
score(scorer, report);
```

The first argument to `score()` is a scoring function. In this example, it has been obtained from a module in the Testilo package, but it could be a custom function.

The second argument to `score()` is a report object. It may have been read from a JSON file and parsed, or parsed from the body of a `POST` request received from a Testaro agent.

The invoking module can further dispose of the scored report as needed.

##### By a user

A user can invoke `score()` in this way:

```bash
node call score tsp99
node call score tsp99 240922
```

When a user invokes `score()` in this example, the `call` module:
- gets the scoring module `tsp99` from its JSON file `tsp99.json` in the `score` subdirectory of the `FUNCTIONDIR` directory.
- gets all reports, or if the third argument to `call()` exists the reports whose file names begin with `'240922'`, from the `raw` subdirectory of the `REPORTDIR` directory.
- adds score data to each report.
- writes each scored report in JSON format to the `scored` subdirectory of the `REPORTDIR` directory.

#### Validation

To test the `score` module, in the project directory you can execute the statement `node validation/score/validate`. If `score` is valid, all logging statements will begin with “Success” and none will begin with “ERROR”.

### Rescoring

The `rescore` module of Testilo creates a new report for a subset of the results in an existing report.

Any scored report is based on a set of tests of a set of tools. Suppose you want to disregard some of those tests and get a revised report for only the remaining tests. The `rescore` module does this for you.

A typical use case is your desire to examine results for only one or only some of the tools that were used for a report. All the needed information is in the report, so it is not necessary to create, perform, and await a new job and report. You want a new report whose standard results and score data are what a new job would have produced.

The `rescore()` function of the `rescore` module takes four arguments:
- a scoring function
- a report object
- a restriction type (`'tools'` or `'issues'`)
- an array of IDs of the tools or issues to be included

Then the `rescore()` function copies the report, removes the no-longer-relevant acts, removes the no-longer-relevant instances from and revises the totals of the `standardResult` properties, replaces the `score` property with a new one, and returns the revised report.

The new report is not identical to the report that a new job would have produced, because:
- Any original (non-standardized) results and data that survive in the new report are not revised.
- Any scores arising from causes other than test results, such as latency or browser warnings, are not revised.
- The `score` property object now includes a `rescore` property that identifies the original report ID (in case it is later changed), the date and time of the rescoring, the restriction type, and an array of the tool or issue IDs included by the restriction.

#### Invocation

There are two ways to invoke the `rescore` module.

##### By a module

A module can invoke `rescore()` in this way:

```javaScript
const {rescore} = require('testilo/rescore');
const {scorer} = require('testilo/procs/score/tsp99');
const report = …;
const restrictionType = 'tools';
const restrictions = ['axe', 'nuVal'];
rescore(scorer, report, restrictionType, restrictions);
```

The invoking module can further dispose of the rescored report as needed. Disposal may require revising the ID of the report so that the original and the rescored reports have distinct IDs.

##### By a user

A user can invoke `rescore()` in this way:

```bash
node call rescore tsp99 '' tools axe nuVal
node call rescore tsp99 240922 tools axe nuVal
```

When a user invokes `rescore()` in this example, the `call` module:
- gets the scoring module `tsp99` from its JSON file `tsp99.json` in the `score` subdirectory of the `FUNCTIONDIR` directory.
- gets all reports, or if the third argument to `call()` is nonempty the reports whose file names begin with `'240922'`, from the `scored` subdirectory of the `REPORTDIR` directory.
- defines an ID suffix.
- revises the `stardardResult` properties in each report.
- replaces the `score` property in each report.
- appends the ID suffix to the ID of each report.
- writes each rescored report in JSON format to the `scored` subdirectory of the `REPORTDIR` directory.

#### Validation

To test the `rescore` module, in the project directory you can execute the statement `node validation/rescore/validate`. If `rescore` is valid, all logging statements will begin with “Success” and none will begin with “ERROR”.

### Digesting

#### Introduction

Reports from Testaro are JavaScript objects. When represented as JSON, they are human-readable, but not human-friendly. They are basically designed for machine tractability. This is equally true for reports that have been scored by Testilo. But Testilo can _digest_ a scored report, converting it to a human-oriented HTML document, or _digest_.

The `digest` module digests a scored report. Its `digest()` function takes three arguments:
- a digester (a digesting function)
- a scored report object
- the URL of a directory containing the scored reports

The digester populates an HTML digest template. A copy of the template, with its placeholders replaced by computed values, becomes the digest. The digester defines the rules for replacing the placeholders with values. The Testilo package contains a `procs/digest` directory, in which there are subdirectories, each containing a template and a module that exports a digester. You can use one of those modules, or you can create your own.

The included templates format placeholders with leading and trailing underscore pairs (such as `__issueCount__`).

#### Invocation

There are two ways to use the `digest` module.

##### By a module

A module can invoke `digest()` in this way:

```javaScript
const {digest} = require('testilo/digest');
const digesterDir = `${process.env.FUNCTIONDIR}/digest/tdp99a`;
const {digester} = require(`${digesterDir}/index`);
const scoredReport = …;
digest(digester, scoredReport)
.then(digestedReport => {…});
```

The first argument to `digest()` is a digester. In this example, it has been obtained from a file in the Testilo package, but it could be custom-made.

The second argument to `digest()` is a scored report object. It may have been read from a JSON file and parsed, or may be a report scored by `score()`.

The `digest()` function returns a promise resolved with a digest. The invoking module can further dispose of the digest as needed.

##### By a user

A user can invoke `digest()` in this way:

```bash
node call digest tdp99
node call digest tdp99 241105
```

When a user invokes `digest()` in this example, the `call` module:
- gets the template and the digesting module from subdirectory `tdp99` in the `digest` subdirectory of the `FUNCTIONDIR` directory.
- gets all reports, or if the third argument to `call()` exists all reports whose file names begin with `'241105'`, from the `scored` subdirectory of the `REPORTDIR` directory.
- digests each report.
- writes the digested reports to the `digested` subdirectory of the `REPORTDIR` directory.
- includes in each digest a link to the scored report, with the link destination being based on `SCORED_REPORT_URL`.

The digests created by `digest()` are HTML files, and they expect a `style.css` file to exist in their directory. The `reports/digested/style.css` file in Testilo is an appropriate stylesheet to be copied into the directory where digested reports are written.

### Difgesting

#### Introduction

A _difgest_ is a digest that compares two reports. They can be reports of different targets, or reports of the same target from two different times or under two different conditions.

The `difgest` module difgests two scored reports. Its `difgest()` function takes five arguments:
- a difgest template
- a difgesting function
- a scored report object
- another scored report object
- the URL of the digest of the first scored report
- the URL of the digest of the second scored report

The difgest template and module operate like the digest ones.

#### Invocation

There are two ways to use the `difgest` module.

##### By a module

A module can invoke `difgest()` in this way:

```javaScript
const {difgest} = require('testilo/difgest');
const difgesterDir = `${process.env.FUNCTIONDIR}/difgest/tdp99a`;
const {difgester} = require(`${difgesterDir}/index`);
const scoredReportA = …;
const scoredReportB = …;
const digestAURL = 'https://abc.com/testing/reports/digested/241022T1458-0.html';
const digestBURL = 'https://abc.com/testing/reports/digested/241029T1458-0.html';
difgest(difgester, scoredReportA, scoredReportB, digestAURL, digestBURL)
.then(difgestedReport => {…});
```

The difgest will include links to the two digests, which, in turn, contain links to the full reports.

`difgest()` returns a difgest. The invoking module can further dispose of the difgest as needed.

##### By a user

A user can invoke `difgest()` in this way:

```bash
node call difgest tfp99 20141215T1200-x7-3 20141215T1200-x7-4
```

When a user invokes `difgest` in this example, the `call` module:
- gets the template and the difgesting module from subdirectory `tfp99` in the `difgest` subdirectory of the `FUNCTIONDIR` directory.
- gets reports `20141215T1200-x7-3` and `20141215T1200-x7-4` from the `scored` subdirectory of the `REPORTDIR` directory.
- writes the difgested report to the `difgested` subdirectory of the `REPORTDIR` directory.

Difgests include links to the digests of the two reports. The destinations of those links are obtained from the `DIFGEST_URL` environment variable.

Difgests expect a `style.css` file to exist in their directory, as digests do.

#### Validation

To test the `digest` module, in the project directory you can execute the statement `node validation/digest/validate`. If `digest` is valid, all logging statements will begin with “Success” and none will begin with “ERROR”.

### Summarization

The `summarize` module of Testilo can summarize a scored report. The summary is an object that contains these properties from the report: `id`, `endTime`, `sources`, and `score` (the value of the `score.total` property of the report).

#### Invocation

##### By a module

A module can invoke `summarize()` in this way:

```javaScript
const {summarize} = require('testilo/summarize');
const report = …;
const summary = summarize(report);
…
```

The `report` argument is a scored report. The `summary` constant is an object. The module can further dispose of `summary` as needed.

##### By a user

A user can invoke `summarize()` in either of these two ways:

```javaScript
node call summarize divisions
node call summarize divisions 2411
```

When a user invokes `summarize` in this example, the `call` module:
- gets all the reports in the `scored` subdirectory of the `REPORTDIR` directory, or (if the third argument is present) all those whose file names begin with `2411`.
- creates a summary of each report.
- combines the summaries into an array.
- creates a _summary report_, an object containing three properties: an ID, a description (here `'divisions'`), and the array of summaries.
- writes the summary report in JSON format to the `summarized` subdirectory of the `REPORTDIR` directory, using the ID as the base of the file name.

#### Summary reports

A summary report serves as a necessary input to the `compare` and `track` modules described below. When a user invokes the `compare` module, a summary report is produced. A module can create a summary report by invoking `compare` multiple times on different scored reports, assembling the resulting summaries into an array, and creating an object like the one the `call` module creates for a user.

### Comparison

If you use Testilo to perform a battery of tests on multiple targets, you may want a single report that compares the total scores received by the targets. Testilo can produce such a _comparison_.

The `compare` module compares the scores in a summary report. The `compare()` function of the `compare` module takes two arguments:
- a comparison function
- a summary report

The comparison function defines the rules for generating an HTML file comparing the scored reports. The Testilo package contains a `procs/compare` directory, in which there are subdirectories containing modules that export comparison functions. You can use one of those functions, or you can create your own.

Summary reports suitable for comparisons are those that contain one result per target. If a summary report contains results from multiple times per target, tracking (described below) is appropriate, rather than comparison.

#### Invocation

There are two ways to use the `compare` module.

##### By a module

A module can invoke `compare()` in this way:

```javaScript
const {compare} = require('testilo/compare');
const comparerDir = `${process.env.FUNCTIONDIR}/compare/tcp99`;
const {comparer} = require(`${comparerDir}/index`);
const id = …;
compare(id, comparer, summaryReport)
.then(comparison => {…});
```

The first argument to `compare()` is an ID that will be named in the comparison. The second argument is a comparison function. In this example, it been obtained from a file in the Testilo package, but it could be custom-made. The third argument is a summary report. The `compare()` function returns a comparison. The invoking module can further dispose of the comparison as needed.

##### By a user

A user can invoke `compare()` in this way:

```bash
node call compare 'state legislators' tcp99 240813
```

When a user invokes `compare` in this example, the `call` module:
- gets the comparison module from subdirectory `tcp99` of the subdirectory `compare` in the `FUNCTIONDIR` directory.
- gets the first summary report whose file name begins with `'240813'` from the `summarized` subdirectory of the `REPORTDIR` directory.
- creates an ID for the comparison.
- creates the comparison as an HTML document.
- writes the comparison in the `comparative` subdirectory of the `REPORTDIR` directory, with `state legislators` as a description and the ID as the base of the file name.

The comparative report created by `compare` is an HTML file, and it expects a `style.css` file to exist in its directory. The `reports/comparative/style.css` file in Testilo is an appropriate stylesheet to be copied into the directory where comparative reports are written.

#### Validation

To test the `compare` module, in the project directory you can execute the statement `node validation/compare/validate`. If `compare` is valid, all logging statements will begin with “Success” and none will begin with “ERROR”.

### Track

The `track` module of Testilo selects, organizes, and presents data from summaries to show changes over time in total scores. The module produces a web page, showing changes in a table and a line graph. The line graph contains a line for each target (namely, each value of the `sources.target.what` property).

A typical use case for tracking is monitoring, i.e. periodic auditing of one or more web pages.

#### Invocation

##### By a module

A module can invoke `track()` in this way:

```javaScript
const {track} = require('testilo/track');
const trackerDir = `${process.env.FUNCTIONDIR}/track/ttp99a`;
const {tracker} = require(`${trackerDir}/index`);
const summaryReport = …;
const [reportID, 'main competitors', trackReport] = track(tracker, summaryReport);
```

The `track()` function returns, as an array, an ID and an HTML tracking report that shows data for all of the results in the summary report and identifies “main competitors” as its subject. The invoking module can further dispose of the tracking report as needed.

##### By a user

A user can invoke `track()` in one of these ways:

```javaScript
node call track ttp99a 'main competitors'
node call track ttp99a 'main competitors' 241016
node call track ttp99a 'main competitors' '' 'ABC Foundation'
node call track ttp99a 'main competitors' 241016 'ABC Foundation'
```

When a user invokes `track()` in this example, the `call` module:
- gets the summary report from the last file in the `summarized` subdirectory of the `REPORTDIR` directory, or if the third argument to `call()` exists and is not empty the last one whose name begins with `'241016'`.
- selects the summarized data for all results in the summary report, or if the fourth argument to `call()` exists from all results whose `target.what` property has the value `'ABC Foundation'`.
- uses tracker `ttp99a` to create a tracking report that identifies “main competitors” as its subject.
- assigns an ID to the tracking report.
- writes the tracking report to the `tracking` subdirectory of the `REPORTDIR` directory, with the ID as the base of its file name.

The tracking reports created by `track()` are HTML files, and they expect a `style.css` file to exist in their directory. The `reports/tracking/style.css` file in Testilo is an appropriate stylesheet to be copied into the directory where tracking reports are written.

### Tool crediting

If you use Testaro to perform all the tests of all the tools on multiple targets and score the reports with a score proc that maps tool rules onto tool-agnostic issues, you may want to tabulate the comparative efficacy of each tool in discovering instances of issues. Testilo can help you do this by producing a _credit report_.

The `credit` module tabulates the contribution of each tool to the discovery of issue instances in a collection of scored reports. Its `credit()` function takes two arguments: a report description and an array of `score` properties of scored reports.

The credit report contains four sections:
- `counts`: for each issue, how many instances each tool reported
- `onlies`: for each issue of which only 1 tool reported instances, which tool it was
- `mosts`: for each issue of which at least 2 tools reported instances, which tool(s) reported the maximum instance count
- `tools`: for each tool, two sections:
    - `onlies`: a list of the issues that only the tool reported instances of
    - `mosts`: a list of the issues for which the instance count of the tool was not surpassed by that of any other tool

#### Invocation

There are two ways to use the `credit` module.

##### By a module

A module can invoke `credit()` in this way:

```javaScript
const {credit} = require('testilo/credit');
const reportScores = […];
credit('June 2025', reportScores)
.then(creditReport => {…});
```

The first argument to `credit()` is a description to be included in the credit report. The second argument is an array of `score` properties of scored report objects. The `credit()` function returns a credit report. The invoking module can further dispose of the credit report as needed.

##### By a user

A user can invoke `credit()` in one of these ways:

```bash
node call credit legislators
node call credit legislators 241106
```

When a user invokes `credit` in this example, the `call` module:
- gets all reports, or if the third argument to `call()` exists all reports whose file names begin with `'241106'`, in the `scored` subdirectory of the `REPORTDIR` directory. 
- gets the `score` properties of those reports.
- creates an ID for the credit report.
- writes the credit report as a JSON file, with the ID as the base of its file name and `legislators` as its description, to the `credit` subdirectory of the `REPORTDIR` directory.

## Origin

Work on the functionalities of Testaro and Testilo began in 2017. It was named [Autotest](https://github.com/jrpool/autotest) in early 2021 and then partitioned into the more single-purpose packages Testaro and Testilo in January 2022.

## Etymology

“Testilo” means “testing utility” in Esperanto.
