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
  toDoElModel: Todoelement;
  toDoList: Todoelement[];

  constructor() {

  }
  

  addToDo() {
    this.toDoElModel = new Todoelement();
    this.toDoList.push(this.toDoElModel);
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
