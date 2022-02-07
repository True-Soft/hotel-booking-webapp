import { HttpError } from './http.error';

export class UnauthorizedError extends HttpError {
  constructor(errors: string | string[], message: string) {
    super(401, errors, message);
  }
}
