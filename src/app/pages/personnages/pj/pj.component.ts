import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PlayerService } from 'src/app/shared/player.service';
import { PersonnagesJoueur } from 'src/app/models/Personages';
import { Global, Biographie, Titres, Modificateurs, Talents, Lore, Comptences } from 'src/app/models/PJ1';

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

  constructor(private service: PlayerService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.global = this.pj["pj"][0]["global"]
    this.biographie = this.pj["pj"][0]["biographie"]
    this.titres = this.pj["pj"][0]["titres"]
    this.modificateurs = this.pj["pj"][0]["modificateurs"]
    this.competences = this.pj["pj"][0]["compétences"]
    this.talents = this.pj["pj"][0]["talents"]
    this.lore = this.pj["pj"][0]["lore"]
  }
}
