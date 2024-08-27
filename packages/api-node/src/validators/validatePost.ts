import { Post, PostSchema } from 'src/entities/Post';

export function validatePost(data: Post) {
  return PostSchema.parse(data);
}
