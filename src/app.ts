import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';
import { errorMiddleware } from './shared/middlewares';
import { API_PREFIX } from './shared/constants';
import { theRouters } from './routers';

const app = express();
const routers = [...theRouters];

app.set('trust proxy', true);

app.use(
  cors({
    origin: ['localhost'],
  })
);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(API_PREFIX, routers);

app.use(errorMiddleware);
export { app };
