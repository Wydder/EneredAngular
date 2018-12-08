import { Component, OnInit } from '@angular/core';
import { CarExercise, Car } from 'src/classes/car';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Autoservice1Service } from '../services/autoservice1.service';
import { Tracker } from 'src/classes/tracker';

@Component({
  selector: 'app-another-type-of-form',
  templateUrl: './another-type-of-form.component.html',
  styleUrls: ['./another-type-of-form.component.css']
})
export class AnotherTypeOfFormComponent implements OnInit {

  car: CarExercise = new CarExercise();
  carForm: FormGroup;
  engines: Array<string> = ["Diesel", "Gas", "Electric"];
  versions: Array<Tracker> = [];
  version: CarExercise;

  constructor(fb: FormBuilder, autoservice: Autoservice1Service) {
    this.car = autoservice.getCar();
    console.log(this.car)
    this.carForm = fb.group({
      model: [this.car.model, Validators.required],
      engine: [this.car.engine, Validators.required],
      vin: [this.car.vin, Validators.compose([Validators.required, Validators.minLength(17), Validators.maxLength(17)])],
      year: [this.car.year, Validators.required],
      forSale: [this.car.forSale]
    });

    this.subscribeForm();
  }

  onSubmit() {
    console.log(this.carForm.value);
    console.log(this.versions);
  }

  resetForm() {
    this.carForm.reset(this.car)
  }

  subscribeForm() {
    this.carForm.valueChanges.subscribe((event: CarExercise) => {
      this.versions.push(new Tracker(event));
    });
  }

  ngOnInit() {

  }

}
