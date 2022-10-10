import { Router } from 'express';
import { carZodSchema } from '../interfaces/ICar';
import CarsController from '../controllers/CarsController';
import CarsModel from '../models/CarsModel';
import CarsService from '../services/CarsService';

const carsRouter = Router();

const carModel = new CarsModel();
const carService = new CarsService(carModel, carZodSchema);
const carController = new CarsController(carService);

carsRouter.post('/cars', (req, res) => carController.create(req, res));

export default carsRouter;