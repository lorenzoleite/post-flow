import { Request, Response } from 'express';
import {
  createPostService,
  deletePostService,
  getPostByIdService,
  getPostsService,
  likePostService,
} from 'src/services/postsService';

export const getPostsController = async (req: Request, res: Response) => {
  try {
    const posts = await getPostsService();

    res.status(200).json(posts);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Não foi possível buscar os posts.' });
    }
  }
};

export const getPostByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await getPostByIdService(id);

    res.status(200).json(post);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Não foi possível buscar o post.' });
    }
  }
};

export const createPostController = async (req: Request, res: Response) => {
  try {
    const post = req.body;
    const newPost = await createPostService(post);

    res.status(201).json(newPost);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Não foi possível criar o post.' });
    }
  }
};

export const deletePostController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedPost = await deletePostService(id);

    res.status(200).json(deletedPost);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Não foi possível excluir o post.' });
    }
  }
};

export const likePostController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const likedPost = await likePostService(id);

    res.status(200).json(likedPost);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Não foi possível curtir o post.' });
    }
  }
};
