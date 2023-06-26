import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss']
})
export class MainGameComponent implements OnInit {
  integer1: number = 0;
  integer2: number = 100;
  minimum!: number
  maximum!: number
  correctCount: number = 0;
  incorrectCount: number = 0;
  numsArr: number[] = []

  constructor (
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.minimum = Number(localStorage.getItem("minimum"));
    this.maximum = Number(localStorage.getItem("maximum"));
    console.log(this.minimum, this.maximum)
    this.numsArr = Array.from({length: this.maximum - this.minimum + 1}, (_, idx) => this.minimum + idx)
    this.generateIntegers()
    console.log(this.numsArr)
  }

  sumForm = new FormGroup({
    sum: new FormControl("", [Validators.required])
  })

  generateIntegers() {
    let count = 1
    const spinInterval = setInterval(() => {
      if (count <= 25) {
        this.integer1 = this.getRandomNumber()
        this.integer2 = this.getRandomNumber()
        count++
      } else {
        clearInterval(spinInterval)
      }
    }, 100)
  }

  getRandomNumber() {
    return this.numsArr[Math.floor(Math.random() * this.numsArr.length)]
  }

  sumIntegers() {
    if (this.integer1 + this.integer2 === Number(this.sumForm.value.sum)) {
      this.correctCount++
      this.notify.showSuccess("That was correct!")
    } else {
      this.incorrectCount++
      this.notify.showError(`Wrong! The right sum was ${this.integer1 + this.integer2}`)
    }
    this.sumForm.reset()
    this.generateIntegers()
  }
}
