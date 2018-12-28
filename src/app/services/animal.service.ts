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
    return this.http.post<any>(this.url + '/animals', animal, {headers: this.httpHeaders});
  }

  getAnimals(): Observable<any> {
    return this.http.get<any>(this.url + '/animals');
  }

  getAnimal(id): Observable<any> {
    return this.http.get<any>(this.url + '/animals/' + id);
  }

  update(token, animal): Observable<any> {
    this.httpHeaders = new HttpHeaders({'Content-type': 'application/json', 'authorization': token});
    return this.http.put<any>(this.url + '/animals/' + animal._id, animal, {headers: this.httpHeaders});
  }

  delete(token, id): Observable<any> {
    this.httpHeaders = new HttpHeaders({'Content-type': 'application/json', 'authorization': token});
    return this.http.delete<any>(this.url + '/animals/' + id, {headers: this.httpHeaders});
  }

  deleteImage(token, image): Observable<any> {
    this.httpHeaders = new HttpHeaders({'Content-type': 'application/json', 'authorization': token});
    return this.http.delete<any>(this.url + '/animals/image-file/' + image, {headers: this.httpHeaders});
  }
}
