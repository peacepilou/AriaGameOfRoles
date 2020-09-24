import { Component, OnChanges, Input } from '@angular/core';
import { SystmeMontaire } from 'app/models/Maps';

@Component({
  selector: 'app-monnaie',
  templateUrl: './monnaie.component.html',
  styleUrls: ['./monnaie.component.scss']
})
export class MonnaieComponent implements OnChanges {

  @Input() sysm: SystmeMontaire[];
  sys: string[] = [];

  constructor() { }

  ngOnChanges(): void {
    if (this.sysm){
      for (const key in this.sysm[0]) {
        if (Object.prototype.hasOwnProperty.call(this.sysm[0], key)) {
          const element = this.sysm[0][key];
          this.sys.push(element);
        }
      }
    }
  }

}
