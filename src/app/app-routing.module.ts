import { NgModule } from '@angular/core';
import { RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { NoteComponent } from './components/note/note.component';
import { AppComponent } from './app.component';
import { NotesComponent } from './pages/notes/notes.component';
import { NewComponent } from './pages/new/new.component';
import { loginGuard } from './guards/login.guard';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  {
    path: "home", component: NotesComponent,
    canActivate: [loginGuard]
  },
  {
    path: "new", component: NewComponent,
    canActivate: [loginGuard]
  },
  {
    path: "about", loadComponent:
      () => import('./pages/about/about.component').then(c => c.AboutComponent)
  },  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent,
    canActivate: [loginGuard]
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
