import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Comptences } from 'app/models/PJ1';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnChanges {

  @Input() competences: Comptences;
  c: string[] = [];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    for (const key in this.competences) {
      if (Object.prototype.hasOwnProperty.call(this.competences, key)) {
        const element = this.competences[key];
        this.c.push(key + ' : ' + element);
      }
    }
  }

}
