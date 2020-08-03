import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/player.service';
import { Personnages } from 'src/app/models/Campagnes';

@Component({
  selector: 'app-pj',
  templateUrl: './pj.component.html',
  styleUrls: ['./pj.component.scss']
})
export class PjComponent implements OnInit {
  json: Personnages;

  constructor(private service: PlayerService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {this.json = data, console.log(this.json)})
  }

}
