import { Injectable } from '@angular/core';
import { RarserviceService } from "src/app/services/rarservice.service";

@Injectable({
  providedIn: 'root'
})
export class Autoservice1Service {
  rarservice: RarserviceService;
  mechanics: number;

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


}
