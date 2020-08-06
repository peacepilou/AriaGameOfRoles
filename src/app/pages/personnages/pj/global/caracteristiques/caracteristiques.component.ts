import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-caracteristiques',
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['./caracteristiques.component.scss']
})
export class CaracteristiquesComponent implements OnChanges {

  @Input() caracteristiques;
  c: string[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const key in this.caracteristiques) {
      if (Object.prototype.hasOwnProperty.call(this.caracteristiques, key)) {
        const element = this.caracteristiques[key];
        this.c.push(key + ' : ' + element)
      }
    }
  }

}
