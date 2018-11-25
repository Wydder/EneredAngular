import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BoxComponent } from './box/box.component';

@Component({
  selector: 'app-tictac-app',
  templateUrl: './tictac-app.component.html',
  styleUrls: ['./tictac-app.component.css']
})
export class TictacAppComponent implements OnInit {

  table: boolean[][];
  box: BoxComponent;
  player: boolean;
  winner: string;
  title: string
  checkFirstGameResult: boolean;

  constructor() {
    this.title = "Tic Tac Toe";
    this.initValues();    
  }

  initValues() {
    this.table = [];
    this.checkFirstGame();
    this.box = new BoxComponent();
    this.player = true;
    this.winner = null;
    this.table.push([undefined, undefined, undefined]);
    this.table.push([undefined, undefined, undefined]);
    this.table.push([undefined, undefined, undefined]);
    console.log(this.table);
  }

  buildTable(position: number[]) {
    var line = position[0];
    var column = position[1];

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
    this.checkFirstGameResult;
  }

  checkWinner() {
    //diagonala
    if(this.table[0][0] == this.table[1][1] && this.table[1][1] == this.table[2][2] && this.table[2][2] == true) {      
      this.winner = "X";
    } else if (this.table[0][0] == this.table[1][1] && this.table[1][1] == this.table[2][2] && this.table[2][2] == false) {
      this.winner = "0";
    } else {
      this.checkFirstGameResult = true;
    }

    if(this.table[2][0] == this.table[1][1] && this.table[1][1] == this.table[0][2] && this.table[0][2] == true) {
      this.winner = "X";
    } else if (this.table[2][0] == this.table[1][1] && this.table[1][1] == this.table[0][2] && this.table[0][2] == false) {
      this.winner = "0";
    } else {
      this.checkFirstGameResult = true;
    }

    //linia 0
    if(this.table[0][0] == this.table[0][1] && this.table[0][1] == this.table[0][2] && this.table[0][2] == true) {
      this.winner = "X";
    } else if (this.table[0][0] == this.table[0][1] && this.table[0][1] == this.table[0][2] && this.table[0][2] == false) {
      this.winner = "0";
    } else {
      this.checkFirstGameResult = true;
    }
    //linia 1
    if(this.table[1][0] == this.table[1][1] && this.table[1][1] == this.table[1][2] && this.table[1][2] == true) {
      this.winner = "X";
    } else if (this.table[1][0] == this.table[1][1] && this.table[1][1] == this.table[1][2] && this.table[1][2] == false) {
      this.winner = "0";
    } else {
      this.checkFirstGameResult = true;
    }
    //linia 2
    if(this.table[2][0] == this.table[2][1] && this.table[2][1] == this.table[2][2] && this.table[2][2] == true) {
      this.winner = "X";
    } else if (this.table[2][0] == this.table[2][1] && this.table[2][1] == this.table[2][2] && this.table[2][2] == false) {
      this.winner = "0";
    } else {
      this.checkFirstGameResult = true;
    }

    //coloana 0
    if(this.table[0][0] == this.table[1][0] && this.table[1][0] == this.table[2][0] && this.table[2][0] == true) {
      this.winner = "X";
    } else if (this.table[0][0] == this.table[1][0] && this.table[1][0] == this.table[2][0] && this.table[2][0] == false) {
      this.winner = "0";
    } else {
      this.checkFirstGameResult = true;
    }
    //coloana 1
    if(this.table[0][1] == this.table[1][1] && this.table[1][1] == this.table[2][1] && this.table[2][1] == true) {
      this.winner = "X";
    } else if (this.table[0][1] == this.table[1][1] && this.table[1][1] == this.table[2][1] && this.table[2][1] == false) {
      this.winner = "0";
    } else {
      this.checkFirstGameResult = true;
    }
    //coloana 2
    if(this.table[0][2] == this.table[1][2] && this.table[1][2] == this.table[2][2] && this.table[2][2] == true) {
      this.winner = "X";
    } else if (this.table[0][2] == this.table[1][2] && this.table[1][2] == this.table[2][2] && this.table[2][2] == false) {
      this.winner = "0";
    } else {
      this.checkFirstGameResult = true;
    }
  }

  checkFirstGame() {
    this.checkFirstGameResult = this.table.indexOf(undefined) > -1;
  }

  restartGame() {
    this.initValues();
  }



  ngOnInit() {

  }  

}

