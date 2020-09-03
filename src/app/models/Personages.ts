import { Pj1, PJ } from './PJ1';
import { Pj2 } from './PJ2';
import { Pj3 } from './PJ3';
import { Pj4 } from './PJ4';
import { PersonnagesNonjoueur } from './PNJ';

export interface Personnages {
  personnages: Personnage[];
}

export interface Personnage {
  'personnages joueurs': PersonnagesJoueur[];
  'personnages non-joueurs': PersonnagesNonjoueur[];
}

export interface PersonnagesJoueur {
  pj?: PJ[];
  pj1?: Pj1[];
  pj2?: Pj2[];
  pj3?: Pj3[];
  pj4?: Pj4[];
}
