import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/classes/user';
import { EventEmitter } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User;
  restApi: RestApiService;
  
  @Output()
  onAdd: EventEmitter<User> = new EventEmitter();

  constructor(restApi: RestApiService) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  addUser() {
    console.log(this.user );
    this.onAdd.emit(this.user);
    this.user = new User();
  }


}
