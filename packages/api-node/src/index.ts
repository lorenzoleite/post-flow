import 'dotenv/config';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';

import { serverConfig } from 'src/config/server';
import { auth } from 'src/middlewares/authMiddleware';
import { errorHandler } from 'src/middlewares/errorMiddleware';
import { authRouter } from 'src/routes/auth';
import { usersRouter } from 'src/routes/users';
import { postsRouter } from 'src/routes/posts';

const { PORT, BASE_PATH } = serverConfig;

const app = express();
app.use(cors({ origin: '*', allowedHeaders: '*' }));
app.use(express.json());
app.use('/auth', authRouter);
app.use(auth);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`API running on ${BASE_PATH}`));
