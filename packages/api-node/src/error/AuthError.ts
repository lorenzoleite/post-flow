import { AppError } from './AppError';

export class AuthError extends AppError {
  constructor(message = 'Authentication failed', statusCode = 404, logging = false) {
    super(message, statusCode, logging);
  }
}
