import { CarExercise, Car } from "./car";

export class Tracker {
    constructor(car: CarExercise) {
        this.timeStamp = new Date();
        this.car = car;
    }

    readonly timeStamp: Date;
    car: CarExercise;
}