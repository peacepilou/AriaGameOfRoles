export interface PJ2 {
  pj2: Pj2[];
}

export interface Pj2 {
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
  'Apprentissage de la magie': ApprentissageDeLaMagie;
  'Utilisation de la magie': UtilisationDeLaMagie;
  'Connaissances des secrets': ApprentissageDeLaMagie;
  'Parler aux animaux': ParlerAuxAnimaux;
  'Maître des échecs': MatreDeschecs;
  Clodowood: Clodowood;
  'Clodométal': Clodomtal;
  'Pouvoir de résurrection': PouvoirDeRsurrection;
}

export interface PouvoirDeRsurrection {
  effet: string;
}

export interface Clodomtal {
  effets: Effet3[];
}

export interface Clodowood {
  effets: Effet5[];
}

export interface Effet5 {
  effet1?: string;
  effet2?: string;
  effet3?: string;
  effet4?: string;
}

export interface MatreDeschecs {
  points: string;
  effet: string;
}

export interface ParlerAuxAnimaux {
  points: string;
  effets: Effet3[];
}

export interface UtilisationDeLaMagie {
  points: string;
  cartes: Cartes;
  'Magicien de la nuit': string;
}

export interface Cartes {
  effets: Effet4[];
}

export interface Effet4 {
  effet1?: string;
  effet2?: string;
  effet3?: string;
  effet4?: string;
  effet5?: string;
  effet6?: string;
  effet7?: string;
}

export interface ApprentissageDeLaMagie {
  points: string;
}

export interface Comptences {
  Perception: number;
  'Discrétion': number;
  'Mentir, convaincre': number;
  'Lire et écrire': number;
  Artisanat: number;
  Intimider: number;
}

export interface Modificateurs {
  'Malédiction d\'Urshanabi': MaldictionDUrshanabi;
  'Marquage au fer chaud sur l\'épaule': MaldictionDUrshanabi;
  'Transfer de l\'âme dans une statue de bois': TransferDeLmeDansUneStatueDeBois;
  'Serment sur le fleuve des morts': TransferDeLmeDansUneStatueDeBois;
  'Découverte d\'Irem': MaldictionDUrshanabi;
  'Pieds sectionnés': MaldictionDUrshanabi;
  'Découverte des 3 Cellas': MaldictionDUrshanabi;
  'Transfer de l\'âme dans un corps de Rhodium': TransferDeLmeDansUnCorpsDeRhodium;
  'Vision du rituel de l\'Arbre-cœur': VisionDuRituelDeLArbrecur;
  'Découverte de l\'orbe du roi des rois': MaldictionDUrshanabi;
}

export interface VisionDuRituelDeLArbrecur {
  'description': string;
  effets: Effet3[];
}

export interface Effet3 {
  effet1?: string;
  effet2?: string;
}

export interface TransferDeLmeDansUnCorpsDeRhodium {
  description: string;
  effets: Effet2[];
}

export interface Effet2 {
  effet1?: string;
  effet2?: string;
  effet6?: string;
  effet3?: string;
  effet4?: string;
  effet5?: string;
}

export interface TransferDeLmeDansUneStatueDeBois {
  description1: string;
  effets: Effet[];
}

export interface MaldictionDUrshanabi {
  description: string;
  effets: Effet[];
}

export interface Effet {
  effet1: string;
}

export interface Titres {
  'Magicien de la nuit': string;
  'Protecteur d\'Altabianca': string;
  'Chevalier d\'Aria': string;
  'Maître de l\'Académie noire': string;
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
  age: string;
  caracteristiques: Caracteristiques;
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
  surnom2: string;
}
