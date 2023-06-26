import { Component, OnInit, OnChanges, SimpleChanges,Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnChanges {
  coverActive: boolean = false;
  optionsActive: boolean = false;
  loadingScreenActive: boolean = false;
  mainGameActive: boolean = false;

  @Input() activeSlide: string = "game-cover"

  setActiveSlide(str: string) {
    console.log(str)
    if (str === "game-cover") {
      this.coverActive = true;
      this.optionsActive = false;
      this.loadingScreenActive = false;
      this.mainGameActive = false;
    } else if (str === "game-options") {
      this.coverActive = false;
      this.optionsActive = true;
      this.loadingScreenActive = false;
      this.mainGameActive = false;
    } else if (str === "loading-screen") {
      this.coverActive = false;
      this.optionsActive = false;
      this.loadingScreenActive = true;
      this.mainGameActive = false;
    } else if (str === "main-game") {
      this.coverActive = false;
      this.optionsActive = false;
      this.loadingScreenActive = false;
      this.mainGameActive = true;
    }
  }

  constructor(
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.coverActive = true
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)

    if (this.activeSlide === "game-cover") {
      this.coverActive = true;
      this.optionsActive = false;
      this.loadingScreenActive = false;
      this.mainGameActive = false;
    } else if (this.activeSlide === "game-options") {
      this.coverActive = false;
      this.optionsActive = true;
      this.loadingScreenActive = false;
      this.mainGameActive = false;
    } else if (this.activeSlide === "loading-screen") {
      this.coverActive = false;
      this.optionsActive = false;
      this.loadingScreenActive = true;
      this.mainGameActive = false;
    } else if (this.activeSlide === "main-game") {
      this.coverActive = false;
      this.optionsActive = false;
      this.loadingScreenActive = false;
      this.mainGameActive = true;
    }
  }
}
