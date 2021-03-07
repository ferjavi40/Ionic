import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { MontyInterface } from '../interfaces/monty-interface';
import { AllCharactersInterface } from '../interfaces/all-characters';





@Injectable({
  providedIn: 'root'
})
export class MortyDataService {

  api:string='https://rickandmortyapi.com/api';


  constructor( private http:HttpClient) { }

  getCharater(id:number):Observable<MontyInterface> {
    return this.http.get<MontyInterface>(`${this.api}/character/${id}`);
  }


  getAllCharacter(): Observable <MontyInterface[]> {
    return this.http.get<AllCharactersInterface>(`${this.api}/character`)
    .pipe(map(resp=> resp.results));
  }


}
