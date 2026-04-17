import { Routes } from '@angular/router';
import { AuthPage } from './features/auth-page/auth-page';
import { LoginPage } from './features/auth-page/login-page/login-page';
import { RegisterPage } from './features/auth-page/register-page/register-page';
import { ChatPage } from './features/chat-page/chat-page';
import { ContactsPage } from './features/contacts-page/contacts-page';

export const routes: Routes = [
    {path: "", component: AuthPage, children: [
            {path: "login", component: LoginPage},
            {path: "register", component: RegisterPage}
    ]},
    {path: "chat", component: ChatPage},
    {path: "contacts", component: ContactsPage}
];
