#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("colors"));
var LogType;
(function (LogType) {
    LogType["Debug"] = "debug";
    LogType["Info"] = "info";
    LogType["Error"] = "error";
    LogType["Success"] = "success";
    LogType["Warning"] = "warning";
})(LogType || (LogType = {}));
const LOG_TYPE_COLOR_MAP = {
    [LogType.Debug]: colors_1.default.grey,
    [LogType.Info]: colors_1.default.blue,
    [LogType.Error]: colors_1.default.red,
    [LogType.Success]: colors_1.default.green,
    [LogType.Warning]: colors_1.default.yellow,
};
const normalizeArgs = (args) => {
    if (Array.isArray(args)) {
        return args;
    }
    return [args];
};
const log = (type, args) => {
    const color = LOG_TYPE_COLOR_MAP[type];
    console.log(color(type), ...normalizeArgs(args));
};
const debug = (args) => {
    log(LogType.Debug, args);
};
exports.debug = debug;
const info = (args) => {
    log(LogType.Info, args);
};
exports.info = info;
const error = (args) => {
    log(LogType.Error, args);
};
exports.error = error;
const success = (args) => {
    log(LogType.Success, args);
};
exports.success = success;
const warning = (args) => {
    log(LogType.Warning, args);
};
exports.warning = warning;
//# sourceMappingURL=logger.js.map