import {
  transports,
  createLogger as create,
  format,
  LoggerOptions,
} from 'winston';

export const createLogger = (options?: LoggerOptions) => {
  const defaultOptions = {
    level: 'info',
    format: format.json(),
    transports: [new transports.Console()],
  };
  return create({
    ...defaultOptions,
    ...options,
  });
};
