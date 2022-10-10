import { z } from 'zod';
import { vehicleZodSchema } from '../interfaces/IVehicle';

const motorcycleZodSchema = vehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().gt(0).lte(2500),
});

export default motorcycleZodSchema;