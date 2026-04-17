import { Injectable } from '@angular/core';
import { Api } from './api';
import { Observable } from 'rxjs';
import { LoginDto, SubscribeDto } from './Interfaces/UserInterfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthApi extends Api {
  
  login = (data: LoginDto) : Observable<string> => {
    return this.client.post<string>(`${this.URL}/auth/login`, data, {headers : this.headers}).pipe();
  }
  subscribe = (data: SubscribeDto): Observable<void> => {
    return this.client.post<void>(`${this.URL}/auth/subscribe`, data, {headers : this.headers}).pipe()
  }
}
