import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Lore } from 'app/models/PJ1';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.scss'],
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
export class LoreComponent implements OnChanges {

  @Input() lore: Lore;
  @Output() isLoreToogleToParent: EventEmitter<boolean> = new EventEmitter();
  isTextToogle = false;
  isTitleHover =  false;
  l: string[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {    for (const key in this.lore) {
      if (Object.prototype.hasOwnProperty.call(this.lore, key)) {
        const element = this.lore[key];
        this.l.push(element);
      }
    }
  }
  toogleText() {
    this.isTextToogle = !this.isTextToogle;
  }
  sendLoreToogleToParent() {
    this.isLoreToogleToParent.emit(this.isTextToogle);
  }
}
