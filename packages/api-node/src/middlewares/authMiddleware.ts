import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { serverConfig } from 'src/config/server';

const { APP_SECRET } = serverConfig;

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'O token é obrigatório.' });

  const [, accessToken] = token.split(' ');

  try {
    jwt.verify(accessToken, APP_SECRET);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'O token não é válido.' });
  }
};
