import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})

export class AnimalService {
  public url: string;
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(public http: HttpClient) {
    this.url = GLOBAL.url;
  }

  create(token, animal): Observable<any> {
    this.httpHeaders = new HttpHeaders({'Content-type': 'application/json', 'authorization': token});
    return this.http.post<any>(this.url + '/animals/create', animal, {headers: this.httpHeaders});
  }

  getAnimals(): Observable<any> {
    return this.http.get<any>(this.url + '/animals', {headers: this.httpHeaders});
  }
}
