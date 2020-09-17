export interface PJ3 {
  pj3: Pj3[];
}

export interface Pj3 {
  global?: Global;
  biographie?: Biographie;
  titres?: Titres;
  modificateurs?: Modificateurs;
  'compétences'?: Comptences;
  talents?: Talents;
  lore?: Lore;
}

export interface Lore {
  lore1: string;
  lore2: string;
}

export interface Talents {
  Vengeance: Vengeance;
  'Fatalité': Fatalit;
  'Parler aux animaux': Fatalit;
  'Apprentissage de la magie': Fatalit;
  'Souffle du dragon': Fatalit;
  'Pouvoir de résurrection': PouvoirDeRsurrection;
}

export interface PouvoirDeRsurrection {
  effets: Effet[];
}

export interface Fatalit {
  points: string;
  effets: Effet2[];
}

export interface Vengeance {
  points: string;
}

export interface Comptences {
  Perception: number;
  'Discrétion': number;
  'Mentir, convaincre': number;
  'Lire et écrire': number;
  'Réflexe': number;
}

export interface Modificateurs {
  'Serment sur le fleuve des morts': SermentSurLeFleuveDesMorts;
  'Malédiction du dieu Qalil': MaldictionDuDieuQalil;
  'Marquage au fer chaud sur l’œil droit': MarquageAuFerChaudSurLilDroit;
  'Découverte d\'Irem': MaldictionDuDieuQalil;
  'Bénédiction du Dieu invisible': MaldictionDuDieuQalil;
  'Découverte des 3 Cellas': MaldictionDuDieuQalil;
  'Tue Xa, la sorcière terrible du Kohest': MaldictionDuDieuQalil;
  'Vision du rituel de l\'Arbre-cœur': SermentSurLeFleuveDesMorts;
  'Découverte de l\'orbe du roi des rois': MaldictionDuDieuQalil;
}

export interface MarquageAuFerChaudSurLilDroit {
  description1: string;
  effets: Effet[];
}

export interface MaldictionDuDieuQalil {
  description: string;
  effets: Effet2[];
}

export interface Effet2 {
  effet1: string;
}

export interface SermentSurLeFleuveDesMorts {
  description: string;
  effets: Effet[];
}

export interface Effet {
  effet1?: string;
  effet2?: string;
}

export interface Titres {
  'Guilde des poissonniers': string;
  'Protectrice d\'Altabianca': string;
  'Esclave d\'Aqabah': string;
  'Chevalier d\'Aria': string;
  'Protecteur du Pays Môn': string;
  'Plus grosse mangeuse de Varna': string;
}

export interface Biographie {
  partie1: string;
  partie2: string;
  partie3: string;
}

export interface Global {
  nom: string;
  surnoms: Surnoms;
  joueur: string;
  classe: string;
  origine: string;
  espece: string;
  age: string;
  caracteristiques: Caracteristiques;
  'compétences'?: Comptences;
  talents?: Talents;
}

export interface Caracteristiques {
  PV: number;
  Force: number;
  'Dextérite': number;
  Endurance: number;
  Charisme: number;
  'Combat rapproché': number;
  'Combat à distance': number;
  'Compétence sociale': number;
  Dommages: string;
  Armure: string;
}

export interface Surnoms {
  surnom1: string;
}
