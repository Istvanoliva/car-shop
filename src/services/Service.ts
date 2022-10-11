import { ZodSchema } from 'zod';
import { ErrorTypes } from '../errors/catalog';
import { IService } from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';

abstract class Service<T> implements IService<T> {
  protected _model:IModel<T>;
  protected _schema:ZodSchema<T>;

  constructor(model:IModel<T>, schema:ZodSchema<T>) {
    this._model = model;
    this._schema = schema;
  }

  async create(obj:T):Promise<T> {
    const parsed = this._schema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._model.create(parsed.data);
  }

  async readOne(_id:string):Promise<T> {
    const item = await this._model.readOne(_id);
    if (!item) throw new Error(ErrorTypes.EntityNotFound);
    return item;
  }  
  
  async update(_id:string, obj:T):Promise<T | null> {
    const parsed = this._schema.safeParse(obj);
    if (!parsed.success) throw parsed.error;

    const updated = await this._model.update(_id, parsed.data);
    if (!updated) throw new Error(ErrorTypes.EntityNotFound);
    return updated;
  }

  async read():Promise<T[]> {
    const items = await this._model.read();
    if (!items) throw new Error(ErrorTypes.EntityNotFound);
    return items;
  }

  async delete(_id:string):Promise<T | null> {
    const deleted = await this._model.delete(_id);
    if (!deleted) throw new Error(ErrorTypes.EntityNotFound);
    return deleted;
  }
}

export default Service;
