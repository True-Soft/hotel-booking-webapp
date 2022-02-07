import { HttpError } from './http.error';

export class NotFoundError extends HttpError {
  constructor(errors: string | string[], message: string) {
    super(404, errors, message);
  }
}
