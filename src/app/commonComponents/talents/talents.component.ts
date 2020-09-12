import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
  constructor() { }

  ngOnChanges(): void {
    for (const key in this.talents) {
      if (Object.prototype.hasOwnProperty.call(this.talents, key)) {
        const element = this.talents[key];
        this.m.push(key);
        if (typeof element === 'object') {
          for (const k in element) {
            if (Object.prototype.hasOwnProperty.call(this.talents, key)) {
              const e = element[k];
              if (typeof e !== 'object') {
                this.m.push(e);
              }
            }
          }
        }
      }
    }
  }

}
