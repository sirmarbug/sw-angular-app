import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(
    private http: HttpClient
  ) { }

  getData(url: string): any {
    console.log('StarWarsService - getData', url);
    if (!url) {
      return this.http.get(`https://swapi.co/api/people`);
    }
    return this.http.get(url);
  }
}
