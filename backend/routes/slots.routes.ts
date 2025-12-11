import { Router } from 'express';
import { getSlots, getSlotIndicators, createSlot, deleteSlot } from '../controllers/slots.controller';

const router = Router();

router.get('/', getSlots);
router.get('/indicators', getSlotIndicators);
router.post('/', createSlot);
router.delete('/:id', deleteSlot);

export default router;