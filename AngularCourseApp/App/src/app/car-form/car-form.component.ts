import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarExercise } from 'src/classes/car';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  
  @Input()
  carModel: CarExercise;

  @Output()
  carFormOutput: EventEmitter<CarExercise> = new EventEmitter();
  
  engines: Array<string> = ["Diesel", "Gas", "Electric"];

  constructor() { 
        
  }

  carSubmit() {
    console.log(this.carModel)
    this.carFormOutput.emit(this.carModel)
  }
  
  ngOnInit() {
  }

}
