import { Injectable } from '@angular/core';
import { RarserviceService } from "src/app/services/rarservice.service";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CarExercise } from 'src/classes/car';

@Injectable({
  providedIn: 'root'
})

export class Autoservice1Service {
  rarservice: RarserviceService;
  mechanics: number;
  car: CarExercise;
  carForm: FormGroup;

  constructor(rarservice: RarserviceService) {
    this.rarservice = rarservice;
  }

  changeOil(mechanics: number): string {
    var license = this.rarservice.getLicense();
    this.mechanics = mechanics;
    if (this.mechanics > 5 && license) {
      return "Oil changed with license: " + license
      //setTimeout(function() {
      //  return "Oil changed with license" + license
      //}, 5000);
    }
  }

  getCar() {
    return new CarExercise();
  }


}
