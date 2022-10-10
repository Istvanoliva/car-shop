import { Router } from 'express';
import cars from './cars';

const router = Router();

router.use(cars);

export default router;