import {Component} from 'angular2/core';
@Component({
  selector: 'key-up1',
  template: `
  <h3> Key up 1</h3>
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v1 {
  values=''; 
  
  // without strong typing
  onKey(event:any) {
    this.values += event.target.value + ' | ';
  }
  
  // with strong typing
  /*
  onKey(event:KeyboardEvent) {
      this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
  */
}
//////////////////////////////////////////
@Component({
  selector: 'key-up2',
  template: `
  <h3> Key up 2</h3>
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v2 {
  values='';
  onKey(value:string) {
    this.values += value + ' | ';
  }
}
//////////////////////////////////////////
@Component({
  selector: 'key-up3',
  template: `
  <h3> Key up 3</h3>
    <input #box (keyup.enter)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v3 {
  values='';
}
//////////////////////////////////////////
@Component({
  selector: 'key-up4',
  template: `
  <h3> Key up 4</h3>
    <input #box
      (keyup.enter)="values=box.value"
      (blur)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v4 {
  values='';
}