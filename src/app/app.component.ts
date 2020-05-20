import { Component } from '@angular/core';

let array:Array<string> = [];

// decorator: 설정 파일 개념
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {
  }
}
