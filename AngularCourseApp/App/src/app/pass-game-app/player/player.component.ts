import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Player } from 'src/classes/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input()
  player: Player;

  @Output()
  passBall: EventEmitter<number> = new EventEmitter

  constructor() { 
    
  }

  ngOnInit() {
  }

  ballClick() {
    if(this.player.ballsList.length > 1 ) {
      this.passBall.emit(this.player.id);
    }
  }

}
