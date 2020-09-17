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
  pjProverbList: any[];
  pjNameList: string[];
  pjPositionList: string[];
  pjImageList: string[];
  // arrays for pnj
  pnjNameList: string[];
  pnjPositionList: string[];
  pnjImageList: string[];
  constructor(private service: PlayerService)
   {
     this.pjProverbList = [
      ['Hola mon brave !', 'J\'aimerais bénir vos miches', 'A partir de maintenant, c\'est pain pour tous, chaque jour. Et le Lundi, c\'est supplément confiture', 'Oh vous savez avocat... avant d\'être une profession c\'est une vocation !', ],
      ['Jetez-le dans la rivière. Je répète, jetez-le dans la rivière...', 'Sinon une potion d\'Ingramus et c\'est réglé...', 'Vous n\'avez jamais connu telle substance. On appelle ça "le doigt"', 'J\'ai 99 à ma compétence, c\'est impossible que je rate'],
      ['Oh génial, encore un concours ! Bon bah je m\'inscris hein...', 'Encore du loot ? Ca ne dérange personne que je le prenne j\'imagine ?', 'proverbe Keitra', 'proverbe Keitra'],
      ['On aura peu joui, mais on aura bien ri', 'Je suis un homme de... susbtances', 'Y\'a pas moyen que cette fois-ci je ne loot rien. Ca fait 2 ans que je me trimballe en boubou-fraise', 'Pour sceller mon amitié avec ce chameau, j\'échange mon pierçing au téton avec le sien']
     ],
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
