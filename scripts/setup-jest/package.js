const {
  getPackageJson,
  savePackageJsonSync,
} = require('../shared/package-json-service');

const packageJson = getPackageJson();

packageJson.scripts.test = 'jest';
packageJson.scripts['test:watch'] = 'jest --watchAll';

savePackageJsonSync(packageJson);
