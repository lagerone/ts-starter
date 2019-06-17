require('dotenv').config({ silent: true });

import errorHandler from 'errorhandler';
import app from './app';
import { logger } from './logger';

app.use(errorHandler());

const server = app.listen(app.get('port'), () => {
  logger.debug(
    `App is running at http://localhost:${app.get('port')} in ${app.get(
      'env'
    )} mode`
  );
  logger.debug('Press CTRL-C to stop');
});

process.on('SIGUSR2', () => {
  logger.debug('Bye bye.');
  process.exit(0);
});

export default server;
