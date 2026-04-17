import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-component',
  imports: [],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})
export class InputComponent {
  @Input()
  _value: string = ""

  @Input()
  label: string = ""

  @Output()
  change: EventEmitter<void> = new EventEmitter()

  onInputChange = (value: any) => {

    const stringValue = value.target.value
    console.log(value.target.value);

    this.change.emit(stringValue)
  }
}
