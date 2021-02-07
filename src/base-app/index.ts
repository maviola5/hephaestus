import Koa from 'koa';
import koaBodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import { errorHandler } from '../error-handler';
import { requestLogger } from '../request-logger';

export const app = new Koa()
  .use(requestLogger())
  .use(cors())
  .use(koaBodyParser())
  .use(errorHandler());
