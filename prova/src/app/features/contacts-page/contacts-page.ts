import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { ContactComponent } from "./components/contact-component/contact-component";
import { Button } from "../../shared/button/button";
import { InputComponent } from "../../shared/input-component/input-component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-page',
  imports: [Header, ContactComponent, Button, InputComponent],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.css',
})
export class ContactsPage {
  constructor( private router: Router){}

  protected open: boolean = false;

  openModal() {
    this.open = true
  }

  openChat() {
    this.router.navigate(["chat"])
  }
}
