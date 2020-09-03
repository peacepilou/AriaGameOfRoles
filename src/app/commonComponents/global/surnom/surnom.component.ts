import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-surnom',
  templateUrl: './surnom.component.html',
  styleUrls: ['./surnom.component.scss']
})
export class SurnomComponent implements OnChanges {

  @Input() surnoms;
  s: string[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const key in this.surnoms) {
      if (Object.prototype.hasOwnProperty.call(this.surnoms, key)) {
        const element = this.surnoms[key];
        this.s.push(element)
      }
    }
  }

}
