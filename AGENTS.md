# Testilo - Agent Guide

## Commands
- Lint: `npx eslint <file>`
- No test suite configured (package.json shows placeholder)
- Validation: `node validation/<module>/validate` for specific modules (merge, score, rescore, digest, compare)
- Run modules: `node call <module> [args...]` (e.g., `node call score tsp99`, `node call merge ts25 webOrgs`)

## Architecture
- Node.js app for managing web accessibility testing jobs for Testaro agents
- Main entry point: `call.js` - universal CLI interface to invoke modules
- Core modules in root: `batch.js`, `script.js`, `merge.js`, `score.js`, `digest.js`, `difgest.js`, `compare.js`, `summarize.js`, `track.js`, `credit.js`, `issues.js`, `rescore.js`, `reconcile.js`
- Shared procs in `/procs`: util functions and subdirs for scoring, digesting, comparing, tracking, analyzing
- Specs, jobs, reports stored in directories configured via `.env` (FUNCTIONDIR, SPECDIR, JOBDIR, REPORTDIR)

## Code Style
- ESLint config: 2-space indent, Stroustrup brace style, single quotes, semicolons required, Unix linebreaks
- No member expression indent
- `no-use-before-define` enforced
- CommonJS modules (`require`, `exports`)
- CVS Health copyright header required on all files
