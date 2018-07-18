const {
  getPackageJson,
  savePackageJsonSync,
} = require('../shared/package-json-service');

const packageJson = getPackageJson();

packageJson.scripts.start = 'nodemon';
packageJson.scripts['setup:jest'] = './scripts/setup-jest/setup-jest.sh';
packageJson.scripts['setup:express'] =
  './scripts/setup-express/setup-express.sh';
packageJson.scripts.reset = './scripts/reset/reset.sh';

savePackageJsonSync(packageJson);
