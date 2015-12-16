import {Component} from 'angular2/core';
@Component({
  selector: 'loop-back',
  template:`
  <h1>Loopback</h1>
    <input #box (keyup)="valor=box.value">
    <p>{{box.value}} {{valor}}</p>
  `
})
export class LoopbackComponent {
  valor: string;
  constructor(){
    this.valor = 'sexoIntenso'
  }
 }