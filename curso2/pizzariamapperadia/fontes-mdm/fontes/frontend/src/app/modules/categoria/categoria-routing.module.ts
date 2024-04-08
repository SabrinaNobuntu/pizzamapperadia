import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component'; 
import { ListCategoriaComponent } from './list-categoria/list-categoria.component'; 


const routes: Routes = [
  { path: '', component: ListCategoriaComponent}, 
  { path: 'new', component: CategoriaFormComponent}, 
  { path: ':id/edit', component: CategoriaFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CategoriaRoutingModule { }
