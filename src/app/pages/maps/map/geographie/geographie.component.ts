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
  v: string[] = [];
  i: string[] = [];
  c: string[] = [];

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

    this.varna(this.geo);
    this.contree(this.geo);
    this.irem(this.geo);
  }

  varna(geo: Gographies[]){
    if(geo && geo[0]){
    for (const key in geo[0]) {
      if (Object.prototype.hasOwnProperty.call(geo[0], key)) {
        if(geo[0]["Cité de Varna"]){
          for (const k in geo[0]["Cité de Varna"]) {
            if (Object.prototype.hasOwnProperty.call(geo[0]["Cité de Varna"], k)) {
              const element = geo[0]["Cité de Varna"][k];
              this.v.push(k)
              this.v.push(element)
            }
          }
          }
        }
      }
    }
  }
  irem(geo: Gographies[]){
    if(geo && geo[0] && geo[0].Irem){
      this.keyvaluesIrem(geo[0].Irem)
    }
  }
  contree(geo: Gographies[]){
    if(geo && geo[0] && geo[0].Contrées && geo[0].Contrées[0]){
      this.keyvaluesContree(geo[0].Contrées[0])
    }
  }

  keyvaluesContree(element: object){
    for (const k in element) {
      if (Object.prototype.hasOwnProperty.call(element, k)) {
        const e = element[k];
        if(k != 'description' && k != 'citation'){this.c.push(k);}
        if(typeof e !== 'object'){this.c.push(e);}
        else{
          this.keyvaluesContree(e)
        }
      }
    }
  }

  keyvaluesIrem(element: object){
    for (const k in element) {
      if (Object.prototype.hasOwnProperty.call(element, k)) {
        const e = element[k];
        if(k != 'description' && k != 'lore'){this.i.push(k);}
        if(typeof e !== 'object'){this.i.push(e);}
        else{
          this.keyvaluesIrem(e)
        }
      }
    }
  }

}


