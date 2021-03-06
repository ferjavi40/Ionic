import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { PizzaInterface } from '../../interfaces/pizza';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  pizza: PizzaInterface [] = [];

  public data: PizzaInterface [] = [
    { val: 'Pepperoni', isChecked: false },
    { val: 'Sausage', isChecked: false },
    { val: 'Margarita', isChecked: false },
    { val: 'Bacon', isChecked: true },
    { val: 'Pesto', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  constructor( public alertController: AlertController) { }

  ngOnInit() {
  }

  onClick(item:PizzaInterface) {
    this.pizza.push(item);
    console.log(this.pizza);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `${this.pizza[0].val}`,
      subHeader: 'Pizza',
      message: 'Esta es la pizza seleccionada',
      buttons: [
        {
          text:'Aceptar',
          handler:()=>{
            console.log('Haz aceptado');
          }
        },
        {
          text:'Cancelar',
          handler:()=>{
            console.log('Haz cancelado')
          }
        }
      ]
    });

    await alert.present();
  }

}
