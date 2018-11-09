import { Component, OnInit } from '@angular/core';
import { Todoelement } from "src/classes/todoelement";

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
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

  ngOnInit() {
  }

}
