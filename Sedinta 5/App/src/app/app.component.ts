import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  model: Employee;


  constructor() {
    this.model = new Employee("Bogdan", "Burlacu");
    this.dateTime();
  }
  finishedProjectsIncrementer() {
    if(this.model.finishedProjects < 10) {
      this.model.finishedProjects++;
    } else {
      this.model.errorMsg = "Numarul de incrementari a ajuns la maxim!";
    }
    
  }
  refreshIncrementer() {
    if(this.model.finishedProjects == 10) {
      this.model.finishedProjects = 0;
      this.model.errorMsg = "No error";
    } 
  }
  dateTime() {
    if(this.model.dayHour < 12) {
      this.model.dayMsg = "Buna dimineata"
    } else {
      this.model.dayMsg = "Buna seara"
    }
  }
}


export class Employee {
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
