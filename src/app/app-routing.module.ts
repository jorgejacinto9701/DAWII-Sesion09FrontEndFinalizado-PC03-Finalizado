import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrudDocenteComponent } from './components/crud-docente/crud-docente.component';


const routes: Routes = [
  {path:"crudDocente", component:CrudDocenteComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
