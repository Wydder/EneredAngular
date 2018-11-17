import { Component, OnInit } from '@angular/core';
import { Todoelement } from "src/classes/todoelement";
import { TodoelementComponent } from "./todoelement/todoelement.component";

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  title = 'ToDoApp';  
  todoelement: Todoelement;
  toDoList: Todoelement[] = [];

  constructor() {
  }
  

  addToDo(todoelement: Todoelement) {
    this.toDoList.push(todoelement);
    this.todoelement = new Todoelement();
    //console.log('added')
    //console.log(this.toDoElModel);
    console.log(this.toDoList);
  }

  updateToDo() {
    
  }
  cancelEdit() {
    
  }

  ngOnInit() {
  }

}
