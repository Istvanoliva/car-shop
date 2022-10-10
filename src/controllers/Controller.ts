import { Request, Response } from 'express';
import { IController } from '../interfaces/IController';
import { IService } from '../interfaces/IService';

abstract class Controller<T> implements IController {
  protected _service: IService<T>;

  constructor(service: IService<T>) {
    this._service = service;
  }

  async create(req: Request, res: Response) {
    const newCar = await this._service.create(req.body);
    return res.status(201).json(newCar);
  }

  async readOne(req: Request, res: Response) {
    const car = await this._service.readOne(req.params.id);
    return res.status(200).json(car);
  }

  async update(req: Request, res: Response) {
    const car = await this._service.update(req.params.id, req.body);
    return res.status(200).json(car);
  }

  async read(_req: Request, res: Response) {
    const cars = await this._service.read();
    return res.status(200).json(cars);
  }
  
  async delete(req: Request, res: Response) {
    const result = await this._service.delete(req.params.id);
    return res.status(204).json(result);
  }
}

export default Controller;