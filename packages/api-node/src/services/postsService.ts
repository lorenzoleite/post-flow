import { v4 as uuid } from 'uuid';
import { Post } from 'src/entities/Post';
import { posts } from 'src/database';
import { NotFoundError } from 'src/error/NotFoundError';

export const getPostsService = async (): Promise<Post[]> => {
  return posts;
};

export const getPostByIdService = async (id: string): Promise<Post> => {
  const post = posts.find(post => post.id === id);
  if (!post) throw new NotFoundError('Post not found.');

  return post;
};

export const createPostService = async (data: Post): Promise<Post> => {
  const newPost: Post = {
    id: uuid(),
    text: data.text,
    likes: 0,
  };

  posts.push(newPost);

  return newPost;
};

export const deletePostService = async (id: string): Promise<Post> => {
  const postIndex = posts.findIndex(post => post.id === id);
  if (postIndex === -1) throw new NotFoundError('Post not found.');

  const [deletedPost] = posts.splice(postIndex, 1);

  return deletedPost;
};

export const likePostService = async (id: string): Promise<Post> => {
  const postToLike = posts.find(post => post.id === id);
  if (!postToLike) throw new NotFoundError('Post not found.');

  postToLike.likes += 1;

  return postToLike;
};
