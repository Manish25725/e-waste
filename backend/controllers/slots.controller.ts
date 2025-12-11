import { Request, Response } from 'express';
import Slot from '../models/Slot';
import { sendSuccess, sendError } from '../utils/response';

export const getSlots = async (req: Request, res: Response) => {
  try {
    const { date } = (req as any).query;
    let query = {};
    if (date) {
      query = { date: parseInt(date as string) };
    }
    const slots = await Slot.find(query);
    sendSuccess(res, slots);
  } catch (error: any) {
    sendError(res, 'Failed to fetch slots', 500);
  }
};

export const getSlotIndicators = async (req: Request, res: Response) => {
  try {
    const slots = await Slot.find({});
    const indicators = slots.reduce((acc: any, slot: any) => {
      if (!acc[slot.date]) acc[slot.date] = { hasAvailable: false, hasBooked: false };
      if (slot.status === 'Available') acc[slot.date].hasAvailable = true;
      if (slot.status === 'Booked') acc[slot.date].hasBooked = true;
      return acc;
    }, {});
    sendSuccess(res, indicators);
  } catch (error) {
    sendError(res, 'Failed to fetch indicators', 500);
  }
};

export const createSlot = async (req: Request, res: Response) => {
  try {
    const slot = await Slot.create((req as any).body);
    sendSuccess(res, slot, 201);
  } catch (error: any) {
    sendError(res, error.message || 'Failed to create slot', 400);
  }
};

export const deleteSlot = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).params;
    const slot = await Slot.findByIdAndDelete(id);
    if (!slot) {
      return sendError(res, 'Slot not found', 404);
    }
    sendSuccess(res, { success: true });
  } catch (error) {
    sendError(res, 'Failed to delete slot', 500);
  }
};