export interface PNJ {
  'personnages non-joueurs': PersonnagesNonjoueur[];
}

export interface PersonnagesNonjoueur {
  pnj1?: Pnj1[];
  pnj2?: Pnj2[];
  pnj3?: Pnj3[];
  pnj4?: Pnj3[];
  pnj5?: Pnj5[];
  pnj6?: Pnj5[];
  pnj7?: Pnj3[];
  pnj8?: Pnj8[];
  pnj9?: Pnj9[];
  pnj10?: Pnj10[];
}

export interface Pnj10 {
  nom: string;
  surnoms: Surnoms;
  biographie: string;
  partie1: Partie1;
  partie2: Partie1;
  partie3: Partie1;
  partie4: Partie1;
  partie5: Partie1;
}

export interface Partie1 {
  nom: string;
  description: string;
  lieu: string;
}

export interface Surnoms {
  surnom1: string;
  surnom2: string;
}

export interface Pnj9 {
  nom: string;
  biographie: string;
  'première rencontre': PremireRencontre3;
  'seconde rencontre': SecondeRencontre2;
  'troisième rencontre': PremireRencontre;
  'quatrième rencontre': PremireRencontre;
}

export interface SecondeRencontre2 {
  description1: string;
  choix1: string;
  choix2: string;
  choix3: string;
  description2: string;
  lieu: string;
}

export interface PremireRencontre3 {
  description: string;
  citation: string;
  lieu: string;
}

export interface Pnj8 {
  nom: string;
  biographie: string;
  'première rencontre': PremireRencontre2;
  'seconde rencontre': PremireRencontre;
}

export interface PremireRencontre2 {
  description: string;
  'enquete partie 1': EnquetePartie1;
  'enquete partie 2': string;
  'enquete partie 3': string;
  'enquete partie 4': string;
  'enquete partie 5': string;
  'enquete partie 6': string;
  'enquete partie 7': string;
  lieu: string;
}

export interface EnquetePartie1 {
  nom: string;
  decouverte1: string;
  decouverte2: string;
  decouverte3: string;
}

export interface Pnj5 {
  nom: string;
  biographie: string;
  'première rencontre': PremireRencontre;
  'seconde rencontre': PremireRencontre;
  'troisième rencontre': PremireRencontre;
}

export interface Pnj3 {
  nom: string;
  biographie: string;
  'première rencontre': PremireRencontre;
  'seconde rencontre': PremireRencontre;
  'troisième rencontre': PremireRencontre;
  'quatrième rencontre': PremireRencontre;
}

export interface Pnj2 {
  nom: string;
  biographie: string;
  'première rencontre': PremireRencontre;
  'seconde rencontre': SecondeRencontre;
  'troisième rencontre': PremireRencontre;
  'quatrième rencontre': PremireRencontre;
}

export interface SecondeRencontre {
  biographie: string;
  lieu: string;
}

export interface Pnj1 {
  nom: string;
  biographie: string;
  'première rencontre': PremireRencontre;
  'seconde rencontre': PremireRencontre;
  'troisième rencontre': PremireRencontre;
  'quatrième rencontre': PremireRencontre;
  'cinquième rencontre': PremireRencontre;
  'sixième rencontre': PremireRencontre;
  'septième rencontre': PremireRencontre;
}

export interface PremireRencontre {
  description: string;
  lieu: string;
}
