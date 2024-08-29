import { v4 as uuid } from 'uuid';
import { Post } from 'src/entities/Post';
import { posts } from 'src/database';

export const getPostsService = async (): Promise<Post[]> => {
  return posts;
};

export const getPostByIdService = async (id: string): Promise<Post> => {
  const post = posts.find(post => post.id === id);
  if (!post) throw new Error('Post não encontrado.');

  return post;
};

export const createPostService = async (data: Post): Promise<Post> => {
  try {
    const newPost: Post = {
      id: uuid(),
      text: data.text,
      likes: 0,
    };

    posts.push(newPost);

    return newPost;
  } catch (err) {
    throw new Error('Não foi possível criar o post.');
  }
};

export const deletePostService = async (id: string): Promise<Post> => {
  const postIndex = posts.findIndex(post => post.id === id);
  if (postIndex === -1) throw new Error('Post não encontrado.');

  try {
    const [deletedPost] = posts.splice(postIndex, 1);

    return deletedPost;
  } catch (err) {
    throw new Error('Não foi possível excluir o post.');
  }
};

export const likePostService = async (id: string): Promise<Post> => {
  const postToLike = posts.find(post => post.id === id);
  if (!postToLike) throw new Error('Post não encontrado.');

  try {
    postToLike.likes += 1;

    return postToLike;
  } catch (err) {
    throw new Error('Não foi possível curtir o post.');
  }
};
