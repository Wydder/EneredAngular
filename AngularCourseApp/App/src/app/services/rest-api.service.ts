import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserexerciseComponent } from '../userexercise/userexercise.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/classes/user';
import { CarExercise } from 'src/classes/car';



@Injectable({
  providedIn: 'root'
})



export class RestApiService {
  http: Http ;

  headers: any = {
    "content-type": "application/json",
    "x-apikey": "5c14b0b0e908ae6c73f622e8",
    "cache-control": "no-cache"
  }

  urlEmployee: string = "https://expenceapp-3008.restdb.io/rest/employee";
  urlCarList: string = "https://expenceapp-3008.restdb.io/rest/cars-list";
  data: string;

  constructor(http: Http) {
    this.http = http;
  }

  getAll(): Observable<User[]> {
    var responseObservable = map((response: Response) => {
      return response.json();
    });

    return responseObservable(this.http.get(this.urlEmployee, {headers: this.headers}))
    //return this.http.get(this.url, {headers: this.headers})
  }

  addUser(user: User): Observable<Response> {
    return this.http.post(this.urlEmployee, user, {headers: this.headers});
  }

  deleteUser(id: string): Observable<Response> {
    return this.http.delete(this.urlEmployee + '/' + id, {headers: this.headers});
  }

  saveCar(car: CarExercise): Observable<Response> {
    return this.http.post(this.urlCarList, car, {headers: this.headers});
  }

  editCar(id: string, car: CarExercise): Observable<Response> {
    return this.http.put(this.urlCarList + '/' + id, car, {headers: this.headers});
  }

  getCar(id: string): Observable<CarExercise> {
    var responseObservable = map((response: Response) => {
      return response.json();
    });
    return responseObservable(this.http.get(this.urlCarList + '/' + id, {headers: this.headers}))
    
    //return this.http.get(this.urlCarList + '/' + car._id, {headers: this.headers});
  }


  
}
