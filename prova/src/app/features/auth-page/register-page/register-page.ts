import { Component } from '@angular/core';
import { AuthApi } from '../../../domain/auth.api';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubscribeDto } from '../../../domain/Interfaces/UserInterfaces';
import { Button } from "../../../shared/button/button";

@Component({
  selector: 'app-register-page',
  imports: [Button],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  constructor(
    private api: AuthApi,
    private router: Router
  ){}

  subscribeForm: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required]),
    birthday: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
  })

  get Username() {
    return this.subscribeForm.get("username")
  }
  
  get Email() {
    return this.subscribeForm.get("email")
  }

  get Phone() {
    return this.subscribeForm.get("phone")
  }

  get Birthday() {
    return this.subscribeForm.get("birthday")
  }

  get Password() {
    return this.subscribeForm.get("password")
  }

  subscribe = () => {

    if(!this.subscribeForm.valid)
    {
      alert("Existem campos inválidos!")
      return
    }

    const data: SubscribeDto = {
      username: this.Username?.value,
      email: this.Email?.value,
      phone: this.Phone?.value,
      birthday: this.Birthday?.value,
      password: this.Password?.value,
    }

    this.api.subscribe(data).subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/contacts'])
      } 
    )

  }

}
