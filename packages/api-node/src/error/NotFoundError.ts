import { AppError } from './AppError';

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found.', statusCode = 404, logging = false) {
    super(message, statusCode, logging);
  }
}
