export class Employee {
    readonly firstName: string;
    readonly lastName: string;
    age: number;
    ocupation: string;
    gender: GenderType;
    constructor(firstName, lastName, gender: GenderType) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
}

export enum GenderType {
    male = 0,
    female = 1
}