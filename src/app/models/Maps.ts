export interface Maps {
  cartes: Carte[];
}

export interface Carte {
  Aria: lieu[];
  'Pays Môn': lieu[];
  'Pays Blanc': lieu[];
  'Mer de la Morsure': lieu[];
  Aqabah: lieu[];
  Kniga: lieu[];
  'Terres dorées': lieu[];
  'Cité empire de Varna': lieu[];
  Amasya: lieu[];
  Kohest: lieu[];
  Osmanlie: lieu[];
  Haliaslanlar: lieu[];
}

export interface lieu {
  Economie?: Economie;

  description?: string;
  description1?: string;
  description2?: string;
  descriptn?: Description;
  dscription?: Description2;

  Ports?: string;
  citation?: string;

  'Géographies'?: Gographies[];
  'géographie'?: Gographie;

  'énigme1'?: string;
  'énigme2'?: string;
  'énigme3'?: string;

  Politiques?: Politique[];

  Cultures?: Culture[];

  Proverbes?: Proverbes;
  'Contes et légendes'?: ContesEtLgendes;

  lore?: string;
  lre?: Lore;

  'Une cité mythique et mystique'?: string;
  'Le cœur d\'un conflit'?: string;
  'Points d\'intérêt'?: PointsDintrt;

}


export interface Description2 {
  description1: string;
  description2: string;
  description3: string;
  description4: string;
}


export interface Gographies {
  Mawarannarhr?: string;
  Biga?: string;
  Sannakale?: string;
  Galibulu?: string;
  'Géographie générale'?: string;
  'La Vallée des Larmes'?: string;
  'Péninsule de Galibolu'?: string;
  'Les Champs Sanguinaires'?: string;
  'Les bois du Bolayir'?: string;
  'Péninsule de Pansalimani'?: string;
  'Imrali Adasi'?: string;
  'Nord de l\'Osmanlie'?: string;
  'Delta du Kuthaya'?: string;
  'Le port automatique'?: string;
  'Le palais du prince'?: string;
  'Le cristal ardent'?: string;
  'L\'Agora'?: string;
  'La cité d\'Aqabah'?: string;
  'Rub al Kali'?: string;
  'Le désert noir'?: string;
  'La cité d\'Irem'?: string;
  'Île de l\'abandon'?: string;
  'Archipel du couchant'?: string;
  'La griffe'?: string;
  Ashanul?: string;
  Axum?: string;
  Espeyran?: string;
  Altabianca?: string;
  Altanegra?: string;
  Esperanza?: string;
  Nanda?: string;
  Sungai?: string;
  Irra?: string;
  Ka?: string;
  Irem?: Irem;
  'Contrées'?: Contre[];
  'Cité de Varna'?: CitDeVarna;
}


export interface Description {
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  description6: string;
  description7: string;
}

export interface CitDeVarna {
  'Académie des cinquantes': string;
  'Quartiers Marchands': string;
  'Place de la Salamandre': string;
  'Place de la Magie': string;
  'Quartier religieux': string;
}



export interface Immigration {
  description: string;
  'règle1': string;
  'règle2': string;
  'règle3': string;
  'règle4': string;
  'règle5': string;
}

export interface  Lore {
  lore1: string;
}

export interface ContesEtLgendes {
  'La princesse crépuscule et les 3 épreuves': string;
}

export interface Proverbes {
  proverbe1: string;
  proverbe2: string;
  proverbe3: string;
  proverbe4: string;
  proverbe5: string;
  proverbe6: string;
  proverbe7: string;
  proverbe8: string;
  proverbe9: string;
  proverbe10: string;
  proverbe11: string;
  proverbe12: string;
}


export interface Irem {
  description: string;
  'Une cité mythique et mystique': string;
  'Le cœur d\'un conflit': string;
  'Points d\'intérêt': PointsDintrt;
  lore: string;
}

export interface PointsDintrt {
  'Musée des merveilles': MuseDesMerveilles;
  'Chapelle aux quatres dieux': string;
}

export interface MuseDesMerveilles {
  description: string;
  objets: Objets;
}

