import { Component, OnInit } from '@angular/core';
import { User } from 'src/classes/user';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-userexercise',
  templateUrl: './userexercise.component.html',
  styleUrls: ['./userexercise.component.css']
})
export class UserexerciseComponent implements OnInit {
  userList: User[];
  restApi: RestApiService;
  loadingSpinner: boolean = true;
  
  constructor(restApi: RestApiService) {
    this.userList = [];
    this.restApi = restApi;
    
    // var test = this.restApi;
    // console.log(test.url);

    // var user1 = new User();
    // user1.email = 'gaylord@gaylord.com';
    // user1.username = 'Gaylord';
    // user1.isActive = false;

    // var user2 = new User();
    // user2.email = 'superlord@superlord.com';
    // user2.username = 'Superlord';
    // user2.isActive = false;

    // var user3 = new User();
    // user3.email = 'ganglord@ganglord.com';
    // user3.username = 'Ganglord';
    // user3.isActive = true;

    // this.userList.push(user1);
    // this.userList.push(user2);
    // this.userList.push(user3);
   }

  ngOnInit() {
    this.getUserList();
  }

  getUserList(): any {
    this.loadingSpinner = true;
    // var subscribeHandlers = {
    //   next:x => console.log(x),
    //   error:e => { console.log(e.message) },
    //   complete: () => { console.log('Subscribe 2 completed')}
    // }
    
    if(this.restApi) {
      this.restApi.getAll().subscribe(response => {
        console.log(response)
        this.userList = response;
        this.loadingSpinner = false;
      })
    } else {
      console.log('Response is not defined')
    }   
  }

  onAdd(user: User) {
    this.loadingSpinner = true;
    var post = this.restApi.addUser(user);
    post.subscribe(x => {
      console.log(x);
      this.getUserList();
      
    })
    console.log(this.restApi);
  }

  deleteUser(user: User) {
    // const index = this.userList.indexOf(user, 0);
    // if (index > -1) {
    //   this.userList.splice(index, 1);
    // }
    this.loadingSpinner = true;
    var post = this.restApi.deleteUser(user._id);
    post.subscribe(x => {
      console.log(x);
      this.getUserList();
    })
    console.log(this.restApi);
  }

}
