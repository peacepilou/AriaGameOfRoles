import { Component, OnChanges, Input } from '@angular/core';
import { PersonnagesNonjoueur, Pnj } from 'app/models/PNJ';
import { Surnoms } from 'app/models/PJ1';

@Component({
  selector: 'app-pnj',
  templateUrl: './pnj.component.html',
  styleUrls: ['./pnj.component.scss']
})
export class PnjComponent implements OnChanges {

  @Input() pnj: PersonnagesNonjoueur[];
  @Input() url = '';
  nom: string;
  biographie: string;
  surnoms: Surnoms;
  rencontres: any;
  constructor() { }

  ngOnChanges(): void {

    // tslint:disable-next-line: no-string-literal
    this.nom = this.pnj['pnj'][0]['nom'];
    // tslint:disable-next-line: no-string-literal
    this.biographie = this.pnj['pnj'][0]['biographie'];
    // tslint:disable-next-line: no-string-literal
    if (this.pnj['pnj'][0]['surnoms'] !== undefined) {
      // tslint:disable-next-line: no-string-literal
      this.surnoms = this.pnj['pnj'][0]['surnoms'];
    }
    // tslint:disable-next-line: no-string-literal
    if (this.pnj['pnj'][0]['rencontres'] !== undefined) {
      // tslint:disable-next-line: no-string-literal
      this.rencontres = this.pnj['pnj'][0]['rencontres'];
    }
  }

}
