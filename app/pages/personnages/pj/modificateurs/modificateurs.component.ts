import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Modificateurs, descriptionEffets } from 'src/app/models/PJ1';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-modificateurs',
  templateUrl: './modificateurs.component.html',
  styleUrls: ['./modificateurs.component.scss'],
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
export class ModificateursComponent implements OnChanges {

  @Output() isModifiersToogleToParent: EventEmitter<boolean> = new EventEmitter();

  @Input() modificateurs: Modificateurs;

  m: any[] = [];
  n: string[] = [];

  isTextToogle = false;
  isTitleHover = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    for (const key in this.modificateurs) {
      let t: string = '';

      if (Object.prototype.hasOwnProperty.call(this.modificateurs, key)) {
        let descriptionEffets: descriptionEffets = this.modificateurs[key];

        if(descriptionEffets.description != undefined) {t += descriptionEffets.description + '. '  };
        if(descriptionEffets.description1 != undefined) {t  +=  descriptionEffets.description1 + '. '};
        if(descriptionEffets.description2 != undefined) {t  += descriptionEffets.description2 + '. '};
        this.m.push(key + ' : ' + t);

        for (let i = 0; i < descriptionEffets.effets.length; i++) {
          const element = descriptionEffets.effets[i];

          let s: string = '';
          for (const k in element) {
            if (Object.prototype.hasOwnProperty.call(element, k)) {
              const e = element[k];
              s += e + '. '
            }
          }
          this.n.push(s)
        }
      }
    }
  }

  toogleText() {
    this.isTextToogle = !this.isTextToogle;
  }
  sendModifiersToogleToParent() {
    this.isModifiersToogleToParent.emit(this.isTextToogle);
  }
}
