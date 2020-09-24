import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card-pj',
  templateUrl: './card-pj.component.html',
  styleUrls: ['./card-pj.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({opacity: 0}),
            animate('0.2s ease-out',
                    style({opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1}),
            animate('0.2s ease-in',
                    style({opacity: 0}))
          ]
        )
      ]
    )
  ]

})
export class CardPjComponent implements OnChanges {

  @Input() text = '';
  @Input() url = '';
  @Input() position = '';
  isCardHover = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {


  }

}
