import { Request, Response } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import { sendSuccess, sendError } from '../utils/response';

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
    expiresIn: '30d',
  });
};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = (req as any).body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return sendError(res, 'User already exists', 400);
    }

    const user = await User.create({ name, email, password, role });

    if (user) {
      sendSuccess(res, {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id.toString()),
      }, 201);
    } else {
      sendError(res, 'Invalid user data', 400);
    }
  } catch (error: any) {
    sendError(res, error.message);
  }
};

export const authUser = async (req: Request, res: Response) => {
  const { email, password } = (req as any).body;

  try {
    const user: any = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      sendSuccess(res, {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id.toString()),
      });
    } else {
      sendError(res, 'Invalid email or password', 401);
    }
  } catch (error: any) {
    sendError(res, error.message);
  }
};