import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Titres } from 'app/models/PJ1';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-titres',
  templateUrl: './titres.component.html',
  styleUrls: ['./titres.component.scss'],
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
    )
  ]
})
export class TitresComponent implements OnChanges {
  @Input() titres: Titres;
  @Output() isTitleToogleToParent: EventEmitter<boolean> = new EventEmitter();
  b: string[] = [];
  t: string[] = [];
  isTextToogle = false;
  isTitleHover = false;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    for (const key in this.titres) {
      if (Object.prototype.hasOwnProperty.call(this.titres, key)) {
        const element = this.titres[key];
        this.t.push(key + ' : ' + element);
      }
    }
  }
  toogleText() {
    this.isTextToogle = !this.isTextToogle;
  }
  sendTitleToogleToParent() {
    this.isTitleToogleToParent.emit(this.isTextToogle);
  }
}
