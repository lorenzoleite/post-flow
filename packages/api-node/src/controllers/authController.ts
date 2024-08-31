import { NextFunction, Request, Response } from 'express';
import { authService } from 'src/services/authService';

export const authController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const data = await authService(email, password);

    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
