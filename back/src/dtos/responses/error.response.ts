import { HttpError } from '@errors';

export class ErrorResponse {
  public result: string;
  public message?: string;
  public errors: string[];

  constructor(httpError: HttpError) {
    this.result = 'error';
    this.message = httpError.message;
    this.errors = httpError.errors;
  }

}