export interface Objets {
  'Un tableau extra-dimensionnel': string;
  'Une potion lumineuse': string;
  'Le Codex Jocus': string;
  'La harpe d\'or du sommeil': string;
  'La poule mécanique de Kniga': string;
  'Fragments d\'étoile': string;
}

export interface Culture {
  description: string;
  lore: string;
  Cultes?: Cultes;
  Calendrier?: Calendrier[];
}

export interface Calendrier {
  jours: Jours;
  mois: string[];
}

export interface Jours {
  Ikta: string;
  Qalila: string;
  Dagana: string;
  Enlia: string;
  Inana: string;
  Invisibile: string;
  Exilus: string;
}

export interface Cultes {
  description?: string;
  'Le Roi des Dieux/Le Dieu exilé'?: string;
  'Le Roi des Rois'?: string;
  'Le Dieu ennemi/l\'Ennemi'?: string;
  'La Déesse Ina'?: string;
  'La Déesse Joyper'?: string;
  'Le Dieu poisson/Gobie'?: string;
  'Le Dieu invisible'?: string;
  'Le Dieu Dagan'?: string;
  'Le Dieu sans nom/Dieu primordial'?: string;
  'La Déesse Inanna'?: string;
  'Le Dieu Udor'?: string;
  'Le Dieu Qalil'?: string;
  'Le Dieu du vent et des brumes'?: string;
  'Le Dieu poisson'?: string;
  'Le Dieu Dragon'?: string;
  'Le Dieu Atlach Nacha'?: string;
  'La Déesse Ergané'?: string;
  'Le Passeur des Âmes'?: string;
  'Dieu dragon'?: string;
  'Dieu poisson'?: string;
  'Dieu de la sagesse'?: string;
  'Dieu du pain'?: string;
  'Dieu du vent'?: string;
  'Dieu chat'?: string;
  Qalil?: string;
}

export interface Politique {
  'Dynastie d\'Aria'?: DynastieDAria[];
  'Dynastie de Julia'?: string;
  'Systèmes légaux'?: SystmesLgaux;
  'Rel extérieures'?: RelationsExtrieures;
  'Relations extérieures': string;
  description: string;
  Douane: string;
  Immigration: Immigration;
  'Châtiments corporels': string;
  'Vente d\'esclaves': string;
}

export interface RelationsExtrieures {
  description: string;
  'L\'Osmanlie': string;
  'Le sultanat d\'Aqabah': string;
  Altabianca: string;
  Kniga: string;
  Varna: string;
}

export interface SystmesLgaux{
  'Chatiments corporels': ChatimentsCorporels;
  'Peine de mort': string;
  Duel: string;
  'L\'Ordre des miséricordieux': string;
  'Vente d\'esclaves': string;
  'La loi pain et configure': string;
  'La loi \'Legalize Kanabi\'': string;
}

export interface ChatimentsCorporels {
  description: string;
  exemple1: string;
  exemple2: string;
  aboli1: string;
  aboli2: string;
}

export interface DynastieDAria {
  'Roi des Rois': string;
  'Roi Blaise d\'Aria': string;
  'Prince Estienne d\'Aria': string;
  'Reine Aurianne d\'Aria': string;
}

export interface Economie {
  description?: string;
  description1?: string;
  description2?: string;
  Exportations?: string;
  'pièce1'?: string;
  'pièce2'?: string;
  'Système monétaire'?: SystmeMontaire[];
}

export interface SystmeMontaire {
  description?: string;
  'pièce1'?: string;
  'pièce2'?: string;
  'pièce3'?: string;
  description1?: string;
  description2?: string;
}

export interface Contre {
  'Le fief du Rideau': string;
  'Fief de Malbouzon': string;
  'Le fief d\'Aria': string;
  'Fief des Tempêtes': string;
  'Le fief de la Route de l\'Ouest': string;
  Sauvagny: Sauvagny;
}

export interface Sauvagny {
  description: string;
  citation: string;
  'géographie': Gographie;
}

export interface Gographie {
  'Monastère du Dieu exilé': MonastreDuDieuExil;
  'Tombe d\'un Roi inconnu': string;
  'Cabane de Xa': string;
}

export interface MonastreDuDieuExil {
  description: string;
  }
