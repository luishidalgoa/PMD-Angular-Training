import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input,Output } from '@angular/core';
import { INote } from 'src/app/Model/inote';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input('note') public note: INote = {
    id: -1,
    title: '',
    description: ''
  }
  deleteStyle: string = 'border-red-500 text-red rounded-md';
  editStyle: string = 'bg-blue-500 text-white rounded-md';

  @Output() borrar = new EventEmitter<INote>();
  @Output() editar = new EventEmitter<INote>();

  constructor() { }

  public removeNote(): void {
    this.borrar.emit(this.note);
  }
  public editNote(): void {
    this.note.title = prompt('Escribe el nuevo título') || '';
    this.editar.emit(this.note);
  }
}
