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

export class EmployeeTwin {
  title = "Employee exercise";
  firstName: string;
  lastName: string;
  finishedProjects: number;
  dayMsg: string;
  currentDate: Date;
  dayHour: number;
  errorMsg: string;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.finishedProjects = 0;
    this.currentDate = new Date();
    this.dayHour = this.currentDate.getHours();
    this.errorMsg = "No error";
  }
}

export enum GenderType {
    male = 0,
    female = 1
}
