import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PlayerService } from 'src/app/shared/player.service';
import { PersonnagesJoueur } from 'src/app/models/Personages';
import { Global, Biographie, Titres, Modificateurs, Talents, Lore, Comptences } from 'src/app/models/PJ1';
import { RepertoireDePotion } from 'src/app/models/PJ4';

@Component({
  selector: 'app-pj',
  templateUrl: './pj.component.html',
  styleUrls: ['./pj.component.scss']
})

export class PjComponent implements OnChanges {

  @Input() pj: PersonnagesJoueur[];
  global: Global;
  biographie: Biographie
  titres: Titres
  modificateurs: Modificateurs
  competences: Comptences
  talents: Talents
  lore: Lore
  repertoire: RepertoireDePotion;

  constructor(private service: PlayerService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.global = this.pj["pj"][0]["global"]
    this.biographie = this.pj["pj"][1]["biographie"]
    this.titres = this.pj["pj"][2]["titres"]
    this.modificateurs = this.pj["pj"][3]["modificateurs"]
    this.competences = this.pj["pj"][4]["compétences"]
    this.talents = this.pj["pj"][5]["talents"]
    this.lore = this.pj["pj"][6]["lore"]
    if (this.pj["pj"][7] != undefined) {
      this.repertoire = this.pj["pj"][7]["Repertoire de potions"]
    }
  }
}
