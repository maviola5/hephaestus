export class NotFoundError extends Error {
  message: string;
  status: number;
  constructor(message = 'Resource not found.', status = 404) {
    super();
    this.message = message;
    this.status = status;
  }
}
