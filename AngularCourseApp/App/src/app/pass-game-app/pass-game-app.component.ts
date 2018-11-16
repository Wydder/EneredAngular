import { Component, OnInit } from '@angular/core';
import { Player } from 'src/classes/player';

@Component({
  selector: 'app-pass-game-app',
  templateUrl: './pass-game-app.component.html',
  styleUrls: ['./pass-game-app.component.css']
})
export class PassGameAppComponent implements OnInit {

  player1: Player = new Player();
  player2: Player = new Player();

  constructor() {
      this.player1.ballsList = [true, true, true, true];
      this.player1.name = "Vasile";
      this.player1.id = 1;

      this.player2.ballsList = [true, true, true];
      this.player2.name = "Ion";
      this.player2.id = 2;
  }

  ngOnInit() {
  }

  passBall(id: number) {
    if (id == 1) {
      console.log(id)
      this.player1.removeBall();
      this.player2.pushBall();
    } else if (id == 2) {
      this.player2.removeBall();
      this.player1.pushBall();
    }
  }

}
