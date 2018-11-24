import { Component, OnInit } from '@angular/core';
import { User } from 'src/classes/user';

@Component({
  selector: 'app-userexercise',
  templateUrl: './userexercise.component.html',
  styleUrls: ['./userexercise.component.css']
})
export class UserexerciseComponent implements OnInit {
  userList: User[];
  
  constructor() {
    this.userList = [];

    var user1 = new User();
    user1.email = 'gaylord@gaylord.com';
    user1.username = 'Gaylord';
    user1.isActive = false;

    var user2 = new User();
    user2.email = 'superlord@superlord.com';
    user2.username = 'Superlord';
    user2.isActive = false;

    var user3 = new User();
    user3.email = 'ganglord@ganglord.com';
    user3.username = 'Ganglord';
    user3.isActive = true;

    this.userList.push(user1);
    this.userList.push(user2);
    this.userList.push(user3);
   }

  ngOnInit() {
  }

  onAdd(user: User) {
    this.userList.push(user);
  }

  deleteUser(user: User) {
    const index = this.userList.indexOf(user, 0);
    if (index > -1) {
      this.userList.splice(index, 1);
    }
  }

}
