import { Component, OnInit } from '@angular/core';
import { CarExercise } from 'src/classes/car';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  
  carModel: CarExercise;
  engines: Array<string> = ["Diesel", "Gas", "Electric"];

  constructor() { 
    this.carModel = new CarExercise();
    // this.carModel.model = new FormControl('', [Validators.required])
    
    // this.carModel.engine = this.engines[0];
    // this.carModel.forSale = true;
    // this.carModel.model = "Mertzan";
    // this.carModel.vin = "12546125874568952";
    // this.carModel.year = 1989;
  }

  carSubmit() {
    console.log(this.carModel)
  }
  ngOnInit() {
  }

}
