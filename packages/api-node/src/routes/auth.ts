import { Router } from 'express';
import { authController } from 'src/controllers/authController';

export const authRouter = Router();

authRouter.post('/login', authController);
