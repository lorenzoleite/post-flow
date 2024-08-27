import * as z from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  email: z.string(),
  password: z.string(),
});

export type User = z.infer<typeof UserSchema>;
