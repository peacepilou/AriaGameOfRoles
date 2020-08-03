import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PjComponent } from './pages/pj/pj.component';


const routes: Routes = [
  {path: '', component: PjComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
