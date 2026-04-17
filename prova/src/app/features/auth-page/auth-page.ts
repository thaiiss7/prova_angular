import { Component } from '@angular/core';
import { LoginPage } from './login-page/login-page';
import { RegisterPage } from './register-page/register-page';

@Component({
  selector: 'app-auth-page',
  imports: [
    LoginPage,
    RegisterPage
  ],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage {}
