import { Component, EventEmitter, Output, signal } from "@angular/core";

@Component({
  selector: "mtc-toggle-button",
  templateUrl: "./toggle-button.component.html",
  styleUrl: "./toggle-button.component.scss",
})
export class ToggleButtonComponent {
  isRotated = signal(false);

  @Output() toggle = new EventEmitter<boolean>();

  rotation() {
    this.isRotated.set(!this.isRotated());
    this.toggle.emit(this.isRotated());
  }
}
