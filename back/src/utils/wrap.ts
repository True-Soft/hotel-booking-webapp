import { CookieOptions, NextFunction, Request, Response } from 'express-serve-static-core';

export type Handler = (req: Request) => ComplexResult | any;
export type AsyncHandler = (req: Request) => Promise<ComplexResult | any>;

export type ComplexResult = {
  status?: number,
  headers?: Record<string, string>,
  cookies?: Cookie[],
  data: any,
};

type Cookie = {
  name: string,
  value: string,
  options?: CookieOptions,
};

export function wrap(handler: Handler | AsyncHandler) {
  return (req: Request, res: Response, next: NextFunction) => {
    const call = handler(req);

    if (call instanceof Promise) {
      call
        .then((result) => respond(res, result))
        .catch(next);
    } else {
      respond(res, call);
    }
  };
}

function respond(res: Response, result: ComplexResult): void {
  const {data, status, headers, cookies} = result;

  if (!data || !status && !headers && !cookies) {
    res.json(result);
    return;
  }

  if (status) {
    res.status(status);
  }

  if (headers) {
    res.set(headers)
  }

  if (cookies) {
    for (const {name, value, options} of cookies) {
      res.cookie(name, value, options);
    }
  }

  res.json(data);
}
