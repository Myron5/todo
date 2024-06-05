import { Request, Response, NextFunction } from 'express';
import { getErrorMessage } from './getErrorMessage';
import { HttpError } from './HttpError';

type GenericFunction = (...args: any[]) => any;

// C - typeof callback;
export function tryCatchWrapper<C extends GenericFunction>(
  callback: (req: Request, res: Response, next: NextFunction) => ReturnType<C>
) {
  const wreppedFunc = async function (req: Request, res: Response, next: NextFunction) {
    try {
      await callback(req, res, next);
    } catch (err) {
      const message = getErrorMessage(err);
      HttpError(res, 503, message);
    }
  };

  return wreppedFunc;
}
