import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Biographie } from 'src/app/models/PJ1';

@Component({
  selector: 'app-biographie',
  templateUrl: './biographie.component.html',
  styleUrls: ['./biographie.component.scss']
})
export class BiographieComponent implements OnChanges {
  @Input() biographie: Biographie
  b: string[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const key in this.biographie) {
      if (Object.prototype.hasOwnProperty.call(this.biographie, key)) {
        const element = this.biographie[key];
        this.b.push(element)
      }
    }
  }
}
