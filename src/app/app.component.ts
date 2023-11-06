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

  public removingNote($event:INote){
    console.log("Elminando Nota");
    console.log($event);
    }
    public editingNote($event:INote){
    console.log("Editando Nota");
    console.log($event);
    }
    public alerta(){
    alert("Alerta Roja");
    }
}
