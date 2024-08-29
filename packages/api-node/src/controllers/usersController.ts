import { NextFunction, Request, Response } from 'express';
import {
  createUserService,
  deleteUserService,
  getUserByIdService,
  getUsersService,
  updateUserService,
} from 'src/services/usersService';

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();

    res.status(200).json(users);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Não foi possível buscar os usuários.' });
    }
  }
};

export const getUserByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(id);

    res.status(200).json(user);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Não foi possível buscar o usuário.' });
    }
  }
};

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const newUser = await createUserService(user);

    res.status(201).json(newUser);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Não foi possível cadastrar o usuário.' });
    }
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const updatedUser = await updateUserService(id, user);

    res.status(200).json(updatedUser);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Não foi possível editar o usuário.' });
    }
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserService(id);

    res.status(200).json(deletedUser);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Não foi possível excluir o usuário.' });
    }
  }
};
