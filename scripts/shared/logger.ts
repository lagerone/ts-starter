import colors from 'colors';

enum LogType {
  Debug = 'debug',
  Info = 'info',
  Error = 'error',
  Success = 'success',
  Warning = 'warning',
}

const LOG_TYPE_COLOR_MAP: Record<LogType, colors.Color> = {
  [LogType.Debug]: colors.grey,
  [LogType.Info]: colors.blue,
  [LogType.Error]: colors.red,
  [LogType.Success]: colors.green,
  [LogType.Warning]: colors.yellow,
};

const normalizeArgs = (args: any | any[]): any[] => {
  if (Array.isArray(args)) {
    return args;
  }
  return [args];
};

const log = (type: LogType, args: any | any[]) => {
  const color = LOG_TYPE_COLOR_MAP[type];
  console.log(color(type), ...normalizeArgs(args));
};

const debug = (args: any | any[]) => {
  log(LogType.Debug, args);
};

const info = (args: any | any[]) => {
  log(LogType.Info, args);
};

const error = (args: any | any[]) => {
  log(LogType.Error, args);
};

const success = (args: any | any[]) => {
  log(LogType.Success, args);
};

const warning = (args: any | any[]) => {
  log(LogType.Warning, args);
};

export { debug, info, error, success, warning };
