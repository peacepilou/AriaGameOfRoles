import { Component, OnChanges, Input } from '@angular/core';
import { Politique } from 'src/app/models/Maps';

@Component({
  selector: 'app-politique',
  templateUrl: './politique.component.html',
  styleUrls: ['./politique.component.scss']
})
export class PolitiqueComponent implements OnChanges {

  @Input() politiques: Politique[];
  values: string[] = [];
  constructor() { }

  ngOnChanges(): void {
    for (const key in this.politiques[0]) {
      if (Object.prototype.hasOwnProperty.call(this.politiques[0], key)) {
        const element = this.politiques[0][key];
        // this.values.push(key);
        for (const k in element) {
          if (Object.prototype.hasOwnProperty.call(element, k)) {
            const e = element[k];
            if(k != '0'){
            this.values.push(k)}
            if(typeof e !== 'object' && e !== '0'){
              this.values.push(e);
            }
            else{
              this.keyvalues(e)
            }
          }
        }
      }
    }
  }
  keyvalues(element: object){
    for (const k in element) {
      if (Object.prototype.hasOwnProperty.call(element, k)) {
        const e = element[k];
        if(k != '0'){this.values.push(k);}
        if(typeof e !== 'object'){this.values.push(e);}
        else{
          this.keyvalues(e)
        }
      }
    }
  }


}
