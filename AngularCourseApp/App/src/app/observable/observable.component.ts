import { Component, OnInit } from '@angular/core';
import { of, fromEvent, from, Subscription } from 'rxjs';
import { Key } from 'protractor';
import { Employee, GenderType } from 'src/classes/employee';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  nameInput: HTMLInputElement;
  escCheckbox: HTMLInputElement;
  enterCheckbox: HTMLInputElement;
  subscription: Subscription;

  users: Array<Employee> = [];


  constructor() { 
    
    
    this.observableMethodB();

    var user1 = new Employee("Mosica", "Bogdan", GenderType.male);
    user1.is_active = true;

    var user2 = new Employee("Noril", "Maiusca", GenderType.female);
    user2.is_active = false;

    var user3 = new Employee("Mosica", "Bogdan", GenderType.male);
    user3.is_active = false;

    this.users.push(user1);
    this.users.push(user2);
    this.users.push(user3);

    
  }

  ngOnInit() {
    this.nameInput = document.getElementById('name') as HTMLInputElement;
    this.enterCheckbox = document.getElementById('enter') as HTMLInputElement;;
    this.escCheckbox = document.getElementById('esc') as HTMLInputElement;
    console.log(this.enterCheckbox.value);
    console.log(this.escCheckbox.value);
    this.observableEventEsc();
    this.observableEventEnter();


    this.observableMethodA();
  }

  observableMethodA() {
    var observable = from(this.users);

    var checkIsActive = filter((val: Employee) => val.is_active != true);

    var subscribeHandlers = {
      next:x => console.log(x),
      error:e => { console.log(e.message) },
      complete: () => { console.log('Subscribe for users completed')}
    }

    // var subscribeHandlers2 = {
    //   next:x => console.log(x),
    //   error:e => { console.log(e.message) },
    //   complete: () => { console.log('Subscribe 1.2 completed')}
    // }

    checkIsActive(observable).subscribe(subscribeHandlers);
    //observable.subscribe(subscribeHandlers2);
  }

  observableMethodB() {
    var observable = of('a','b','c');

    var subscribeHandlers = {
      next:x => console.log(x),
      error:e => { console.log(e.message) },
      complete: () => { console.log('Subscribe 2 completed')}
    }

    observable.subscribe(subscribeHandlers);
  }

  observableEventEsc(): Subscription {
    var observable = fromEvent(this.nameInput, 'keydown');
    return observable.subscribe((event: any) => {
      if (event.keyCode == 27) {
        this.nameInput.value = '';
      }
    });
  }

  observableEventEnter(): Subscription {
    var observable = fromEvent(this.nameInput, 'keydown');
    return observable.subscribe((event: any) => {
      if (event.keyCode == 13) {
        alert(this.nameInput.value);
      }
    });
  }

  clearInputWithEsc() {
    this.subscription = this.observableEventEsc();

    // if()
  }

  clearAlertWithEnter() {

  }
  

}
