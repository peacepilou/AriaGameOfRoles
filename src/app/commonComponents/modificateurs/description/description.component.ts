import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnChanges {

  @Input() n;
  f: string[] = []
  h: string[] = []
  constructor() { }

  ngOnChanges(): void {
    for (const k in this.n) {
      if (typeof this.n[k] === 'object') {
        for (const e in this.n[k]) {
          this.f.push(this.n[k][e])
        }
      } else {
        this.h.push(this.n[k])
      }
    }
    console.log(this.h);

  }

}
