import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnagesComponent } from './pages/personnages/personnages.component';
import { MapsComponent } from './pages/maps/maps.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';


const routes: Routes = [
  {path: 'personnages', component: PersonnagesComponent},
  {path: 'cartes', component: MapsComponent},
  {path: 'épisodes', component: EpisodesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
