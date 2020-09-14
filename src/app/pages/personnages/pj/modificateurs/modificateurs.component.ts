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
  isTextToogle = false;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const key in this.modificateurs) {
      if (Object.prototype.hasOwnProperty.call(this.modificateurs, key)) {
        const element = this.modificateurs[key];
        this.m.push(key);
        if (typeof element === 'object') {
          for (const k in element) {
            if (Object.prototype.hasOwnProperty.call(this.modificateurs, key)) {
              const e = element[k];
              if (typeof e !== 'object') {
                this.m.push(e);
              }
              else if (typeof e === 'object') {
                for (const c in e) {
                  const f = e[c];
                  if (typeof f === 'object') {
                    for (const l in f) {
                      this.m.push(f[l]);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  toogleText() {
    this.isTextToogle = !this.isTextToogle;
  }
}
