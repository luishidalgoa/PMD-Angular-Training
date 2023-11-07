import { Component } from '@angular/core';
import { INote } from './Model/inote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notea';

  constructor() { }
}
