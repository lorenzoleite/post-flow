import 'dotenv/config';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';

import { serverConfig } from './config/server';
import { usersRouter } from './routes/users';
import { postsRouter } from './routes/posts';

const { PORT, BASE_PATH } = serverConfig;

const app = express();
app.use(cors({ origin: '*', allowedHeaders: '*' }));
app.use(express.json());
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => console.log(`API running on ${BASE_PATH}`));
