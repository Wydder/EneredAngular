import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/classes/user';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User;
  @Output
  onAdd: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addUser() {
    
  }

}
