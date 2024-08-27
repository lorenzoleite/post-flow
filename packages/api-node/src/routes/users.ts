import { Router } from 'express';
import {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
} from '../controllers/usersController';

export const usersRouter = Router();

usersRouter.get('/', getUsersController);
usersRouter.get('/id/:id', getUserByIdController);
usersRouter.post('/', createUserController);
usersRouter.put('/id/:id', updateUserController);
usersRouter.delete('/id/:id', deleteUserController);
