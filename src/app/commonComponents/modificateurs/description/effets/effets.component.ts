import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-effets',
  templateUrl: './effets.component.html',
  styleUrls: ['./effets.component.scss']
})
export class EffetsComponent implements OnChanges {
  @Input() f;
  e: string[] = []
  constructor() { }

  ngOnChanges(): void {
    for (const key in this.f) {
      if (Object.prototype.hasOwnProperty.call(this.f, key)) {
        const element = this.f[key];
        if (typeof element === 'object') {
          for (const k in element) {
            if(typeof element[k] === 'object')
            this.e.push(element[k])
          }
        }
      }
    }
  }
}
