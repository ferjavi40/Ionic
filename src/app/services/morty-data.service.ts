import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MortyDataService {

  api:string='https://rickandmortyapi.com/api';


  constructor( private http:HttpClient) { }

  getCharater(id:number) {
    return this.http.get(`${this.api}/character/${id}`);
  }


}
