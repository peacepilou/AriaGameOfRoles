export interface PJ4 {
  pj4: Pj4[];
}

export interface Pj4 {
  global?: Global;
  biographie?: Biographie;
  titres?: Titres;
  modificateurs?: Modificateurs;
  'compétences'?: Comptences;
  talents?: Talents;
  'Repertoire de potions'?: RepertoireDePotion[];
  lore?: Lore;
}

export interface Lore {
  lore1: string;
}

export interface RepertoireDePotion {
  description?: string;
  potion1?: Potion1;
  potion2?: Potion1;
  potion3?: Potion1;
  potion4?: Potion1;
  potion5?: Potion1;
  potion6?: Potion1;
  potion7?: Potion1;
  potion8?: Potion1;
  potion9?: Potion1;
  potion10?: Potion1;
  potion11?: Potion1;
  potion12?: Potion1;
}

export interface Potion1 {
  nom: string;
  'chances de fabrication': string;
  effet: string;
}

export interface Talents {
  'Fabriquer une potion connue': FabriquerUnePotionConnue;
  'Déterminer une substance': FabriquerUnePotionConnue;
  'Mélanger des trucs au hasard': MlangerDesTrucsAuHasard;
  Artisanat: FabriquerUnePotionConnue;
  'Magie de la mort': MagieDeLaMort;
  'Utilisation de la magie': UtilisationDeLaMagie;
  'Pouvoir de résurrection': PouvoirDeRsurrection;
}

export interface PouvoirDeRsurrection {
  effets: Effet[];
}

export interface UtilisationDeLaMagie {
  effets: Effet2[];
}

export interface MagieDeLaMort {
  effets: Effet4[];
}

export interface Effet4 {
  effet1?: string;
  effet2?: string;
  effet3?: string;
}

export interface MlangerDesTrucsAuHasard {
  points: string;
}

export interface FabriquerUnePotionConnue {
  points: string;
  effets: Effet2[];
}

export interface Comptences {
  Perception: number;
  'Discrétion': number;
  'Mentir, convaincre': number;
  'Lire et écrire': number;
  'Courir, sauter': number;
  Intimidation: number;
  Voler: number;
  Soigner: number;
  'Serrures et pièges': number;
  Reflexes: number;
  Artisanat: number;
}

export interface Modificateurs {
  'Malédiction du dieu Ennemi': MaldictionDuDieuEnnemi;
  'La main du Corbeau noir': LaMainDuCorbeauNoir;
  'Gros coup de pied au cul': GrosCoupDePiedAuCul;
  'Marquage au fer chaud sur le visage': GrosCoupDePiedAuCul;
  'Découverte d\'Irem': LaMainDuCorbeauNoir;
  'Bénédiction d\'Ina': MaldictionDuDieuEnnemi;
  'Main gauche sectionnée': LaMainDuCorbeauNoir;
  'Regain d\'honneur à l\'académie d\'alchimie de Kniga': RegainDhonneurLacadmieDachimieDeKniga;
  Empoisonnement: MaldictionDuDieuEnnemi;
  'Découverte des 3 Cellas': LaMainDuCorbeauNoir;
  'Changement de sexe': LaMainDuCorbeauNoir;
  'Vision du rituel de l\'Arbre-cœur': MaldictionDuDieuEnnemi;
  'Mutations de l\'eau du Parcoul': MaldictionDuDieuEnnemi;
  'Découverte de l\'orbe du roi des rois': LaMainDuCorbeauNoir;
}

export interface RegainDhonneurLacadmieDachimieDeKniga {
  description: string;
  effets: Effet3[];
}

export interface Effet3 {
  Dommages?: string;
  effet1?: string;
  effet2?: string;
}

export interface GrosCoupDePiedAuCul {
  description1: string;
  effets: Effet2[];
}

export interface LaMainDuCorbeauNoir {
  description: string;
  effets: Effet2[];
}

export interface Effet2 {
  effet1: string;
}

export interface MaldictionDuDieuEnnemi {
  description: string;
  effets: Effet[];
}

export interface Effet {
  effet1?: string;
  effet2?: string;
}

export interface Titres {
  'Protecteur d\'Altabianca': string;
  'Esclave d\'Aqabah': string;
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
  partie6: string;
  partie7: string;
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
  Dommages: number;
  Armure: number;
}

export interface Surnoms {
  surnom1: string;
}
