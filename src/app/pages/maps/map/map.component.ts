import { Component, OnChanges, Input } from '@angular/core';
import { lieu, Politique, Culture, Proverbes, ContesEtLgendes, Economie, Gographies } from 'src/app/models/Maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
  @Input() element: lieu;
  description: string[] = [];
  ports: string;
  lore: string;
  politiques: Politique[][] = [];
  cultures: Culture[][] = [];
  proverbes: Proverbes;
  contes: ContesEtLgendes;
  eco: Economie;
  geo: Gographies[];

  constructor() { }

  ngOnChanges(): void {
    if(this.element.description){
    this.description.push(this.element.description);
    }
    if(this.element.descriptn){
      for (const key in this.element.descriptn) {
        if (Object.prototype.hasOwnProperty.call(this.element.descriptn, key)) {
          this.description.push(this.element.descriptn[key]);
        }
      }
    }
    if(typeof this.element.Ports === "string"){
      this.ports = this.element.Ports;
    }
    if(typeof this.element.Politiques !== undefined){
      this.politiques.push(this.element.Politiques);
    }
    if(typeof this.element.Cultures !== undefined){
      this.cultures.push(this.element.Cultures);
    }
    if(this.element.lore){
      this.lore = this.element.lore;
    }
    if(this.element.Proverbes){
      this.proverbes = this.element.Proverbes;
    }
    if(this.element["Contes et légendes"]){
      this.contes = this.element["Contes et légendes"];
    }
    if(this.element.Economie){
      this.eco = this.element.Economie;
    }
    if(this.element.Géographies){
      this.geo = this.element.Géographies;
    }
  }
}
