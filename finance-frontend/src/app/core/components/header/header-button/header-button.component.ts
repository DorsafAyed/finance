import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "mtc-header-button",
  templateUrl: "./header-button.component.html",
  styleUrl: "./header-button.component.scss",
})
export class HeaderButtonComponent {
  @Output() onClick = new EventEmitter<Event>();
}
