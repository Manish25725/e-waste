import { Response } from 'express';

export const sendSuccess = (res: Response, data: any, statusCode = 200) => {
  (res as any).status(statusCode).json(data);
};

export const sendError = (res: Response, message: string, statusCode = 500) => {
  (res as any).status(statusCode).json({ error: message });
};