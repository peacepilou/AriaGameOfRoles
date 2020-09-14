import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-pj',
  templateUrl: './card-pj.component.html',
  styleUrls: ['./card-pj.component.scss'],

})
export class CardPjComponent implements OnChanges {

  @Input() text = '';
  @Input() position = '';
  isCardHover = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
