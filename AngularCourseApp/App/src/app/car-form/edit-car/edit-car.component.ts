import { Component, OnInit } from '@angular/core';
import { CarExercise } from 'src/classes/car';
import { RestApiService } from 'src/app/services/rest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  car: CarExercise;
  restApi: RestApiService;
  id: string;

  constructor(restApi: RestApiService, private route: ActivatedRoute) {
    this.restApi = restApi;
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getCar();
  }

  ngOnInit() {
  }



  getCar() {
    this.restApi.getCar(this.id).subscribe(x => {
      console.log(x)
      this.car = x;
    });
  }

  editCar(car: CarExercise) {
    console.log(car);
    this.restApi.editCar(this.id, car).subscribe(x => {
      console.log(x);
      this.getCar();
    });
  }
}
