import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoelement',
  templateUrl: './todoelement.component.html',
  styleUrls: ['./todoelement.component.css']
})
export class TodoelementComponent implements OnInit {

  id: number;
  name: string;
  isDone: boolean;
  editMode: boolean;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.isDone = false;
    this.editMode = false;
  }

  ediMode() {
    this.editMode = true;
  }

  cancel() {
    this.editMode = false;
  }

  save(name) {
    this.name = name
  }

  ngOnInit() {
  }

}
