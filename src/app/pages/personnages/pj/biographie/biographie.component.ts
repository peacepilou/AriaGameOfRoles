import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Biographie } from 'src/app/models/PJ1';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-biographie',
  templateUrl: './biographie.component.html',
  styleUrls: ['./biographie.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({opacity: 0}),
            animate('0.1s ease-out',
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
export class BiographieComponent implements OnChanges {
  @Input() biographie: Biographie;
  b: string[] = [];
  isTextToogle = false;
  isTitleHover = false;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const key in this.biographie) {
      if (Object.prototype.hasOwnProperty.call(this.biographie, key)) {
        const element = this.biographie[key];
        this.b.push(element);
      }
    }
  }
  toogleText() {
    this.isTextToogle = !this.isTextToogle;
  }
}
