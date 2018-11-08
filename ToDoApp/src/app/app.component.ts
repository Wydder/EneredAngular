import { Component } from '@angular/core';
import { Todoelement } from "src/classes/todoelement";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ToDoApp';
  toDoElModel = Todoelement;
  todoelement = {};
  toDoList = [];

  constructor() {

  }

  addToDo() {
    let addToDoName = prompt("What to do to add?");;
    this.todoelement = new Todoelement(addToDoName);
    this.toDoList.push(this.todoelement);
  }
}


