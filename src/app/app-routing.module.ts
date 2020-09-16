import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnagesComponent } from './pages/personnages/personnages.component';
import { MapsComponent } from './pages/maps/maps.component';


const routes: Routes = [
<<<<<<< HEAD
  {path: '', component: PersonnagesComponent}
  // {path: '', component: MapsComponent}
=======
  // {path: '', component: PersonnagesComponent}
  {path: '', component: MapsComponent}
>>>>>>> ab3e58b5ffb30d91fa57924a3b96a7fdc56bf091
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
