import { Context, Next } from 'koa';
import { createLogger } from '../logger';
const logger = createLogger();

export const requestLogger = () => async (ctx: Context, next: Next) => {
  const start = Date.now();
  try {
    logger.info({
      message: `Request Start - ${ctx.method} ${ctx.url}`,
      requestId: ctx.headers.requestId,
      sourceIp: ctx.headers.sourceIp,
    });
    await next();
  } finally {
    const ms = Date.now() - start;
    logger.info({
      message: `Request End - ${ctx.method} ${ctx.url}`,
      requestId: ctx.headers.requestId,
      sourceIp: ctx.headers.sourceIp,
      duration: ms + 'ms',
    });
  }
};
