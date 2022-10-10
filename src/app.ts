import express from 'express';
import router from './routers';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(router);

app.use(errorMiddleware);

export default app;