import { Response, Request, NextFunction } from 'express';
import { HttpError, tryCatchWrapper } from '../helpers';

export const isExist = <T extends { findOne: Function }>(entity: T, key: string) => {
  const isExistCallb = async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params[key] as string;
    const result = await entity.findOne({ where: { id } });
    if (!result) HttpError(res, 400, `ID: ${id} does not exist`);
    else next();
  };

  return tryCatchWrapper<typeof isExistCallb>(isExistCallb);
};

export const alreadyExist = <T extends { findOne: Function }>(entity: T, key: string) => {
  const alreadyExistCallb = async (req: Request, res: Response, next: NextFunction) => {
    const result = await entity.findOne({ where: { [key]: req.body[key] } });
    if (result) HttpError(res, 400, `${key}: ${req.body[key]} already exist`);
    else next();
  };

  return tryCatchWrapper<typeof alreadyExistCallb>(alreadyExistCallb);
};
