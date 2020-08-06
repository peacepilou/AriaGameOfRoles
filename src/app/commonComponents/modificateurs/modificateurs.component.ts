import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Modificateurs } from 'src/app/models/PJ1';

@Component({
  selector: 'app-modificateurs',
  templateUrl: './modificateurs.component.html',
  styleUrls: ['./modificateurs.component.scss']
})
export class ModificateursComponent implements OnChanges {
  @Input() modificateurs: Modificateurs;
  m: string[] = [];
  n: string[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const key in this.modificateurs) {
      if (Object.prototype.hasOwnProperty.call(this.modificateurs, key)) {
        const element = this.modificateurs[key];
        this.m.push(key)
        if (typeof element === 'object') {
          for (const k in element) {
            this.n.push(element[k])
          }
        }
      }
    }
  }
}
