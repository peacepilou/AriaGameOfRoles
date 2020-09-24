import { Component, OnChanges, Input } from '@angular/core';
import { Proverbes } from 'app/models/Maps';

@Component({
  selector: 'app-proverbes',
  templateUrl: './proverbes.component.html',
  styleUrls: ['./proverbes.component.scss']
})
export class ProverbesComponent implements OnChanges {

  @Input() proverbes: Proverbes;
  p: string[] = [];
  constructor() { }

  ngOnChanges(): void {
    for (const key in this.proverbes) {
      if (Object.prototype.hasOwnProperty.call(this.proverbes, key)) {
        const element = this.proverbes[key];
        this.p.push(element);
      }
    }
  }

}
