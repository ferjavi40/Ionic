import { Component, OnInit, OnDestroy } from '@angular/core';
import { MortyDataService } from '../../services/morty-data.service';
import { Subscription } from 'rxjs';


import { MontyInterface } from '../../interfaces/monty-interface';



@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit , OnDestroy {
  
  public character:MontyInterface= null;
  private character$$: Subscription = null;

  constructor(private _mortyService: MortyDataService) {}

  ngOnInit() {
    this.character$$= this._mortyService.getCharater(2)
        .subscribe(data=>{
          this.character = data;
        });
  }

  ngOnDestroy(): void {
    if(this.character$$) this.character$$.unsubscribe()
  }

}
