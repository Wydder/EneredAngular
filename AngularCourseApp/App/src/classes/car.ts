export class Car {
    engine: Engine;
    wheels: Wheel;
    year : string;
    manufacturer: string;

    constructor(manuf: string) {
        this.manufacturer = manuf;
        this.engine = new Engine(80, 1);
        this.wheels = new Wheel();
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
    Electric =2
}