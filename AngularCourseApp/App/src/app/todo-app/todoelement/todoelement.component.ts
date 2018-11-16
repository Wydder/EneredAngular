import { Component, OnInit } from '@angular/core';
import { Todoelement } from 'src/classes/todoelement';

@Component({
  selector: 'app-todoelement',
  templateUrl: './todoelement.component.html',
  styleUrls: ['./todoelement.component.css']
})
export class TodoelementComponent implements OnInit {

  todoelement: Todoelement;
  
  constructor() {

  }

    ngOnInit() {
  }

}
