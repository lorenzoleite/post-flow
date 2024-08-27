import { User, UserSchema } from 'src/entities/User';

export function validateUser(data: User) {
  return UserSchema.parse(data);
}
