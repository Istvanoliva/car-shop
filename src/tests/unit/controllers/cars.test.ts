import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';

import CarsController from '../../../controllers/CarsController';
import CarsService from '../../../services/CarsService';
import CarsModel from '../../../models/CarsModel';

import { carInfo, carMock, carsMock } from '../../mocks/carMock';
import carZodSchema from '../../../zodSchemas/carSchema';

describe('Test CarsController', () => {
  const carModel = new CarsModel()
  const carService = new CarsService(carModel, carZodSchema);
  const carController = new CarsController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carInfo);
    sinon.stub(carService, 'readOne').resolves(carMock);
    sinon.stub(carService, 'read').resolves(carsMock);
    sinon.stub(carService, 'update').resolves(carsMock[0]);
    sinon.stub(carService, 'delete').resolves(carsMock[0]);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Test create Car', () => {
    it('In case of success', async () => {
      req.body = carInfo;
      await carController.create(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carInfo)).to.be.true;
    });
  });

  describe('Test ReadOne car', () => {
    it('Success', async () => {
      
      req.params = { id: carMock._id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('Test Update car', () => {
    it('Success', async () => {
      req.params = { id: carMock._id };
      req.body = carMock;
      await carController.update(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsMock[0])).to.be.true;
    });
  });

  describe('Test read all cars', () => {
    it('Success', async () => {
      await carController.read(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsMock)).to.be.true;
    });
  });

  describe('Test delete car', () => {
    it('Success', async () => {
      req.params = { id: carMock._id };
      await carController.delete(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsMock)).to.be.true;
    });
  });
});