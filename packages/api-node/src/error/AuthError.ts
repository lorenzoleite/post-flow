import { AppError } from './AppError';

export class AuthError extends AppError {
  constructor(message = 'Authentication failed.', statusCode = 401, logging = false) {
    super(message, statusCode, logging);
  }
}
