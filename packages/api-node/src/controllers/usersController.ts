import { NextFunction, Request, Response } from 'express';
import {
  createUserService,
  deleteUserService,
  getUserByIdService,
  getUsersService,
  updateUserService,
} from 'src/services/usersService';

export const getUsersController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await getUsersService();

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const getUserByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(id);

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;
    const newUser = await createUserService(user);

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

export const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const updatedUser = await updateUserService(id, user);

    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserService(id);

    res.status(200).json(deletedUser);
  } catch (err) {
    next(err);
  }
};
