import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';

import MotorcycleModel from '../../../models/MotorcycleModel';
import MotorcycleService from '../../../services/MotorcycleService';
import MotorcycleController from '../../../controllers/MotorcycleController';

import { motorcycleInfo, motorcycleMock, motorcyclesMock } from '../../mocks/motorcycleMock';
import motorcycleZodSchema from '../../../zodSchemas/motorCycle';

describe('Test MotorcyclesController', () => {
  const motorModel = new MotorcycleModel();
  const motorService = new MotorcycleService(motorModel, motorcycleZodSchema);
  const motorController = new MotorcycleController(motorService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(motorService, 'create').resolves(motorcycleInfo);
    sinon.stub(motorService, 'readOne').resolves(motorcycleMock);
    sinon.stub(motorService, 'read').resolves(motorcyclesMock);
    sinon.stub(motorService, 'update').resolves(motorcyclesMock[0]);
    sinon.stub(motorService, 'delete').resolves(motorcyclesMock[0]);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Test create motorcycle', () => {
    it('In case of success', async () => {
      req.body = motorcycleInfo;
      await motorController.create(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleInfo)).to.be.true;
    });
  });


  describe('Test ReadOne motorcycle', () => {
    it('Success', async () => {
      
      req.params = { id: motorcycleMock._id };
      await motorController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('Test Update motorcycle', () => {
    it('Success', async () => {
      req.params = { id: motorcycleMock._id };
      req.body = motorcycleMock;
      await motorController.update(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcyclesMock[0])).to.be.true;
    });
  });

  describe('Test read all motorcycles', () => {
    it('Success', async () => {
      await motorController.read(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcyclesMock)).to.be.true;
    });
  });

  describe('Test delete motorcycle', () => {
    it('Success', async () => {
      req.params = { id: motorcycleMock._id };
      await motorController.delete(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcyclesMock)).to.be.true;
    });
  });
});