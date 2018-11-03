import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'App';
  model: Employee;
  carModel: {};
  zoomInCheck: boolean;
  changeBackground: boolean;
  carList = [];

  constructor() {
    this.model = new Employee("Bogdan", "Burlacu");
    this.dateTime();
    this.returnFirstNameAndLastName();
    this.defaultCurrentClasses();

    this.carList.push({
      "model": "Dacia",
      "description": "Blabla" 
    });

    this.carList.push({
      "model": "Mercedes",
      "description": "Bla1bla1" 
    });

    this.carList.push({
      "model": "Bmw",
      "description": "Bla2bla2" 
    });
  }

  askCarDetails() {
    var model = prompt("What model is your car?");
    var description = prompt("What description does your car have?")
    this.carModel = new Car(model, description);
  }



  currentClasses = {}

  defaultCurrentClasses() {
    this.currentClasses = {
      "zoomIn": false
    }
  }

  divProp = {
    "width": "150px",
    "height": "150px",
    "background-color": "blue"
  }

  divPropUpdate() {
    this.divProp = {
      "width": this.zoomInCheck ? "300px" : "150px",
      "height": this.zoomInCheck ? "300px" : "150px",
      "background-color": this.changeBackground ? "red" : "blue"
    }
  }


  refreshIncrementer() {
    if(this.model.finishedProjects == 10) {
      this.model.finishedProjects = 0;
      this.model.errorMsg = "No error";
    } 
  }

  finishedProjectsIncrementer() {
    if(this.model.finishedProjects < 10) {
      this.model.finishedProjects++;
    } else {
      this.model.errorMsg = "Numarul de incrementari a ajuns la maxim!";
    }
    
  }

  dateTime() {
    if(this.model.dayHour < 12) {
      this.model.dayMsg = "Buna dimineata"
    } else {
      this.model.dayMsg = "Buna seara"
    }
  }
  returnFirstNameAndLastName() {
    console.log(this.model.firstName + " " + this.model.lastName)
  }
  returnInitialValues() {
    this.model = new Employee("Bogdan", "Burlacu");
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

export class Car {
  model: string;
  description: string;

  constructor(model, description) {
    this.model = model;
    this.description = description;
  }

}