import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  private _service: IService<ICar>;

  constructor(service: IService<ICar>) {
    this._service = service;
  }

  async create(req: Request, res: Response<ICar>) {
    const newCar = await this._service.create(req.body);
    return res.status(201).json(newCar);
  }
}

export default CarController;