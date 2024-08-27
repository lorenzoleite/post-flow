import { v4 as uuid } from 'uuid';
import { Post } from 'src/entities/Post';

let posts: Post[] = [
  { id: '1', text: 'Postagem 1', likes: 0 },
  { id: '2', text: 'Postagem 2', likes: 0 },
  { id: '3', text: 'Postagem 3', likes: 0 },
];

export const getPostsService = async () => {
  return posts;
};

export const getPostByIdService = async (id: string) => {
  const post = posts.find(post => post.id === id);
  if (!post) throw new Error('Post não encontrado.');

  return post;
};

export const createPostService = async (data: Post) => {
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

export const deletePostService = async (id: string) => {
  const postToDelete = posts.find(post => post.id === id);
  if (!postToDelete) throw new Error('Post não encontrado.');

  try {
    const updatedPosts = posts.filter(post => post.id !== id);
    posts = updatedPosts;

    return postToDelete;
  } catch (err) {
    throw new Error('Não foi possível excluir o post.');
  }
};

export const likePostService = async (id: string) => {
  const postToLike = posts.find(post => post.id === id);
  if (!postToLike) throw new Error('Post não encontrado.');

  try {
    postToLike.likes += 1;

    return postToLike;
  } catch (err) {
    throw new Error('Não foi possível curtir o post.');
  }
};
