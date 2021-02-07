import serverless from 'serverless-http';
import { APIGatewayEvent } from 'aws-lambda';

export const serverlessHttp = (
  app: serverless.Application
): (() => serverless.Handler) => {
  let handler: any;
  return () => {
    if (!handler) {
      console.log('initializing cache.');
      handler = serverless(app, {
        request(request: any, event: APIGatewayEvent) {
          request.headers.sourceIp = event.requestContext.identity.sourceIp;
          request.headers.requestId = event.requestContext.requestId;
        },
      });
    }
    return handler;
  };
};
