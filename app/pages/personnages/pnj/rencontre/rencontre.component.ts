import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-rencontre',
  templateUrl: './rencontre.component.html',
  styleUrls: ['./rencontre.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({opacity: 0}),
            animate('0.3s ease-out',
                    style({opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1}),
            animate('0.1s ease-in',
                    style({opacity: 0}))
          ]
        )
      ]
    ),
  ]
})
export class RencontreComponent implements OnChanges {
  @Input() rencontres: any;
  r: string[] = [];
  isTextToogle = false;
  isTitleHover = false;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.r);

    for (const key in this.rencontres[0]) {
      if (Object.prototype.hasOwnProperty.call(this.rencontres[0], key)) {
        const element = this.rencontres[0][key];
        if (typeof element === 'object') {
          for (const k in element) {
            const e = element[k];
            if (typeof e === 'object') {
              for (const c in e) {
                this.r.push(c + ' : ' + e[c]);
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
  toogleText() {
    this.isTextToogle = !this.isTextToogle;
  }
}
