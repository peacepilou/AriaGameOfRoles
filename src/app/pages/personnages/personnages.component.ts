import { Component, OnInit } from '@angular/core';
import { Personnages, Personnage, PersonnagesJoueur } from 'src/app/models/Personages';
import { PlayerService } from 'src/app/shared/player.service';
import { PJ } from 'src/app/models/PJ1';
import { PNJ, PersonnagesNonjoueur, Pnj } from 'src/app/models/PNJ';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.scss']
})
export class PersonnagesComponent implements OnInit {
  playersJson: Personnages;
  personnages: Personnage[];
  pjs: PersonnagesJoueur[];
  pnjs: PersonnagesNonjoueur[];
  pj: PJ[];
  pnj: Pnj[];

  constructor(private service: PlayerService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.playersJson = data,
      this.personnages = this.playersJson.personnages;
      this.pjs = this.personnages[0]['personnages joueurs'];

      this.pj = this.personnages[0]['personnages joueurs'][0].pj;
      console.log(this.pjs);

      this.pnjs = this.personnages[1]['personnages non-joueurs'];
      this.pnj = this.personnages[1]['personnages non-joueurs'][0].pnj;
    });
  }
}
