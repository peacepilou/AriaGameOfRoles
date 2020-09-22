import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Global, Caracteristiques, Surnoms } from 'src/app/models/PJ1';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({opacity: 0}),
            animate('0.6s ease-out',
                    style({opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1}),
            animate('0.6s ease-in',
                    style({opacity: 0}))
          ]
        )
      ]
    )
  ]

})
export class GlobalComponent implements OnChanges {
  @Input() global: Global;
  competences;
  talents;
  caracteristiques: Caracteristiques;
  surnoms: Surnoms;

  hidecaracteristics = false;
  hidecompetences = false;
  hidetalents = false;

  constructor() {  }

  ngOnChanges(changes: SimpleChanges): void {
    this.caracteristiques = this.global.caracteristiques;
    this.surnoms = this.global.surnoms;
    this.competences = this.global.compétences;
    this.talents = this.global.talents;
  }


  togglecaracteristics(){
    this.hidecaracteristics = !this.hidecaracteristics
    this.hidecompetences = false;
    this.hidetalents = false;
  }

    togglecompetences(){
    this.hidecompetences = !this.hidecompetences
    this.hidecaracteristics = false;
    this.hidetalents = false;
  }

    toggletalents(){
    this.hidetalents = !this.hidetalents
    this.hidecaracteristics = false;
    this.hidecompetences = false;
  }

}
