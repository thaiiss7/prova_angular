import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input()
  title: string = ""

  @Output()
  onClick: EventEmitter<void> = new EventEmitter()

  click = () => {
    this.onClick.emit()
  }
}
