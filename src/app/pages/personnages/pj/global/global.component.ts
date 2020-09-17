import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Global, Caracteristiques, Surnoms, Comptences, Talents } from 'src/app/models/PJ1';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnChanges {
  @Input() global: Global;
  competences;
  talents;
  caracteristiques: Caracteristiques;
  surnoms: Surnoms;

  constructor() {  }

  ngOnChanges(changes: SimpleChanges): void {
    this.caracteristiques = this.global.caracteristiques;
    this.surnoms = this.global.surnoms;
    this.competences = this.global.compétences;
    this.talents = this.global.talents;
  }
}
