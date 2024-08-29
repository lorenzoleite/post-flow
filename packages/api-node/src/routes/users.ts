import { Router } from 'express';
import { auth } from 'src/middlewares/authMiddleware';
import {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
} from 'src/controllers/usersController';

export const usersRouter = Router();

usersRouter.get('/', getUsersController);
usersRouter.get('/id/:id', getUserByIdController);
usersRouter.post('/', createUserController);
usersRouter.put('/id/:id', updateUserController);
usersRouter.delete('/id/:id', deleteUserController);
