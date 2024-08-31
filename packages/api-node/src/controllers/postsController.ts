import { NextFunction, Request, Response } from 'express';
import {
  createPostService,
  deletePostService,
  getPostByIdService,
  getPostsService,
  likePostService,
} from 'src/services/postsService';

export const getPostsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await getPostsService();

    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

export const getPostByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const post = await getPostByIdService(id);

    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

export const createPostController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = req.body;
    const newPost = await createPostService(post);

    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};

export const deletePostController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedPost = await deletePostService(id);

    res.status(200).json(deletedPost);
  } catch (err) {
    next(err);
  }
};

export const likePostController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const likedPost = await likePostService(id);

    res.status(200).json(likedPost);
  } catch (err) {
    next(err);
  }
};
