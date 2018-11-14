export class Car {
  engine: Engine;
  wheels: Wheel;
  year: string;
  manufacturer: string;

  constructor(manuf: string) {
    this.manufacturer = manuf;
    this.engine = new Engine(80, 1);
    this.wheels = new Wheel();
  }
}

export class CarTwin {
  model: string;
  description: string;
  carsDb = [];

  constructor(model, description) {
    this.model = model;
    this.description = description;
    this.carsDb = carsDb;
  }

}

class Wheel {

}
class Engine {
  cc: number;
  type: EngineType;
  constructor(cc: number, type: EngineType) {
    this.cc = cc;
    this.type = type;
  }
}

enum EngineType {
  Diesel = 0,
  Gas = 1,
  Electric = 2
}

let carsDb =
  [
    {
      "Name": "chevrolet chevelle malibu",
      "Miles_per_Gallon": 18,
      "Cylinders": 8,
      "Displacement": 307,
      "Horsepower": 130,
      "Weight_in_lbs": 3504,
      "Acceleration": 12,
      "Year": "1970-01-01",
      "Origin": "USA"
    },
    {
      "Name": "buick skylark 320",
      "Miles_per_Gallon": 15,
      "Cylinders": 8,
      "Displacement": 350,
      "Horsepower": 165,
      "Weight_in_lbs": 3693,
      "Acceleration": 11.5,
      "Year": "1970-01-01",
      "Origin": "USA"
    },
    {
      "Name": "plymouth satellite",
      "Miles_per_Gallon": 18,
      "Cylinders": 8,
      "Displacement": 318,
      "Horsepower": 150,
      "Weight_in_lbs": 3436,
      "Acceleration": 11,
      "Year": "1970-01-01",
      "Origin": "USA"
    }
  ]
