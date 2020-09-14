import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PlayerService } from 'src/app/shared/player.service';
import { PersonnagesJoueur } from 'src/app/models/Personages';
import { Global, Biographie, Titres, Modificateurs, Lore, Comptences, Caracteristiques, Surnoms, Talents } from 'src/app/models/PJ1';
import { RepertoireDePotion } from 'src/app/models/PJ4';

@Component({
  selector: 'app-pj',
  templateUrl: './pj.component.html',
  styleUrls: ['./pj.component.scss']
})

export class PjComponent implements OnChanges {

  @Input() pj: PersonnagesJoueur[];
  global: Global;
  caracteristiques: Caracteristiques;
  surnoms: Surnoms;
  biographie: Biographie;
  titres: Titres;
  modificateurs: Modificateurs;
  competences: Comptences;
  talents: Talents;
  lore: Lore;
  repertoire: RepertoireDePotion;

  constructor(private service: PlayerService) { }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line: no-string-literal
    this.global = this.pj['pj'][0]['global'];
    this.caracteristiques = this.global.caracteristiques;
    this.surnoms = this.global.surnoms;
    // tslint:disable-next-line: no-string-literal
    this.biographie = this.pj['pj'][1]['biographie'];
    // tslint:disable-next-line: no-string-literal
    this.titres = this.pj['pj'][2]['titres'];
    // tslint:disable-next-line: no-string-literal
    this.modificateurs = this.pj['pj'][3]['modificateurs'];
    // tslint:disable-next-line: no-string-literal
    this.competences = this.pj['pj'][4]['compétences'];
    // tslint:disable-next-line: no-string-literal
    this.talents = this.pj['pj'][5]['talents'];
    // tslint:disable-next-line: no-string-literal
    this.lore = this.pj['pj'][6]['lore'];
    // tslint:disable-next-line: no-string-literal
    if (this.pj['pj'][7] != undefined) {
      // tslint:disable-next-line: no-string-literal
      this.repertoire = this.pj['pj'][7]['Repertoire de potions'];
    }
  }
}
