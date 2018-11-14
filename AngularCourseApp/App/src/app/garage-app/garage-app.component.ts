import { Component, OnInit } from '@angular/core';
import { Autoservice1Service } from "src/app/services/autoservice1.service";
import { CarTwin } from "src/classes/car";

@Component({
  selector: 'app-garage-app',
  templateUrl: './garage-app.component.html',
  styleUrls: ['./garage-app.component.css']
})
export class GarageAppComponent implements OnInit {
  carsDb: CarTwin;
  oilchange: string;

  constructor() {
    this.carsDb = new CarTwin("D", "B");
    console.log(this.oilchange);
  }

  oilChange(autoservice1: Autoservice1Service) {
    //changeOil(x): x - no of mechanics
    this.oilchange = autoservice1.changeOil(6)
    console.log(this.oilchange);
  }

  ngOnInit() {
  }

}
