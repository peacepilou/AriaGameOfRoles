import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Titres } from 'src/app/models/PJ1';

@Component({
  selector: 'app-titres',
  templateUrl: './titres.component.html',
  styleUrls: ['./titres.component.scss']
})
export class TitresComponent implements OnChanges {
  @Input() titres: Titres
  t: string[] = [];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    for (const key in this.titres) {
      if (Object.prototype.hasOwnProperty.call(this.titres, key)) {
        const element = this.titres[key];
        this.t.push(key + ' : ' + element)
      }
    }
  }
}
