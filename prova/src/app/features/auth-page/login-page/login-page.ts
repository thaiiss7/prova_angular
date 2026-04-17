import { Component, input } from '@angular/core';
import { Button } from "../../../shared/button/button";
import { InputComponent } from "../../../shared/input-component/input-component";
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../../../domain/Interfaces/UserInterfaces';
import { AuthApi } from '../../../domain/auth.api';

@Component({
  selector: 'app-login-page',
  imports: [Button, InputComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage { 
  constructor(
    private api: AuthApi,
    private router: Router
  ){}

  protected isSubscribe: boolean = false
  
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  get Email() {
    return this.loginForm.get("email")
  }

  get Password() {
    return this.loginForm.get("password")
  }

  login = () => {
    if(!this.loginForm.valid)
    {
      alert("Existem campos inválidos!")
      return
    }
    
    const data: LoginDto = {
      password: this.Password?.value,
      email: this.Email?.value,
    }

    this.api.login(data).subscribe(
      res =>{
        console.log(res)
        sessionStorage.setItem("token", res)
        this.router.navigate(['/contacts'])
      }
    )
  }
}
