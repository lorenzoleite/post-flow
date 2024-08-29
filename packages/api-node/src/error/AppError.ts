export abstract class AppError extends Error {
  public readonly statusCode: number;
  public readonly logging?: boolean;

  constructor(message: string, statusCode: number, logging?: boolean) {
    super(message);
    this.statusCode = statusCode;
    this.logging = logging;

    Error.captureStackTrace(this, this.constructor);
  }
}
