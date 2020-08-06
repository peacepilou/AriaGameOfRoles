import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Global, Caracteristiques, Surnoms } from 'src/app/models/PJ1';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnChanges {
  @Input() global: Global;
  // g: string[] = [];
  caracteristiques: Caracteristiques;
  surnoms: Surnoms;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.caracteristiques = this.global.caracteristiques;
    this.surnoms = this.global.surnoms;
    // for (const key in this.global) {
      // if (Object.prototype.hasOwnProperty.call(this.global, key)) {
        // const element = this.global[key];
        // this.g.push(key + ' : ' + element)
      // }
    // }
  }
}
