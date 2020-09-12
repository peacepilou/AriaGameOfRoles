import { Component, OnChanges, Input } from '@angular/core';
import { Culture, Calendrier, Cultes } from 'src/app/models/Maps';
import { Lore } from 'src/app/models/PJ1';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnChanges {

  @Input() cultures: Culture[][];
  description: string;
  calendrier: Calendrier[];
  cultes: Cultes;

  constructor() { }

  ngOnChanges(): void {
    if(this.cultures[0]){
      for (const key in this.cultures[0]) {
        if (Object.prototype.hasOwnProperty.call(this.cultures[0], key)) {
          const element = this.cultures[0][key];
          if(element.Calendrier){
            this.calendrier = element.Calendrier;
          }
          if(element.Cultes){
            this.cultes = element.Cultes;
          }
          if(element.description){
            this.description = element.description;
          }
        }
      }
    }
  }

}
