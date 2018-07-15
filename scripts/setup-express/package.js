const {
  getPackageJson,
  savePackageJsonSync,
} = require('../shared/package-json-service');

const packageJson = getPackageJson();

packageJson.scripts['start:server'] =
  'echo "\\033[0;33mEdit nodemon.json exec path to src/server/server.ts to nodemon server\\033[0m"';

savePackageJsonSync(packageJson);
