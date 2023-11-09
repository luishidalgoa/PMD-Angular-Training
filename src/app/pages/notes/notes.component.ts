import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../components/SharedModule';
import { HighlightDirective } from '../../directives/highlight.directive';
import { NotesService } from '../../services/notes.service';
import { FormNoteComponent } from '../../components/form-note/form-note.component';
import { INote } from 'src/app/model/INote';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule,FormsModule,SharedModule,HighlightDirective,
  FormNoteComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public _editingNote!:INote;


  constructor(public notesS:NotesService) { }

  ngOnInit(): void {
  }

  public removingNote($event:INote){
    console.log("Elminando Nota");
    this.notesS.removeNote($event.id)
  }
  public editingNote($event:INote){
    this._editingNote=$event;
    console.log(this._editingNote)
    document.querySelector('#editModal')?.setAttribute('style','display:block');
  }
  trackByNotes(index:number,item:INote){
    return item.id;
  }

  updateNote($event:any){
    this.notesS.updateNote($event);  //<-new
    document.getElementById("closeModal")?.click();
    document.querySelector('#editModal')?.setAttribute('style','display:none');
  }
  close(){
    document.querySelector('#editModal')?.setAttribute('style','display:none');
  }
}
