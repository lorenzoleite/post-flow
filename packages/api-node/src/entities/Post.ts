import * as z from 'zod';

export const PostSchema = z.object({
  id: z.string(),
  text: z.string(),
  likes: z.number(),
});

export type Post = z.infer<typeof PostSchema>;
