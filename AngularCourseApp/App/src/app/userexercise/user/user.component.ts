import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/classes/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  @Input()
  user: User;

  @Output()
  deleteUser: EventEmitter<User> = new EventEmitter();

  constructor() {
    
  }

  ngOnInit() {
  }

  deleteUserEmit() {
    this.deleteUser.emit(this.user);
  }

}
