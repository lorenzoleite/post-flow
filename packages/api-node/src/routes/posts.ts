import { Router } from 'express';
import {
  getPostsController,
  createPostController,
  deletePostController,
  likePostController,
  getPostByIdController,
} from '../controllers/postsController';

export const postsRouter = Router();

postsRouter.get('/', getPostsController);
postsRouter.get('/id/:id', getPostByIdController);
postsRouter.post('/', createPostController);
postsRouter.delete('/id/:id', deletePostController);
postsRouter.post('/id/:id/like', likePostController);
