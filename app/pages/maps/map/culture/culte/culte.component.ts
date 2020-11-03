import { Component, OnChanges, Input } from '@angular/core';
import { Cultes } from 'app/models/Maps';

@Component({
  selector: 'app-culte',
  templateUrl: './culte.component.html',
  styleUrls: ['./culte.component.scss']
})
export class CulteComponent implements OnChanges {

  @Input() cultes: Cultes;
  c: string[] = [];
  constructor() { }

  ngOnChanges(): void {
    if (this.cultes){
      for (const key in this.cultes) {
        if (Object.prototype.hasOwnProperty.call(this.cultes, key)) {
          const element = this.cultes[key];
          this.c.push(key);
          this.c.push(element);
        }
      }
    }
  }
}
