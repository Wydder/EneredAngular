import { Component, OnInit, Input } from '@angular/core';
import { Todoelement } from 'src/classes/todoelement';

@Component({
  selector: 'app-todoelement',
  templateUrl: './todoelement.component.html',
  styleUrls: ['./todoelement.component.css']
})
export class TodoelementComponent implements OnInit {

  @Input()
  todoelement: Todoelement;

  constructor() {
    
  }

  ngOnInit() {
  }

}
