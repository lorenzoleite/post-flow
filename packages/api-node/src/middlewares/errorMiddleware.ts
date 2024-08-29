import { NextFunction, Request, Response } from 'express';
import { AppError } from 'src/error/AppError';

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error!';

  if (err.logging) {
    console.error(
      JSON.stringify(
        {
          statusCode: statusCode,
          message: message,
          stack: err.stack,
        },
        null,
        2,
      ),
    );
  }

  return res.status(statusCode).json({ statusCode, message });
};
