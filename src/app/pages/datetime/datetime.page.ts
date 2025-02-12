import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNaci: Date = new Date();
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996, 1980, 1945];
  texto: string;
  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text: 'Mundo',
        handler: () => {
          console.log('Log out');
        }
      },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event) {
    console.log(event)
    console.log(new Date(event.detail.value))
  }

  mayuscula() {
    this.texto = this.texto.toUpperCase();
  }

  minuscula() {
    this.texto = this.texto.toLowerCase();
  }

}
