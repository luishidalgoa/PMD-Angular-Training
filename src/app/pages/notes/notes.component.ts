import { Component, OnInit, ViewChild, ElementRef, NgModule } from
  '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from
  '../../directives/highlight.directive';
import { NotesService } from '../../services/notes.service';
import { INote } from 'src/app/Model/inote';
import { NoteComponent } from 'src/app/components/note/note.component';
@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective, NoteComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @ViewChild('colorpicker') cp!: ElementRef;
  public color: string = '#fff';
  public page = 'Inicio';
  constructor(public notesS: NotesService) { }
  ngOnInit(): void {
  }
  refresh() {
    location.reload();
  }
  cambiaCorlor($event: any) {
    this.color = $event.target.value;
  }
  public removingNote($event: INote) {
    console.log("Elminando Nota");
    this.notesS.removeNote($event.id)
  }
  public editingNote($event: INote) {
    console.log("Editando Nota");
    console.log($event);
  }
  /**
   * Declarar un trackByFunction para el ngFor nos permite definir al ngFor que repintara el 
   * DOM solo cuando el valor de retorno de la función trackByFunction sea distinto al anterior.
   * de modo que si por ejemplo modificamos el ID de una nota el DOM que muestra esa nota se repintara unicamente esa nota y no todas las notas. 
   * Pero si se modifica el titulo de la nota se repintara unicamente el titulo de la nota y no toda la nota.
   * Permitiendonos hacer un uso responsable de los recursos del navegador.
   * @param index indice de la iteración del ngFor
   * @param note nota que se esta iterando
   * @returns devuelve el id de la nota o -1 si no tiene id
   */
  trackByNotes(index: number, item: INote) {
    return item.id;
  }
}