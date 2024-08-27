import bcryptjs from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { User } from 'src/entities/User';

const { hash } = bcryptjs;

let users: User[] = [
  { id: '1', name: 'Lorenzo', description: 'Software Engineering', email: 'lorenzo@hotmail.com', password: '123' },
  { id: '2', name: 'Akihiro', description: 'QA Tester', email: 'akihiro@hotmail.com', password: '123' },
  { id: '3', name: 'Iago', description: 'Dentista', email: 'iago@hotmail.com', password: '123' },
];

export const getUsersService = async () => {
  return users;
};

export const getUserByIdService = async (id: string) => {
  const user = users.find(user => user.id === id);
  if (!user) throw new Error('Usuário não encontrado.');

  return user;
};

export const createUserService = async (data: User) => {
  const existingUser = users.find(user => user.email === data.email);
  if (existingUser) throw new Error('Usuário já cadastrado com este e-mail.');

  try {
    const passwordHash = await hash(data.password, 8);
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

export const updateUserService = async (id: string, data: User) => {
  const userToUpdate = users.find(user => user.id === id);
  if (!userToUpdate) throw new Error('Usuário não encontrado.');

  try {
    const passwordHash = await hash(data.password, 8);

    userToUpdate.name = data.name;
    userToUpdate.description = data.description;
    userToUpdate.email = data.email;
    userToUpdate.password = passwordHash;

    return userToUpdate;
  } catch (err) {
    throw new Error('Não foi possível editar o usuário.');
  }
};

export const deleteUserService = async (id: string) => {
  const userToDelete = users.find(user => user.id === id);
  if (!userToDelete) throw new Error('Usuário não encontrado.');

  try {
    const updatedUsers = users.filter(user => user.id !== id);
    users = updatedUsers;

    return userToDelete;
  } catch (err) {
    throw new Error('Não foi possível excluir o usuário.');
  }
};
