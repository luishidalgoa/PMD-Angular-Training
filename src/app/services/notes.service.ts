import { Injectable } from '@angular/core';
import { INote } from '../model/INote';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from
  '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private dbPath = '/angularTutorial';
  notesRef!: AngularFirestoreCollection<any>;

  public notes: INote[] = [
    { id: 1, title: 'Nota1', description: "Hola Mundo" },
    { id: 2, title: 'Nota2', description: "Hello World" },
  ];
  constructor(private db: AngularFirestore) {
    this.notesRef = db.collection(this.dbPath);

    //cargar todas las notas
    this.notesRef.get().subscribe(d => {
      let docs = d.docs;
      /*docs.forEach(d=>{
        let newd = {id:d.id,...d.data()}; //id: 3893545754 , title: 'Nota1', description: "Hola Mundo"
        this.notes.push(newd);
      });*/
      this.notes = docs.map(d => {
        return { id: d.id, ...d.data() }
      })
    });
  }

  createWithID(id: string, data: any): Promise<void> {
    return this.notesRef.doc(id).set(data, { merge: true }); //merge -> create if not exists, update if exists
  }

  update(id: string, data: any): Promise<void> {
    return this.notesRef.doc(id).update(data);
  }

  getAll(): AngularFirestoreCollection<any> {
    return this.notesRef;
  }
  getById(id: string) {
    return this.notesRef.doc(id);
  }
  delete(id: string): Promise<void> {
    return this.notesRef.doc(id).delete();
  }

  public async createNote(newNote: INote) {
    /**
     * Base de datos -> clave primar id
     */
    let id = Math.floor(Math.random() * 1000) + 1;
    /**
     * Conectar firebase
     */
    try {
      let { id, ...newNoteWithoudID } = newNote;
      let dRef: DocumentReference<any> = await this.notesRef.add({ ...newNoteWithoudID });
      newNote.id = dRef.id;
      this.notes.push(newNote);
    } catch (err) {
      console.log(err);
    }

    newNote.id = id;
    this.notes.push(newNote);
  }
  public removeNote(id: any): Promise<void> {
    let newNotes = this.notes.filter((n) => {
      return n.id != id;
    });
    this.notes = newNotes;
    return this.notesRef.doc(id).delete();
  }
  public getNotes(): INote[] {
    return this.notes;
  }
  public updateNote(note: INote): Promise<void> {
    let idtobeupdated: any;
    let data: any;
    this.notes.forEach(n => {
      if (n.id == note.id) {
        n.title = note.title;
        n.description = note.description;
        let { id, ...newData } = note;
        idtobeupdated = id;
        data = newData;
      }
    });
    if (idtobeupdated) {
      return this.notesRef.doc(idtobeupdated as string).update(data);
    } else {
      return Promise.resolve();
    }
  }

}
