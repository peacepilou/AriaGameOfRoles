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
  // arrays for pj
  pjNameList: string[];
  pjPositionList: string[];
  pjImageList: string[];
  // arrays for pnj
  pnjNameList: string[];
  pnjPositionList: string[];
  pnjImageList: string[];
  constructor(private service: PlayerService)
   {
     this.pjImageList = [
      'assets/compagnie-creance.png',
      'assets/compagnie-creance.png',
      'assets/compagnie-creance.png',
      'assets/compagnie-creance.png'
      ],
    this.pjNameList = [
      'Atlan',
      'Clodomir',
      'Niklas',
      'Keitra'
      ],
    this.pjPositionList = [
      '-20',
      '0',
      '-20',
      '0'
      ],
      this.pnjImageList = [
        'assets/compagnie-creance.png',
        'assets/compagnie-creance.png',
        'assets/compagnie-creance.png',
        'assets/compagnie-creance.png',
        'assets/compagnie-creance.png',
        'assets/compagnie-creance.png',
        'assets/compagnie-creance.png',
        'assets/compagnie-creance.png',
        'assets/compagnie-creance.png'
        ],
      this.pnjNameList = [
        'Jotun',
        'Julia',
        'Musa Al Hadi',
        'Kaheena d\'Ashanul',
        'Amory Tréherne',
        'Melanda',
        'Olympia',
        'Shazam',
        'Vlamidir'
        ],
      this.pnjPositionList = [
        '0',
        '10',
        '0',
        '10',
        '0',
        '10',
        '0',
        '10',
        '0'
        ];
    }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.playersJson = data,
      this.personnages = this.playersJson.personnages;
      this.pjs = this.personnages[0]['personnages joueurs'];

      this.pj = this.personnages[0]['personnages joueurs'][0].pj;

      this.pnjs = this.personnages[1]['personnages non-joueurs'];
      this.pnj = this.personnages[1]['personnages non-joueurs'][0].pnj;
    });
  }
}
