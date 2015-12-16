import {Component} from 'angular2/core';

@Component({
  selector: 'click-me',
  template: `
    <button (click)="onClickMe(hero)">Click me!</button>
    {{clickMessage}}`
})

export class ClickMeComponent {
  clickMessage = '';
  onClickMe(Heroe:any){
    if(Heroe){
      this.clickMessage ='You are my hero!'+Heroe.id+' '+Heroe.name;
    }
    else{
      this.clickMessage ='You are my hero!';
    }
  }
}