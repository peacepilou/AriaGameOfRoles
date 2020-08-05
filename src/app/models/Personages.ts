import { Pj1 } from './PJ1';
import { Pj2 } from './PJ2';
import { Pj3 } from './PJ3';
import { Pj4 } from './PJ4';

export interface Personnages {
  personnages: Personnage[];
}

export interface Personnage {
  'personnages joueurs': PersonnagesJoueur[];
}

export interface PersonnagesJoueur {
  pj1?: Pj1[];
  pj2?: Pj2[];
  pj3?: Pj3[];
  pj4?: Pj4[];
}
