import { Component, OnInit } from '@angular/core';
import { CarExercise, Car } from 'src/classes/car';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Autoservice1Service } from '../services/autoservice1.service';

@Component({
  selector: 'app-another-type-of-form',
  templateUrl: './another-type-of-form.component.html',
  styleUrls: ['./another-type-of-form.component.css']
})
export class AnotherTypeOfFormComponent implements OnInit {

  car: CarExercise = new CarExercise();;
  carForm: FormGroup;

  constructor(fb: FormBuilder, autoservice: Autoservice1Service) {
    this.car = autoservice.getCar();
    console.log(this.car)
    this.carForm = fb.group({
      model: [this.car.model, Validators.required],
      engine: [this.car.engine, Validators.required],
      vin: [this.car.vin, Validators.compose([Validators.required, Validators.minLength(17), Validators.maxLength(17)])],
      year: [this.car.year],
      forSale: [this.car.forSale, Validators.required]
    });
  }

  onSubmit() {
    
  }

  ngOnInit() {
  }

}
