import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserexerciseComponent } from '../userexercise/userexercise.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/classes/user';



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

  url: string = "https://expenceapp-3008.restdb.io/rest/employee";
  data: string;

  constructor(http: Http) {
    this.http = http;
  }

  getAll(): Observable<User[]> {
    var responseObservable = map((response: Response) => {
      return response.json();
    });

    return responseObservable(this.http.get(this.url, {headers: this.headers}))
    //return this.http.get(this.url, {headers: this.headers})
  }

  addUser(user: User): Observable<Response> {
    return this.http.post(this.url, user, {headers: this.headers});
  }

  deleteUser(id: string): Observable<Response> {
    return this.http.delete(this.url + '/' + id, {headers: this.headers});
  }

  
}
