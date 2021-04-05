import { Context, Next } from 'koa';
import { createLogger } from '../logger';
const logger = createLogger();

export const errorHandler = () => async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    logger.info(err);
    ctx.status = err.status || 500;
    ctx.body = ctx.status === 500 ? 'Internal server error' : err.message;
  }
};
