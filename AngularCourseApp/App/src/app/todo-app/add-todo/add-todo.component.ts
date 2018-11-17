import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todoelement } from "src/classes/todoelement";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})


export class AddTodoComponent implements OnInit {
  todelement: Todoelement;

  @Output()
  onAdd: EventEmitter<Todoelement> = new EventEmitter();

  constructor() {
    this.todelement = new Todoelement();
  }

  ngOnInit() {
  }


  addToDo() {
    console.log(this.todelement);
    this.onAdd.emit(this.todelement);
    this.todelement = new Todoelement();
  }

}
