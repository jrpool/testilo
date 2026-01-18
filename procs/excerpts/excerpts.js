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
  excerpts
  Excerpt collation proc

  Adds a directory of element excerpts to a Testaro report.
*/

// FUNCTIONS

// Adds a directory of element excerpts to a Testaro report.
exports.collateExcerpts = report => {
  const {acts} = report;
  // If there are any acts in the report:
  if (Array.isArray(acts) && acts.length) {
    // Get those that are test acts.
    const testActs = acts.filter(act => act.type === 'test');
    // If there are any:
    if (testActs.length) {
      // Initialize an excerpt directory in the report in place.
      const excerpts = report.excerpts = {};
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
            // Get the excerpt and path ID, if any, of the element.
            const {excerpt, pathID} = instance;
            excerpts[pathID] ??= {};
            // If both exist:
            if (excerpt && pathID) {
              // Add the excerpt to the directory unless one already exists.
              excerpts[pathID][which] ??= excerpt;
            }
          });
        }
      });
    }
  }
};
