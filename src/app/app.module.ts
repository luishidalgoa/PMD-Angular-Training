import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { RouterOutlet, provideRouter, withComponentInputBinding } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotesComponent } from './pages/notes/notes.component';
import { AboutComponent } from './pages/about/about.component';
import { NewComponent } from './pages/new/new.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { NotesService } from './services/notes.service';

@NgModule({
    declarations: [
        AppComponent,
        
    ],
    providers: [NotesService,],
    bootstrap: [AppComponent],
    imports: [
        Error404Component,
        AppRoutingModule,
        BrowserModule,
        RouterOutlet,
        NavbarComponent,
        NoteComponent,
        AboutComponent,
        NotesComponent,
        NewComponent,
        LoginComponent,
    ]
})
export class AppModule { }
