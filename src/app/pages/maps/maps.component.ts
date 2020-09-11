import { Component, OnInit } from '@angular/core';
import { MapsService } from 'src/app/shared/maps.service';
import { Maps, Carte, lieu } from 'src/app/models/Maps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  maps: Maps;
  cartes: Carte[];
  elements: lieu[] = [];
  keys = [];

  constructor(private service: MapsService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.maps = data,
      this.cartes = this.maps.cartes;
      this.lieux(this.cartes[0])
    })
  }

  lieux(object: any){
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        this.keys.push(key)
        const element = object[key][0];
        this.elements.push (element)
      }
    }
  }
}
