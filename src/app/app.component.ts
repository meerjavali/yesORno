import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proposal';
  flag=false;
  @ViewChild('no',{static:true}) buttonNo : ElementRef;
  positionX: number = 650;
  positionY: number = 540;
  mouseFlag=true;
  tell(){
  this.flag =true;
  }
  move(){
    this.mouseFlag=false;
    this.positionX = Math.random() * 500;
    this.positionY = Math.random() * 500;
  }
}
