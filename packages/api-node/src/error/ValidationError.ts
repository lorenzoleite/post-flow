import { AppError } from './AppError';

export class ValidationError extends AppError {
  constructor(message = 'Invalid input.', statusCode = 400, logging = false) {
    super(message, statusCode, logging);
  }
}
