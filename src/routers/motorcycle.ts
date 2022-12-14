import { Router } from 'express';
import { motorcycleZodSchema } from '../interfaces/IMotorcycle';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleService from '../services/MotorcycleService';
import MotorcycleModel from '../models/MotorcycleModel';

const motorcycleRouter = Router();

const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel, motorcycleZodSchema);
const motorcycleController = new MotorcycleController(motorcycleService);

const motorcycle = '/motorcycles/:id';

motorcycleRouter.post('/motorcycles', (req, res) => motorcycleController.create(req, res));
motorcycleRouter.get('/motorcycles', (req, res) => motorcycleController.read(req, res));
motorcycleRouter.get(motorcycle, (req, res) => motorcycleController.readOne(req, res));
motorcycleRouter.put(motorcycle, (req, res) => motorcycleController.update(req, res));
motorcycleRouter.delete(motorcycle, (req, res) => motorcycleController.delete(req, res));

export default motorcycleRouter;