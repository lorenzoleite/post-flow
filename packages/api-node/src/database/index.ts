import { Post } from 'src/entities/Post';
import { User } from 'src/entities/User';

export const users: User[] = [
  {
    id: 'caee2edc-303a-4b13-9228-ac1d08ba6990',
    name: 'Lorenzo',
    description: 'Engineer',
    email: 'lorenzo@hotmail.com',
    password: '$2a$08$/fshLfDp8cLJdVtZ3sE1oONU.8Qq1Y4VaFl2gN8sHGbN4JS/NiXA.',
  },
  {
    id: '4280ffed-fcb2-4de2-a1c3-c7e05ac57438',
    name: 'Akihiro',
    description: 'Doctor',
    email: 'akihiro@hotmail.com',
    password: '$2a$08$we/GudMZ4PZmv.CkYCOZVOwAxpiuVZnPbmGOB3Kw/LAdo/admrjBC',
  },
  {
    id: '6cf030c8-084f-4345-b0be-fb5414c9b03c',
    name: 'Iago',
    description: 'Dentist',
    email: 'Iago@hotmail.com',
    password: '$2a$08$oPWHKtsIwG7cY1kPcZFT2eWNvPmq4vwopnzCvkdmiN3Whe5BaVFzm',
  },
];

export const posts: Post[] = [
  {
    id: '3a15eb35-e0ac-4e4d-96ad-7d00d43b2a91',
    text: 'Lorem ipsum',
    likes: 0,
  },
  {
    id: '77d4cfe6-5866-4d4a-b57c-aafd5b31af6a',
    text: 'Lorem ipsum',
    likes: 0,
  },
  {
    id: '131731a5-03b5-4a77-b532-27c54c1b6f30',
    text: 'Lorem ipsum',
    likes: 0,
  },
];
