import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TictacAppComponent } from '../tictac-app.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input()
  winner: string;

  @Input()
  value: boolean;  
  
  @Input()
  line: number;

  @Input()
  column: number;

  @Output()
  positionclicked: EventEmitter<number[]> = new EventEmitter();
  
  //tictactoe: TictacAppComponent = new TictacAppComponent();

  constructor() { 
    console.log(this.value);
  }

  playerMove() {
    //console.log(this.tictactoe.winner)
    // if(this.value) {
    //   if(this.value == undefined) {      
    //     this.positionclicked.emit([this.line, this.column]);
    //     console.log([this.line, this.column])
    //   }
    // }
    if(!this.winner) {
      if(this.value == undefined) {      
        this.positionclicked.emit([this.line, this.column]);
        console.log([this.line, this.column])
      }
    } 
    
    
  }


  ngOnInit() {
  }

}
