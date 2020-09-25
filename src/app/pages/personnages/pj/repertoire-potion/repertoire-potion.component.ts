import { Component, SimpleChanges, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { RepertoireDePotion } from 'src/app/models/PJ4';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-repertoire-potion',
  templateUrl: './repertoire-potion.component.html',
  styleUrls: ['./repertoire-potion.component.scss'],
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
export class RepertoirePotionComponent implements OnChanges {

  @Input() repertoire: RepertoireDePotion;
  @Output() isRepositoryToogleToParent: EventEmitter<boolean> = new EventEmitter();
  p = [];
  isTextToogle = false;
  isTitleHover = false;
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
  toogleText() {
    this.isTextToogle = !this.isTextToogle;
  }
  sendRepositoryToogleToParent() {
    this.isRepositoryToogleToParent.emit(this.isTextToogle);
  }
}
