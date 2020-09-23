export interface PJ1 {
  pj1: Pj1[];
}
export interface PJ {
  pj: Pj[];
}
export interface Pj {
  global?: Global;
  biographie?: Biographie;
  titres?: Titres;
  modificateurs?: Modificateurs;
  'compétences'?: Comptences;
  talents?: Talents;
  lore?: Lore;
}


export interface Pj1 {
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
}

export interface Talents {
  'Déguisement': Dguisement;
  'Usages de la cour': Dguisement;
  Psychologie: Dguisement;
  'Apaiser ou enflammer les cœurs': Dguisement;
  'Prêtre du pain': Effet4;
  Vengeance: Vengeance;
  'Pouvoir de résurrection': Effet4;
  'Utilisation de la magie'?: UtilisationDeLaMagie;
}

export interface UtilisationDeLaMagie {
  points: string;
  cartes: Cartes;
  'Magicien de la nuit': string;
}

export interface Cartes {
  effets: Effet4[];
}

export interface Vengeance {
  points1: string;
  effet: string;
  'Modification des chances de réussite': string;
  points2: string;
}

export interface Dguisement {
  points: string;
  effet: string;
}

export interface Comptences {
  Perception?: number;
  'Discrétion'?: number;
  'Mentir, convaincre'?: number;
  'Lire et écrire'?: number;
  Voler?: number;
  Artisanat?: number;
  Intimider?: number;
  'Réflexe'?: number;
  'Courir, sauter'?: number;
  Intimidation?: number;
  Soigner?: number;
  'Serrures et pièges'?: number;
  Reflexes?: number;
  Réflexes?: number;
}

export interface Modificateurs {
  'Découverte d\'Irem': DcouverteDIrem;
  'Bénédiction/Malédiction du Dieu ennemi': BndictionMaldictionDuDieuEnnemi;
  'Serment sur le fleuve des morts': SermentSurLeFleuveDesMorts;
  'Découverte des 3 Cellas': DcouverteDes3Cellas;
  'Vision du rituel de l\'Arbre-cœur': VisionDuRituelDeLArbrecur;
  'Découverte de l\'orbe du roi des rois': DcouverteDeLorbeDuRoiDesRois;
}

export interface DcouverteDeLorbeDuRoiDesRois {
  description: string;
  effets: Effet4[];
}

export interface Effet4 {
  effet: string;
  effet1?: string;
  effet2?: string;
  effet3?: string;
  effet4?: string;
  effet5?: string;
  effet6?: string;
  effet7?: string;
  Carreaux?: string;
  Cœurs?: string;
  Piques?: string;
  Trèfles?: string;
  description1?: string;
  description2?: string;
  description3?: string;
}

export interface VisionDuRituelDeLArbrecur {
  description: string;
  effets: Effet3[];
}

export interface Effet3 {
  effet1?: string;
  'effet2:'?: string;
}

export interface DcouverteDes3Cellas {
  description1: string;
  effets: Effet[];
}

export interface SermentSurLeFleuveDesMorts {
  description1: string;
  description2: string;
}

export interface BndictionMaldictionDuDieuEnnemi {
  description: string;
  effets: Effet2[];
}

export interface Effet2 {
  effet1?: string;
  effet2?: string;
  effet4?: string;
  effet3?: DcouverteDIrem;
}

export interface DcouverteDIrem {
  description: string;
  effets: Effet[];
}

export interface Effet {
  effet1: string;
}

export interface Titres {
  'Prêtre du pain': string;
  'Descendant de l\'ordre des protecteurs': string;
  'Protecteur d\'Altabianca': string;
  'Chevalier d\'Aria': string;
  'Protecteur du Pays Môn': string;
  'Plus gros mangeur de Varna': string;
}

export interface Biographie {
  partie1: string;
  partie2: string;
  partie3: string;
  partie4: string;
  partie5: string;
}

export interface Global {
  nom: string;
  surnoms: Surnoms;
  joueur: string;
  classe: string;
  origine: string;
  espece: string;
  age: number;
  caracteristiques: Caracteristiques;
  'compétences'?: Comptences;
  talents?: Talents;
  joueurIrl: string;
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
  Armure: number;
}

export interface Surnoms {
  surnom1: string;
  surnom2: string;
}
