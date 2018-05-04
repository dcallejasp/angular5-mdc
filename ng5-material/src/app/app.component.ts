import { Component } from '@angular/core';
import { MDCTab, MDCTabFoundation } from '@material/tabs';
import { MDCTabBar, MDCTabBarFoundation } from '@material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  events = [];

  constructor() {
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





