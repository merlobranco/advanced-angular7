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
  public identity: User;
  public token: string;
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(public http: HttpClient) {
    this.url = GLOBAL.url;
  }

  create(user: User): Observable<any> {
    return this.http.post<any>(this.url + '/create', user, {headers: this.httpHeaders});
  }

  login(user, gettoken = null): Observable<any> {
    if (gettoken != null) {
      user.gettoken = gettoken;
    }

    return this.http.post<any>(this.url + '/login', user, {headers: this.httpHeaders});
  }

  update(user): Observable<any> {
    this.httpHeaders = new HttpHeaders({'Content-type': 'application/json', 'authorization': this.getToken()});
    return this.http.put<any>(this.url + '/update/' + user._id, user, {headers: this.httpHeaders});
  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity !== 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token !== 'undefined') {
      this.token = token;
    } else {
      this.identity = null;
    }
    return this.token;
  }

  getKeepers(): Observable<any> {
    return this.http.get<any>(this.url + '/keepers');
  }
}
