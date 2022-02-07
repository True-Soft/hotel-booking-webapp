import * as express from 'express';
import { ErrorRequestHandler, json } from 'express';
import { HttpError } from '@errors';
import { ErrorResponse } from '@dtos/responses';
import { apiRouter } from '@routers/api.router';

const app = express();

app.use(json());

app.use('/api', apiRouter);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    const data = new ErrorResponse(err);
    res.status(err.status).json(data);
  } else {
    // TODO
    res.status(500).json({ message: 'shit' });
  }
};

app.use(errorHandler);

export { app };
