import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PjComponent } from './pages/personnages/pj/pj.component';
import { GlobalComponent } from './pages/personnages/pj/global/global.component';
import { BiographieComponent } from './pages/personnages/pj/biographie/biographie.component';
import { TitresComponent } from './pages/personnages/pj/titres/titres.component';
import { ModificateursComponent } from './pages/personnages/pj/modificateurs/modificateurs.component';
import { CompetencesComponent } from './pages/personnages/pj/competences/competences.component';
import { TalentsComponent } from './pages/personnages/pj/talents/talents.component';
import { LoreComponent } from './pages/personnages/pj/lore/lore.component';
import { RepertoirePotionComponent } from './pages/personnages/pj/repertoire-potion/repertoire-potion.component';
import { PnjComponent } from './pages/personnages/pnj/pnj.component';
import { RencontreComponent } from './pages/personnages/pj/rencontre/rencontre.component';
import { PersonnagesComponent } from './pages/personnages/personnages.component';
import { SurnomComponent } from './pages/personnages/pj/global/surnom/surnom.component';
import { CaracteristiquesComponent } from './pages/personnages/pj/global/caracteristiques/caracteristiques.component';

@NgModule({
  declarations: [
    AppComponent,
    PjComponent,
    GlobalComponent,
    BiographieComponent,
    TitresComponent,
    ModificateursComponent,
    CompetencesComponent,
    TalentsComponent,
    LoreComponent,
    RepertoirePotionComponent,
    PnjComponent,
    RencontreComponent,
    PersonnagesComponent,
    SurnomComponent,
    CaracteristiquesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
