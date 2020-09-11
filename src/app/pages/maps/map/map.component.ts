import { Component, OnChanges, Input } from '@angular/core';
import { lieu } from 'src/app/models/Maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
  @Input() element: lieu;
  description: string;
  ports: string;
  politique: string;

  constructor() { }

  ngOnChanges(): void {
    if(typeof this.element.description === "string"){
    this.description = this.element.description;
  }
  if(typeof this.element.Ports === "string"){
    this.ports = this.element.Ports;
  }
  if(typeof this.element.Politique !== undefined){
    // this.politique = this.element.Politique;
  }
  console.log(this.element);
  }
}
