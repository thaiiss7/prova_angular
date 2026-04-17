import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  protected readonly URL: string = "http://localhost:5294/api/auth/login"

  constructor( protected client: HttpClient ){}
  
    protected headers : HttpHeaders = new HttpHeaders({
        "Authorization" : sessionStorage.getItem('token')!
    })
}

export default class BaseService<T> {
  protected readonly URL: string = "http://localhost:5294/api/auth/login"

  constructor( protected client: HttpClient ){}

  protected headers : HttpHeaders = new HttpHeaders({
        "Authorization" : sessionStorage.getItem('token')!
    })

    public post ( obj : T, token? : string, ) {
        return this.client.post( `${this.URL}`, obj , {headers : this.headers}).pipe()
    }

}