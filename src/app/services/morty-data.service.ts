import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MortyDataService {

  api:string='https://rickandmortyapi.com/api/character';


  constructor( private http:HttpClient) { }

  getCharaters() {
    return this.http.get(this.api);
  }


}
