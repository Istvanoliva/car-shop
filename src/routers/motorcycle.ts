import { Router } from 'express';
import { motorcycleZodSchema } from '../interfaces/IMotorcycle';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleService from '../services/MotorcycleService';
import MotorcycleModel from '../models/MotorcycleModel';

const motorcycleRouter = Router();

const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel, motorcycleZodSchema);
const motorcycleController = new MotorcycleController(motorcycleService);

motorcycleRouter.post('/motorcycles', (req, res) => motorcycleController.create(req, res));
motorcycleRouter.get('/motorcycles', (req, res) => motorcycleController.read(req, res));
motorcycleRouter.get('/motorcycles/:id', (req, res) => motorcycleController.readOne(req, res));
motorcycleRouter.put('/motorcycles/:id', (req, res) => motorcycleController.update(req, res));

export default motorcycleRouter;