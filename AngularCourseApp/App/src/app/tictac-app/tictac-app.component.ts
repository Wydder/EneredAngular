import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BoxComponent } from './box/box.component';

@Component({
  selector: 'app-tictac-app',
  templateUrl: './tictac-app.component.html',
  styleUrls: ['./tictac-app.component.css']
})
export class TictacAppComponent implements OnInit {

  table: boolean[][];
  box: BoxComponent = new BoxComponent();
  player: boolean = true;

  constructor() { 
    this.table = [];
    
    this.table.push([undefined, undefined, undefined]);
    this.table.push([undefined, undefined, undefined]);
    this.table.push([undefined, undefined, undefined]);
    console.log(this.table);

    
  }

  buildTable(position: number[]) {
    var column = position[1]
    var line = position[0];

    if (this.player == true) {      
      this.table[line][column] = true;
      this.player = false;
      this.checkWinner();
    } else {
      this.table[line][column] = false;
      this.player = true;
    }
    console.log(this.table);
    this.checkWinner();
  }

  checkWinner() {
    if(this.table[0][0] == this.table[1][1] && this.table[1][1] == this.table[2][2] && this.table[2][2] == true) {
      alert('X has won!')
    }
  }

  ngOnInit() {

  }

}
