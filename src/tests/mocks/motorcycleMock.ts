import { IMotorcycle } from '../../interfaces/IMotorcycle'

export const motorcycleInfo:IMotorcycle = {
  model: "Honda cg150",
  year: 2008,
  color: "red",
  buyValue: 5000,
  category: 'Street',
  engineCapacity: 3
};

export const motorcycleMock = {
    _id: "7weaf75s5df5s90as",
    ...motorcycleInfo,
};

export const motorcyclesMock:IMotorcycle[] & { _id:string }[] = [
    {
      _id: "4003c86762e0fb4edd128569",
      model: "Lambreta",
      year: 2000,
      color: "red",
      buyValue: 2000,
      category: 'Street',
      engineCapacity: 2
    },
    {
      _id: "7403c86762e0fb4edd123657",
      model: "Suzuky",
      year: 2015,
      color: "black",
      buyValue: 15000,
      category: 'Street',
      engineCapacity: 4
    }
  ];
