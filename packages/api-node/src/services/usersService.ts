import bcryptjs from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { User } from 'src/entities/User';
import { users } from 'src/database';

export const getUsersService = async (): Promise<User[]> => {
  return users;
};

export const getUserByIdService = async (id: string): Promise<User> => {
  const user = users.find(user => user.id === id);
  if (!user) throw new Error('Usuário não encontrado.');

  return user;
};

export const createUserService = async (data: User): Promise<User> => {
  const existingUser = users.find(user => user.email === data.email);
  if (existingUser) throw new Error('Usuário já cadastrado com este e-mail.');

  try {
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
  } catch (err) {
    throw new Error('Não foi possível cadastrar o usuário.');
  }
};

export const updateUserService = async (id: string, data: User): Promise<User> => {
  const userToUpdate = users.find(user => user.id === id);
  if (!userToUpdate) throw new Error('Usuário não encontrado.');

  try {
    const passwordHash = await bcryptjs.hash(data.password, 8);

    userToUpdate.name = data.name;
    userToUpdate.description = data.description;
    userToUpdate.email = data.email;
    userToUpdate.password = passwordHash;

    return userToUpdate;
  } catch (err) {
    throw new Error('Não foi possível editar o usuário.');
  }
};

export const deleteUserService = async (id: string): Promise<User> => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) throw new Error('Usuário não encontrado.');

  try {
    const [deletedUser] = users.splice(userIndex, 1);

    return deletedUser;
  } catch (err) {
    throw new Error('Não foi possível excluir o usuário.');
  }
};
