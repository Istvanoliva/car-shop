import { Router } from 'express';
import { carZodSchema } from '../interfaces/ICar';
import CarsModel from '../models/CarsModel';
import CarsService from '../services/CarsService';
import CarsController from '../controllers/CarsController';

const carsRouter = Router();

const carModel = new CarsModel();
const carService = new CarsService(carModel, carZodSchema);
const carController = new CarsController(carService);

carsRouter.post('/cars', (req, res) => carController.create(req, res));
carsRouter.get('/cars', (req, res) => carController.read(req, res));
carsRouter.get('/cars/:id', (req, res) => carController.readOne(req, res));
carsRouter.put('/cars/:id', (req, res) => carController.update(req, res));
carsRouter.delete('/cars/:id', (req, res) => carController.delete(req, res));

export default carsRouter;