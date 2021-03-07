import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MortyDataService } from '../../services/morty-data.service';
import { MontyInterface } from '../../interfaces/monty-interface';



@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss'],
})
export class CharacterListPage implements OnInit, OnDestroy {

  public personajes: MontyInterface = null;
  private personajes$: Subscription= null;

  constructor( private _mortyService: MortyDataService) { }

  ngOnInit() {
    this.personajes$= this._mortyService.getAllCharacter()
          .subscribe(data=>{
            this.personajes= data;
            console.log(this.personajes)
          });

  }

  ngOnDestroy(): void{
    if(this.personajes$) this.personajes$.unsubscribe()
  }
}
