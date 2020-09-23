import { Component, OnChanges, Input } from '@angular/core';
import { UtilisationDeLaMagie } from 'src/app/models/PJ1';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-magie',
  templateUrl: './magie.component.html',
  styleUrls: ['./magie.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({opacity: 0}),
            animate('0.2s ease-out',
                    style({opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1}),
            animate('0.2s ease-in',
                    style({opacity: 0}))
          ]
        )
      ]
    )
  ]
})
export class MagieComponent implements OnChanges {

  @Input() magie: UtilisationDeLaMagie;

  magicien: string;
  points: string;
  cartes: string[] = [];
  keys: string[] = [];
  values: string[] = [];

  isTextToogle = false;
  isTitleHover = false;

  constructor() { }

  ngOnChanges(): void {
    if (this.magie && this.magie.cartes && this.magie.cartes.effets) {
      this.magicien = this.magie["Magicien de la nuit"];
      this.points = this.magie.points;
      for (const key in this.magie.cartes.effets) {
        if (Object.prototype.hasOwnProperty.call(this.magie.cartes.effets, key)) {
          const element = this.magie.cartes.effets[key];
          if (element.Carreaux || element.Cœurs || element.Piques || element.Trèfles) {
            for (const k in element) {
              if (Object.prototype.hasOwnProperty.call(element, k)) {
                const lmt = element[k];
                this.cartes.push(k + ' : ' + lmt)
              }
            }
          }
          else if (element.description1 || element.description2 || element.description3) {
            for (const k in element) {
              if (Object.prototype.hasOwnProperty.call(element, k)) {
                const lmt = element[k];
                this.values.push(lmt)
              }
            }
          }
        }
      }
    }
    console.log('cartes : ' + this.cartes);
    console.log('values : ' +  this.values);
    console.log(this.magicien);
  }

  toogleText() {
    this.isTextToogle = !this.isTextToogle;
  }
}
