import { AppError } from './AppError';

export class ConflictError extends AppError {
  constructor(message = 'Resource already exists.', statusCode = 409, logging = false) {
    super(message, statusCode, logging);
  }
}
