"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const logger = __importStar(require("./logger"));
const runCommand = (command, args) => {
    return new Promise((resolve, reject) => {
        const cmd = child_process_1.spawn(command, args);
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
                reject(`command "${command}" with args ${JSON.stringify(args)} failed.`);
            }
        });
        cmd.stdout.on('end', () => {
            resolve();
        });
    });
};
const installDevDependencies = (args) => {
    return runCommand('yarn', ['add', '--dev', ...args]);
};
exports.installDevDependencies = installDevDependencies;
const installDependencies = (args) => {
    return runCommand('yarn', ['add', ...args]);
};
exports.installDependencies = installDependencies;
//# sourceMappingURL=package-manager.js.map