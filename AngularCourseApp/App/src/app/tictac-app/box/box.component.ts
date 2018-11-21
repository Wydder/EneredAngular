import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  
  @Input()
  value: boolean;  
  
  @Input()
  line: number;

  @Input()
  column: number;

  @Output()
  positionclicked: EventEmitter<number[]> = new EventEmitter();
    
  constructor() { 
    console.log(this.value);
  }

  playerMove() {
    if(this.value == undefined) {      
      this.positionclicked.emit([this.line, this.column]);
      console.log([this.line, this.column])
    }
  }


  ngOnInit() {
  }

}
