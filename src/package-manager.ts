import { spawn } from 'child_process';
import * as logger from './logger';

const runCommand = (command: string, args: string[]) => {
  return new Promise((resolve, reject) => {
    const cmd = spawn(command, args);

    cmd.stdout.on('data', chunk => {
      chunk
        .toString()
        .split('\n')
        .filter(s => !!s)
        .forEach(s => {
          logger.debug(s.replace('+ ', ''));
        });
    });

    cmd.on('exit', exitCode => {
      if (exitCode !== 0) {
        reject(
          `command "${command}" with args ${JSON.stringify(args)} failed.`
        );
      }
    });

    cmd.stdout.on('end', () => {
      resolve();
    });
  });
};

const installDevDependencies = (args: string[]) => {
  return runCommand('yarn', ['add', '--dev', ...args]);
};

const installDependencies = (args: string[]) => {
  return runCommand('yarn', ['add', ...args]);
};

export { installDevDependencies, installDependencies };
