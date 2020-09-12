import { Component, OnChanges, Input } from '@angular/core';
import { ContesEtLgendes } from 'src/app/models/Maps';

@Component({
  selector: 'app-contes',
  templateUrl: './contes.component.html',
  styleUrls: ['./contes.component.scss']
})
export class ContesComponent implements OnChanges {

  @Input() contes: ContesEtLgendes;
  c: string[] = [];

  constructor() { }

  ngOnChanges(): void {
    for (const key in this.contes) {
      if (Object.prototype.hasOwnProperty.call(this.contes, key)) {
        const element = this.contes[key];
        this.c.push(key);
        this.c.push(element);
      }
    }
  }

}
