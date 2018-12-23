import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public url: string;
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(public http: HttpClient) {
    this.url = GLOBAL.url;
  }

  create(user: User): Observable<any> {
    return this.http.post<User>(this.url + '/create', user, {headers: this.httpHeaders});
  }
}
