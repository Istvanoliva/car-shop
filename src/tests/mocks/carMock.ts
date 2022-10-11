import { ICar } from '../../interfaces/ICar';


export const carInfo: ICar = {
  doorsQty: 4,
  seatsQty: 5,
  model: "Corola",
  year: 2007,
  color: "black",
  status: true,
  buyValue: 82000,
};

export const carMock = {
  _id: "5kb7af78h6c85s90as",
  ...carInfo,
}

export const carsMock:ICar[] & { _id:string }[] = [
  {
    _id: "4003c86762e0fb4edd120000",
    model: "Ferrari",
    year: 1968,
    color: "red",
    buyValue: 900000,
    seatsQty: 5,
    doorsQty: 4
  },
  {
    _id: "7403c86762e0fb4edd120022",
    model: "Meriva",
    year: 2008,
    color: "black",
    buyValue: 67000,
    seatsQty: 5,
    doorsQty: 4
  }
];
