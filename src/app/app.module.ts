import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PjComponent } from './pages/personnages/pj/pj.component';
import { GlobalComponent } from './commonComponents/global/global.component';
import { BiographieComponent } from './commonComponents/biographie/biographie.component';
import { TitresComponent } from './commonComponents/titres/titres.component';
import { ModificateursComponent } from './commonComponents/modificateurs/modificateurs.component';
import { CompetencesComponent } from './commonComponents/competences/competences.component';
import { TalentsComponent } from './commonComponents/talents/talents.component';
import { LoreComponent } from './commonComponents/lore/lore.component';
import { PotionsComponent } from './commonComponents/potions/potions.component';
import { RepertoirePotionComponent } from './commonComponents/repertoire-potion/repertoire-potion.component';
import { PnjComponent } from './pages/personnages/pnj/pnj.component';
import { RencontreComponent } from './commonComponents/rencontre/rencontre.component';
import { PersonnagesComponent } from './pages/personnages/personnages.component';
import { SurnomComponent } from './commonComponents/global/surnom/surnom.component';
import { CaracteristiquesComponent } from './commonComponents/global/caracteristiques/caracteristiques.component';
import { MapsComponent } from './pages/maps/maps.component';
import { DescriptionComponent } from './pages/maps/description/description.component';
import { GeographieComponent } from './pages/maps/geographie/geographie.component';
import { EconomieComponent } from './pages/maps/economie/economie.component';
import { PolitiqueComponent } from './pages/maps/politique/politique.component';
import { CultureComponent } from './pages/maps/culture/culture.component';
import { PortsComponent } from './pages/maps/ports/ports.component';
import { ProverbesComponent } from './pages/maps/proverbes/proverbes.component';
import { ContesComponent } from './pages/maps/contes/contes.component';
import { EnigmesComponent } from './pages/maps/enigmes/enigmes.component';

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
    PotionsComponent,
    RepertoirePotionComponent,
    PnjComponent,
    RencontreComponent,
    PersonnagesComponent,
    SurnomComponent,
    CaracteristiquesComponent,
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
