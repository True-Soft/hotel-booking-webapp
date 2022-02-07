import { HttpError } from './http.error';

export class BadRequestError extends HttpError {
  constructor(errors: string | string[], message: string) {
    super(400, errors, message);
  }
}
