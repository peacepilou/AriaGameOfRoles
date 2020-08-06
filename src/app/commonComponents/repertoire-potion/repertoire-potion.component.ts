import { Component, SimpleChanges, OnChanges, Input } from '@angular/core';
import { RepertoireDePotion } from 'src/app/models/PJ4';

@Component({
  selector: 'app-repertoire-potion',
  templateUrl: './repertoire-potion.component.html',
  styleUrls: ['./repertoire-potion.component.scss']
})
export class RepertoirePotionComponent implements OnChanges {

  @Input() repertoire: RepertoireDePotion;
  p = [];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.repertoire != undefined) {
      for (const key in this.repertoire) {
        if (Object.prototype.hasOwnProperty.call(this.repertoire, key)) {
          const element = this.repertoire[key];
          if (typeof element === 'object') {
            for (const k in element) {
              if (Object.prototype.hasOwnProperty.call(this.repertoire, key)) {
                const e = element[k];
                if (typeof e !== 'object') {
                  this.p.push(e);
                }
                else if (typeof e === 'object') {
                  for (const c in e) {
                    this.p.push(c + ' : ' + e[c]);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
