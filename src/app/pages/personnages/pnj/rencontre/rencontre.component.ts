import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rencontre',
  templateUrl: './rencontre.component.html',
  styleUrls: ['./rencontre.component.scss']
})
export class RencontreComponent implements OnChanges {
  @Input() rencontres: any;
  r: string[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const key in this.rencontres[0]) {
      if (Object.prototype.hasOwnProperty.call(this.rencontres[0], key)) {
        const element = this.rencontres[0][key];
        if (typeof element === 'object') {
          for (const k in element) {
            const e = element[k];
            if (typeof e === 'object') {
              for (const c in e) {
                this.r.push(c + ' : ' + e[c])
              }
            }
            else {
              this.r.push(k + ' : ' + e);
            }
          }
        }
      }
    }
  }
}
