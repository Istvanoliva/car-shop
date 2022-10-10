import { z } from 'zod';
import carZodSchema from '../zodSchemas/carSchema';

export type ICar = z.infer<typeof carZodSchema>;

export { carZodSchema };