import { Component, OnChanges, Input } from '@angular/core';
import { PersonnagesNonjoueur, Pnj } from 'src/app/models/PNJ';
import { Surnoms } from 'src/app/models/PJ1';

@Component({
  selector: 'app-pnj',
  templateUrl: './pnj.component.html',
  styleUrls: ['./pnj.component.scss']
})
export class PnjComponent implements OnChanges {

  @Input() pnj: PersonnagesNonjoueur[];
  nom: string;
  biographie: string;
  surnoms: Surnoms;
  rencontres: any;
  constructor() { }

  ngOnChanges(): void {
    this.nom = this.pnj["pnj"][0]["nom"]
    this.biographie = this.pnj["pnj"][0]["biographie"]
    if (this.pnj["pnj"][0]["surnoms"] !== undefined) {
      this.surnoms = this.pnj["pnj"][0]["surnoms"]
    }
    if (this.pnj["pnj"][0]["rencontres"] !== undefined) {
      this.rencontres = this.pnj["pnj"][0]["rencontres"]
    }
  }

}
