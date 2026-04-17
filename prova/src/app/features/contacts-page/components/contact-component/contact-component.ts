import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../../app.routes';

@Component({
  selector: 'app-contact-component',
  imports: [],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {

  @Input()
  name: string = "nome"
  //recebe o nome dps da api

  @Output()
  onClick: EventEmitter<void> = new EventEmitter()

  click = () => {
    this.onClick.emit()
  }
}
