import { Request, Response } from 'express';
import { getErrorMessage } from './getErrorMessage';
import { HttpError } from './HttpError';

export function TryCatch() {
  return function (_: any, name: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (req: Request, res: Response) {
      try {
        await originalMethod.call(this, req, res);
      } catch (err) {
        const message = getErrorMessage(err);
        HttpError(res, 503, message);
      }
    };
  };
}
