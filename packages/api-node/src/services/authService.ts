import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { serverConfig } from 'src/config/server';
import { users } from 'src/database';
import { AuthError } from 'src/error/AuthError';

const { APP_SECRET } = serverConfig;

export const authService = async (email: string, password: string) => {
  const user = users.find(user => user.email === email);

  if (!user) throw new AuthError('User not found.', 404);

  if (!(await bcryptjs.compare(password, user.password))) throw new AuthError('Invalid password.', 401);

  const token = jwt.sign({ id: user.id }, APP_SECRET, { expiresIn: '1d' });

  const data = {
    id: user.id,
    name: user.name,
    email: user.email,
    token,
  };

  return data;
};
