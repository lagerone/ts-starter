import { installDevDependencies } from '../shared/package-manager';
import * as logger from '../shared/logger';

const devDependencies = [
  '@types/shelljs',
  '@types/node',
  '@types/winston',
  'eslint',
  'nodemon',
  'ts-node',
  'tslint',
  'tslint-config-prettier',
  'typescript',
];

(async () => {
  try {
    logger.info('installing devDependencies...');
    await installDevDependencies(devDependencies);
  } catch (error) {
    logger.error(error);
  }
})();
