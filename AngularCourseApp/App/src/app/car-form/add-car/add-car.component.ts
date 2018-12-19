import { Component, OnInit } from '@angular/core';
import { Car, CarExercise } from 'src/classes/car';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  
  car: CarExercise = new CarExercise();
  restApi: RestApiService;

  constructor(restApi: RestApiService) { 
    this.restApi = restApi;
  }

  ngOnInit() {
  }

  saveCar(car: CarExercise) {
    //this.loadingSpinner = true;
    var post = this.restApi.saveCar(car);
    post.subscribe(x => {
      console.log(x);      
    })
    console.log(this.restApi);
  }


}
