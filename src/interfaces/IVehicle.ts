import { z } from 'zod';
import vehicleZodSchema from '../zodSchemas/vehicleSchema';

export type IVehicle = z.infer<typeof vehicleZodSchema>;

export { vehicleZodSchema };