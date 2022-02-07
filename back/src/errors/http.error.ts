export class HttpError extends Error {
  public status: number;
  public errors: string[];

  constructor(status: number, errors: string | string[], message?: string) {
    super(message);

    this.status = status;
    this.errors = Array.isArray(errors) ? errors : [errors];
  }
}
