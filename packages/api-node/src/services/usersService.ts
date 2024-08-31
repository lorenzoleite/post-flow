import bcryptjs from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { User } from 'src/entities/User';
import { users } from 'src/database';
import { NotFoundError } from 'src/error/NotFoundError';
import { ConflictError } from 'src/error/ConflictError';

export const getUsersService = async (): Promise<User[]> => {
  return users;
};

export const getUserByIdService = async (id: string): Promise<User> => {
  const user = users.find(user => user.id === id);
  if (!user) throw new NotFoundError('User not found.');

  return user;
};

export const createUserService = async (data: User): Promise<User> => {
  const existingUser = users.find(user => user.email === data.email);
  if (existingUser) throw new ConflictError('User already registered.');

  const passwordHash = await bcryptjs.hash(data.password, 8);
  const newUser: User = {
    id: uuid(),
    name: data.name,
    description: data.description,
    email: data.email,
    password: passwordHash,
  };

  users.push(newUser);

  return newUser;
};

export const updateUserService = async (id: string, data: User): Promise<User> => {
  const userToUpdate = users.find(user => user.id === id);
  if (!userToUpdate) throw new NotFoundError('User not found.');

  const passwordHash = await bcryptjs.hash(data.password, 8);

  userToUpdate.name = data.name;
  userToUpdate.description = data.description;
  userToUpdate.email = data.email;
  userToUpdate.password = passwordHash;

  return userToUpdate;
};

export const deleteUserService = async (id: string): Promise<User> => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) throw new NotFoundError('User not found.');

  const [deletedUser] = users.splice(userIndex, 1);

  return deletedUser;
};
