import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card-pnj',
  templateUrl: './card-pnj.component.html',
  styleUrls: ['./card-pnj.component.scss'],
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
export class CardPnjComponent implements OnInit {

  @Input() text = '';
  @Input() url = '';
  @Input() position = '';
  isCardHover = false;

  constructor() { }

  ngOnInit(): void {
  }

}
