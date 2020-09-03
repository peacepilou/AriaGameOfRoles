import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Lore } from 'src/app/models/PJ1';

@Component({
  selector: 'app-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.scss']
})
export class LoreComponent implements OnChanges {

  @Input() lore: Lore;
  l:string[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {    for (const key in this.lore) {
      if (Object.prototype.hasOwnProperty.call(this.lore, key)) {
        const element = this.lore[key];
        this.l.push(element)
      }
    }
  }
}
