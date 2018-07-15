const fs = require('fs');
const path = require('path');
const package = require('../../package.json');

const OUT_PATH = path.join(__dirname, '../../package.json');

package.scripts.test = 'jest';
package.scripts['test:watch'] = 'jest --watchAll';

fs.writeFile(OUT_PATH, `${JSON.stringify(package, null, 2)}\n`, error => {
  if (error) {
    console.error(`error: could not write package.json to "${OUT_PATH}".`);
    throw error;
  }
});
