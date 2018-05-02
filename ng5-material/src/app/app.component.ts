import { Component } from '@angular/core';
import { SidenavOpenCloseExample } from './sidenav/app.sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events = [];

  constructor(side: SidenavOpenCloseExample) {
    this.events = ["peras", "Manzanas", "uvas"];
  }
  
  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;

  showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000);

  }
}
