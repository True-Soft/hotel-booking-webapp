import { HttpError } from './http.error';

export class InternalServerError extends HttpError {
  constructor(errors: string | string[], message: string) {
    super(500, errors, message);
  }
}
