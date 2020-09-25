import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PjComponent } from './pages/personnages/pj/pj.component';
import { GlobalComponent } from './pages/personnages/pj/global/global.component';
import { BiographieComponent } from './pages/personnages/pj/biographie/biographie.component';
import { MagieComponent } from './pages/personnages/pj/magie/magie.component';
import { TitresComponent } from './pages/personnages/pj/titres/titres.component';
import { ModificateursComponent } from './pages/personnages/pj/modificateurs/modificateurs.component';
import { CompetencesComponent } from './pages/personnages/pj/competences/competences.component';
import { TalentsComponent } from './pages/personnages/pj/talents/talents.component';
import { LoreComponent } from './pages/personnages/pj/lore/lore.component';
import { RepertoirePotionComponent } from './pages/personnages/pj/repertoire-potion/repertoire-potion.component';
import { PnjComponent } from './pages/personnages/pnj/pnj.component';
import { RencontreComponent } from './pages/personnages/pnj/rencontre/rencontre.component';
import { PersonnagesComponent } from './pages/personnages/personnages.component';
import { CardPjComponent } from './pages/personnages/pj/card-pj/card-pj.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SurnomComponent } from './pages/personnages/pj/global/surnom/surnom.component';
import { CaracteristiquesComponent } from './pages/personnages/pj/global/caracteristiques/caracteristiques.component';
import { MapsComponent } from './pages/maps/maps.component';
import { DescriptionComponent } from './pages/maps/map/description/description.component';
import { GeographieComponent } from './pages/maps/map/geographie/geographie.component';
import { EconomieComponent } from './pages/maps/map/economie/economie.component';
import { PolitiqueComponent } from './pages/maps/map/politique/politique.component';
import { CultureComponent } from './pages/maps/map/culture/culture.component';
import { PortsComponent } from './pages/maps/map/ports/ports.component';
import { ProverbesComponent } from './pages/maps/map/proverbes/proverbes.component';
import { ContesComponent } from './pages/maps/map/contes/contes.component';
import { EnigmesComponent } from './pages/maps/map/enigmes/enigmes.component';
import { MapComponent } from './pages/maps/map/map.component';
import { CulteComponent } from './pages/maps/map/culture/culte/culte.component';
import { CalendrierComponent } from './pages/maps/map/culture/calendrier/calendrier.component';
import { JourComponent } from './pages/maps/map/culture/calendrier/jour/jour.component';
import { MonnaieComponent } from './pages/maps/map/economie/monnaie/monnaie.component';
import { CardPnjComponent } from './pages/personnages/pnj/card-pnj/card-pnj.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
@NgModule({
  declarations: [
    AppComponent,
    PjComponent,
    GlobalComponent,
    BiographieComponent,
    MagieComponent,
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
    CardPjComponent,
    MapsComponent,
    DescriptionComponent,
    GeographieComponent,
    EconomieComponent,
    PolitiqueComponent,
    CultureComponent,
    PortsComponent,
    ProverbesComponent,
    ContesComponent,
    EnigmesComponent,
    MapComponent,
    CulteComponent,
    CalendrierComponent,
    JourComponent,
    MonnaieComponent,
    CardPnjComponent,
    EpisodesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollPanelModule,
    TableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
