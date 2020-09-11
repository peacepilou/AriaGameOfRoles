import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnagesComponent } from './pages/personnages/personnages.component';
import { MapsComponent } from './pages/maps/maps.component';


const routes: Routes = [
  // {path: '', component: PersonnagesComponent}
  {path: '', component: MapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
