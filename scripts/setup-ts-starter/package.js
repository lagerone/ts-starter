const {
  getPackageJson,
  savePackageJsonSync,
} = require('../shared/package-json-service');

const packageJson = getPackageJson();

packageJson.scripts.start = 'nodemon';
packageJson.scripts['setup:jest'] = './scripts/setup-jest/setup-jest.sh';
packageJson.scripts['setup:express'] =
  './scripts/setup-express/setup-express.sh';
packageJson.scripts.clean =
  'git reset --hard && rm -f ./jest.config.js && rm -rf -f ./src/server && rm -f ./package.json && rm -rf -f ./node_modules && rm -f ./yarn.lock';

savePackageJsonSync(packageJson);
