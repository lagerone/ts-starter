const fs = require('fs');
const path = require('path');
const packageJson = require('../../package.json');

const OUT_PATH = path.join(__dirname, '../../package.json');

const getPackageJson = () => {
  return packageJson;
};

const savePackageJsonSync = filecontent => {
  fs.writeFileSync(
    OUT_PATH,
    `${JSON.stringify(filecontent, null, 2)}\n`,
    error => {
      if (error) {
        console.error(`error: failed to write package.json to "${OUT_PATH}".`);
        throw error;
      }
    }
  );
};

module.exports = { getPackageJson, savePackageJsonSync };
