import { Router } from 'express';
import cars from './cars';
import motorcycleRouter from './motorcycle';

const router = Router();

router.use(cars);
router.use(motorcycleRouter);

export default router;