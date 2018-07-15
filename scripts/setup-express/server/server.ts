require('dotenv').config({ silent: true });
import errorHandler from 'errorhandler';
import app from './app';
import log from './log';

app.use(errorHandler());

const server = app.listen(app.get('port'), () => {
  log.debug(
    `App is running at http://localhost:${app.get('port')} in ${app.get(
      'env'
    )} mode`
  );
  log.debug('Press CTRL-C to stop');
});

process.on('SIGUSR2', () => {
  log.debug('  Bye bye');
  process.exit(0);
});

export default server;
