import { Response } from 'express';

const errorMessageList = {
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  409: 'Conflict',
  503: 'Service Unavailable'
};

export const HttpError = (
  res: Response,
  status: string | number,
  message: string = errorMessageList[status as keyof typeof errorMessageList]
) => {
  res.status(Number(status)).json({ message });
};
