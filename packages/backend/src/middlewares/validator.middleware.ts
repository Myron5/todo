import { Response, Request, NextFunction } from 'express';
import { HttpError, tryCatchWrapper } from '../helpers';

export function validateBody<T extends { validate: Function }>(schema: T) {
  const validateBodyClbck = (req: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(req.body);
    if (result.error) HttpError(res, 400, result.error.details[0].message);
    else next();
  };

  return tryCatchWrapper<typeof validateBodyClbck>(validateBodyClbck);
}

export function validateQueryParams<T extends { validate: Function }>(schema: T) {
  const validateQueryParamsClbck = (req: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(req.query);
    if (result.error) HttpError(res, 400, result.error.details[0].message);
    else next();
  };

  return tryCatchWrapper<typeof validateQueryParamsClbck>(validateQueryParamsClbck);
}
