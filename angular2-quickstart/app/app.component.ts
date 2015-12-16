import {Component} from 'angular2/core';

import {Hero} from './hero';

import {ClickMeComponent}    from './click-me.component';

import {LoopbackComponent}   from './loop-back.component';












import {KeyUpComponent_v1,
KeyUpComponent_v2,
KeyUpComponent_v3,
KeyUpComponent_v4}   from './keyup.component';

import {LittleTourComponent} from './little-tour.component';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [
    ClickMeComponent,
    LoopbackComponent,
    KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4,
    LittleTourComponent
  ]
})


export class AppComponent {
  title: string;
  nuevoHeroe: Hero;
  constructor() {
    this.title = 'Tour of Heroes';
    this.nuevoHeroe = { id: null, name: '', sayHello: '' };
  }

  heroes = [
    new Hero(1, 'Windstorm', ''),
    new Hero(13, 'Bombasto', ''),
    new Hero(15, 'Magneta', ''),
    new Hero(20, 'Tornado', '')
  ];
  myHero = this.heroes[0];

  agregarHeroe() {
    if (this.nuevoHeroe != { id: null, name: '', sayHello: '' }) {
      this.heroes.push(
        new Hero(
          this.nuevoHeroe.id,
          this.nuevoHeroe.name,
          this.nuevoHeroe.sayHello)
      );
      this.nuevoHeroe = { id: null, name: '', sayHello: '' };
    }

  }

  encerar() {
    this.nuevoHeroe.id = null;
    this.nuevoHeroe.name = "";
    this.nuevoHeroe.sayHello = "";
  }


  sayHello(heroeQueSaluda: Hero) {
    heroeQueSaluda.sayHello = 'Hola' + heroeQueSaluda.name + " - " + heroeQueSaluda.id;
    this.myHero =heroeQueSaluda; 
    //{id:heroe.id,name:heroe.name,sayHello:heroe.sayHello};
  }
}

