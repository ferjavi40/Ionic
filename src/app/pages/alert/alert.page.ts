import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  datosPersona: any [] = [];

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  imprimirConsola() {
    console.log("se ha cancelado")
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alerta',
      subHeader: 'Haz click',
      message: 'Este es un mensaje de alerta',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log("Has aceptado");
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log("Has cancelado");
          }
        },
          

      ]
    });

    await alert.present();
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Has aceptado')
          }
        },
        {
          text: 'Cancelar',
          role:'cancel',
          cssClass:'rojo',
          handler: () => {
            console.log('Has cancelado')
          }
        },
        {
          text: 'Omitir',
          handler: () => {
            console.log('Has omitido')
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Formulario de registro',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2015-03-01',
          max: '2025-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date',
          min: '2015-03-01',
          max: '2025-01-12'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data:any) => {
            this.datosPersona.push(data)
            console.log(this.datosPersona);
          }
        }
      ]
    });

    await alert.present();
  }


}
