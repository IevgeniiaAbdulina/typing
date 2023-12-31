import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typing Challenge';
  randomText = lorem.sentence();
  enteredText = '';

  onInput(event: any) {
    const value = event.target.value;

    console.log(value);
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if(!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
