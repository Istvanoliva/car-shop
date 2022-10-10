import { z } from 'zod';
import motorcycleZodSchema from '../zodSchemas/motorCycle';

export type IMotorcycle = z.infer<typeof motorcycleZodSchema>;

export { motorcycleZodSchema };