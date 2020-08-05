import { Component, OnInit } from '@angular/core';
import { Personnages, Personnage, PersonnagesJoueur } from 'src/app/models/Personages';
import { PlayerService } from 'src/app/shared/player.service';
import { PJ } from 'src/app/models/PJ1';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.scss']
})
export class PersonnagesComponent implements OnInit {
  playersJson: Personnages;
  personnages: Personnage[];
  pjs: PersonnagesJoueur[];
  pj: PJ[];

  constructor(private service: PlayerService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.playersJson = data,
      this.personnages = this.playersJson.personnages;
      this.pjs = this.personnages[0]["personnages joueurs"];
      this.pj = this.personnages[0]["personnages joueurs"][0]["pj"];
    });
  }
}
