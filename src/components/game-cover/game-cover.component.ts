import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-cover',
  templateUrl: './game-cover.component.html',
  styleUrls: ['./game-cover.component.scss']
})
export class GameCoverComponent {

  constructor () {}

  @Output() slideChange: EventEmitter<string> = new EventEmitter<string>()

  
  selectOptions() {
    this.slideChange.emit("game-options")
    console.log("changed")
  }
}
