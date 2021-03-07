import { Component, OnInit } from '@angular/core';

interface componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: componente [] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'skull-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on-outline',
      name: 'Buttons',
      redirectTo: '/button'
    },
    {
      icon: 'id-card-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-done-circle-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'alarm-outline',
      name: 'Datetime',
      redirectTo: '/datetime'
    },
    {
      icon: 'server-outline',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid System',
      redirectTo: '/grid'
    },
    {
      icon: 'grid-outline',
      name: 'Lista de personajes',
      redirectTo: '/character-list'
    },
    {
      icon: 'disc-outline',
      name: 'Scroll infinito',
      redirectTo: '/infiniteve-scroll'
    }


  ];

  

  constructor() { }

  ngOnInit() {
  }

}
