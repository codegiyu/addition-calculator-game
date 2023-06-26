import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {
  loadingPercent: number = 0;
  loadingFunText: string = "Loading in the numbers...";
  dotOneShow: boolean = false;
  dotTwoShow: boolean = false;
  dotThreeShow: boolean = false;
  loadCycleCount: number = 0;
  loadingData = [
    { percent: 15, text: "Loading all the numbers in range" }, 
    { percent: 45, text: "Cross-checking the randomizer" }, 
    { percent: 80, text: "Cleaning the calculation engine"}, 
    { percent: 100, text: "Sending you off to battle" }
  ]

  constructor() {}

  @Output() slideChange: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
    let loadInterval = setInterval(() => {
      if (this.loadCycleCount < 4) {
        this.loadCycle()
      } else {
        clearInterval(loadInterval)
        console.log("loading complete")
        this.slideChange.emit("main-game")
      }
    }, 2000)
  }

  loadingCountUp(n: number) {
    let countUp = setInterval( () => {
      let currentNumber = this.loadingPercent;
      if (currentNumber < n) {
          currentNumber++;
      }
      this.loadingPercent = currentNumber;
      if (currentNumber == n) {
          clearInterval(countUp);
      }
    }, 45)
  }

  loadCycle() {
    this.dotOneShow = false;
    this.dotTwoShow = false;
    this.dotThreeShow = false;
    this.loadingFunText = this.loadingData[this.loadCycleCount].text;
    this.loadingCountUp(this.loadingData[this.loadCycleCount].percent);
    
    setTimeout( () => {
      this.dotOneShow = true;
    }, 500);
    setTimeout( () => {
      this.dotTwoShow = true;
    }, 1000);
    setTimeout( () => {
      this.dotThreeShow = true;
      this.loadCycleCount++
    }, 1500);
  }
}
