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
  toDoTaskName: string = "";
  toDoElModel: Todoelement;
  toDoList = [];

  constructor() {

  }
  

  addToDo(id, name) {
    id = this.toDoList.length;
    this.toDoElModel = new Todoelement(id, name);
    //console.log('added')
    //console.log(this.toDoElModel);
    this.toDoList.push(this.toDoElModel);
    console.log(this.toDoList);
  }

  updateToDo(todoel) {
    for (var i = 0; i < this.toDoList.length; i++) {
      if (todoel.id == this.toDoList[i].id) {
        this.toDoList[i].name = todoel.name
        this.toDoList[i].editMode = false
        console.log(this.toDoList[i].name)
      }
    }
  }
  cancelEdit(todoel) {
    for (var i = 0; i < this.toDoList.length; i++) {
      if (todoel.id == this.toDoList[i].id) {
        this.toDoList[i].editMode = false
        console.log(this.toDoList[i].name)
      }
    }
  }

  ngOnInit() {
  }

}
