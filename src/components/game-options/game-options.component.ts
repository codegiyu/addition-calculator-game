import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.scss']
})
export class GameOptionsComponent {

  constructor(
    private notify: NotificationService
  ) {}

  @Output() slideChange: EventEmitter<string> = new EventEmitter<string>()

  optionsForm = new FormGroup({
    minimum: new FormControl("0", [Validators.required, Validators.min(-1000), Validators.max(1000)]),
    maximum: new FormControl("100", [Validators.required, Validators.min(-1000), Validators.max(1000)])
  })

  get minimum() {
    return this.optionsForm.get("minimum");
  }
  get maximum() {
    return this.optionsForm.get("maximum");
  }

  submitOptions() {
    const minimum = Number(this.optionsForm.value.minimum)
    const maximum = Number(this.optionsForm.value.maximum)

    if (maximum - minimum < 100) {
      this.notify.showError("Difference between your values is less than 100!")
    } else {
      console.log(this.optionsForm.value)
      localStorage.setItem("minimum", String(this.optionsForm.value.minimum))
      localStorage.setItem("maximum", String(this.optionsForm.value.maximum))
      this.slideChange.emit("loading-screen")
      this.optionsForm.reset()
    }
  }
}
