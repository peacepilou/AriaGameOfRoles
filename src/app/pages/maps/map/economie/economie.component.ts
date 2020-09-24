import { Component, OnChanges, Input } from '@angular/core';
import { Economie, SystmeMontaire } from 'app/models/Maps';

@Component({
  selector: 'app-economie',
  templateUrl: './economie.component.html',
  styleUrls: ['./economie.component.scss']
})
export class EconomieComponent implements OnChanges {

  @Input() eco: Economie;
  ecos: string[] = [];
  sysm: SystmeMontaire[];

  constructor() { }

  ngOnChanges(): void {
    if (this.eco){
      for (const key in this.eco) {
        if (Object.prototype.hasOwnProperty.call(this.eco, key)) {
          const element = this.eco[key];
          if (typeof element === 'string'){
            this.ecos.push(element);
          }
        }
      }
      if (this.eco['Système monétaire']){
        this.sysm = this.eco['Système monétaire'];
      }
    }
  }
}
