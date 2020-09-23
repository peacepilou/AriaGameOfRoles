import { Component, Input, OnChanges } from '@angular/core';
import { Talents } from 'src/app/models/PJ1';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss']
})
export class TalentsComponent implements OnChanges {
  @Input() talents: Talents;

  m: string[] = [];
  n: string[] = [];

  mouseOver = false;

  constructor() { }

  ngOnChanges(): void {
    for (const key in this.talents) {
      if (Object.prototype.hasOwnProperty.call(this.talents, key)) {
        const element = this.talents[key];
        if (element.points !== undefined && element != this.talents["Utilisation de la magie"]) {
          this.m.push(key + ": " + element.points)
        } else if(element != this.talents["Utilisation de la magie"]) { this.m.push(key) }
        if (element.effets) {
          this.effects(element)
        }
      }
    }
  }

  effects(element) {
    let s: string = '';
    for (const k in element.effets) {
      if (Object.prototype.hasOwnProperty.call(element.effets, k)) {
        const e = element.effets[k];
        if (typeof e === 'object') {
          for (const i in e) {
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              const lmt = e[i];
              if (lmt !== "") {
                s += lmt + '. ';
              }
            }
          }
        }
        else {
          this.n.push(e)
        }
      }
    }
    this.n.push(s)
  }



}
