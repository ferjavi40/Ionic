import { Component, OnInit } from '@angular/core';
import { MortyDataService } from '../../services/morty-data.service';

import { MontyInterface } from '../../interfaces/monty-interface';



@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  
  character:MontyInterface[] = [];

  constructor(private _mortyService: MortyDataService) {
    this._mortyService.getCharater(2)
          .subscribe((resp:MontyInterface[])=>{
            this.character=resp;
            console.log(this.character);
          });
  }

  ngOnInit() {
  }

}
