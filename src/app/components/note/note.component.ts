import { Component, Input } from '@angular/core';
import { INote } from 'src/app/Model/inote';

@Component({
  selector: 'app-note',
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
}
