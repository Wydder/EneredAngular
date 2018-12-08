import { Component, OnInit } from '@angular/core';
import { of, fromEvent } from 'rxjs';
import { Key } from 'protractor';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  nameInput: HTMLInputElement;

  constructor() { 
    this.observableMethodA();
    this.observableMethodB();
  }

  ngOnInit() {
    this.nameInput = document.getElementById('name') as HTMLInputElement;
    this.observableEvent();
  }

  observableMethodA() {
    var observable = of(1,2,3);

    var subscribeHandlers = {
      next:x => console.log(x),
      error:e => { console.log(e.message) },
      complete: () => { console.log('Subscribe 1.1 completed')}
    }

    var subscribeHandlers2 = {
      next:x => console.log(x),
      error:e => { console.log(e.message) },
      complete: () => { console.log('Subscribe 1.2 completed')}
    }

    observable.subscribe(subscribeHandlers);
    observable.subscribe(subscribeHandlers2);
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

  observableEvent() {
    var observable = fromEvent(this.nameInput, 'keydown');
    observable.subscribe((event: any) => {
      if (event.keyCode == 27) {
        this.nameInput.value = '';
      }
    });
  }

  // resetInput() {
  //   if ()
  // }

}
