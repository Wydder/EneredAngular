import { Component, OnInit } from '@angular/core';
import { EmployeeTwin } from "src/classes/employee";
import { CarTwin } from "src/classes/car";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  title = 'App';
  model: EmployeeTwin;
  carModel: {};
  zoomInCheck: boolean;
  changeBackground: boolean;
  carList = [];
  currentClasses = {};

  constructor() {
    this.model = new EmployeeTwin("", "");
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
    this.carModel = new CarTwin(model, description);
    this.carList.push(this.carModel);
  }

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
    if (this.model.finishedProjects == 10) {
      this.model.finishedProjects = 0;
      this.model.errorMsg = "No error";
    }
  }

  finishedProjectsIncrementer() {
    if (this.model.finishedProjects < 10) {
      this.model.finishedProjects++;
    } else {
      this.model.errorMsg = "Numarul de incrementari a ajuns la maxim!";
    }

  }

  dateTime() {
    if (this.model.dayHour < 12) {
      this.model.dayMsg = "Buna dimineata"
    } else {
      this.model.dayMsg = "Buna seara"
    }
  }
  returnFirstNameAndLastName() {
    console.log(this.model.firstName + " " + this.model.lastName)
  }
  returnInitialValues() {
    this.model = new EmployeeTwin("", "");
    this.dateTime();
    this.returnFirstNameAndLastName();
    this.defaultCurrentClasses();
  }

  ngOnInit() {
  }

}
