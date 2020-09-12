import { Component, OnChanges, Input } from '@angular/core';
import { Gographies } from 'src/app/models/Maps';

@Component({
  selector: 'app-geographie',
  templateUrl: './geographie.component.html',
  styleUrls: ['./geographie.component.scss']
})
export class GeographieComponent implements OnChanges {

  @Input() geo: Gographies[];
  g: string[] = [];

  constructor() { }

  ngOnChanges(): void {
    if(this.geo && this.geo[0]){
      for (const key in this.geo[0]) {
        if (Object.prototype.hasOwnProperty.call(this.geo[0], key)) {
          const element = this.geo[0][key];
          if(typeof element !== "object" && element !== ""){
            this.g.push(key);
            this.g.push(element);
          }
        }
      }
    }
    console.log(this.g);
  }

}
