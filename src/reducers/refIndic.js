export default() => {
  return {
  A: {
    id: "A",
    description: "Aléas",
    niveau: 3,
    acronyme: "AL",
    nom: "AL",
    service: "http://"
  },
  A1: {
    id: "A1",
    composante: "AL",
    description: "Erosion",
    niveau: 2,
    acronyme: "ERO",
    nom: "ERO",
    service: "http://"
  },
  A101: {
    id: "A101",
    composante: "AL",
    description: "Distance érodée par an par 100m linéaires",
    niveau: 1,
    acronyme: "DIST",
    nom: "Distance",
    service: "http://",
    thematique: "ERO"
  },
  A102: {
    id: "A102",
    composante: "AL",
    description: "Surface érodée par an par 100m linéaires",
    niveau: 1,
    acronyme: "SURF",
    nom: "Surface",
    service: "http://",
    thematique: "ERO"
  },
  A103: {
    id: "A103",
    composante: "AL",
    description: "Volume érodé par an par 100m linéaires",
    niveau: 1,
    acronyme: "VOL",
    nom: "Volume",
    service: "http://",
    thematique: "ERO"
  },
  A2: {
    id: "A2",
    composante: "AL",
    description: "Submersion",
    niveau: 2,
    acronyme: "SUB",
    nom: "SUB",
    service: "http://"
  },
  A201: {
    id: "A201",
    composante: "AL",
    description: "Hauteur de submersion",
    niveau: 1,
    acronyme: "HAUT",
    nom: "Hauteur",
    service: "http://",
    thematique: "SUB"
  },
  A202: {
    id: "A202",
    composante: "AL",
    description: "Linéaire exposé aux paquets de mer et aux écoulements",
    niveau: 1,
    acronyme: "PAQ",
    nom: "Paquets de mer",
    service: "http://",
    thematique: "SUB"
  },
  A3: {
    id: "A3",
    composante: "AL",
    description: "Migration dunaire",
    niveau: 2,
    acronyme: "MIGR",
    nom: "MIGR",
    service: "http://"
  },
  A301: {
    id: "A301",
    composante: "AL",
    description: "Vitesse de migration dunaire",
    niveau: 1,
    acronyme: "VIT",
    nom: "Vitesse",
    service: "http://",
    thematique: "MIGR"
  },
  E: {
    id: "E",
    description: "Enjeux",
    niveau: 3,
    acronyme: "EN",
    nom: "EN",
    service: "http://"
  },
  E1: {
    id: "E1",
    composante: "EN",
    description: "Humains",
    niveau: 2,
    acronyme: "HUM",
    nom: "HUM",
    service: "http://"
  },
  E101: {
    id: "E101",
    composante: "EN",
    description: "Nombre d'habitants",
    niveau: 1,
    acronyme: "POP",
    nom: "Population",
    service: "http://",
    thematique: "HUM"
  },
  E102: {
    id: "E102",
    composante: "EN",
    description: "Nombre de logements",
    niveau: 1,
    acronyme: "BATI",
    nom: "Logements",
    service: "http://",
    thematique: "HUM"
  },
  E103: {
    id: "E103",
    composante: "EN",
    description: "Capacité d'accueil des Etablissements Recevant du Public",
    niveau: 1,
    acronyme: "ERP",
    nom: "Capacité d'accueil",
    service: "http://",
    thematique: "HUM"
  },
  E104: {
    id: "E104",
    composante: "EN",
    description: "Nombre de personnes de moins de 10 ou de plus de plus de 65 ans",
    niveau: 1,
    acronyme: "PERVUL-NB",
    nom: "Population vulnérable (nombre)",
    service: "http://",
    thematique: "HUM"
  },
  E105: {
    id: "E105",
    composante: "EN",
    description: "Pourcentage de personnes de moins de 10 ou de plus de plus de 65 ans",
    niveau: 1,
    acronyme: "PERVUL-PCT",
    nom: "Population vulnérable (%)",
    service: "http://",
    thematique: "HUM"
  },
  E106: {
    id: "E106",
    composante: "EN",
    description: "Nombre de ménages à bas revenu",
    niveau: 1,
    acronyme: "BAREV-NB",
    nom: "Population pauvre (nombre)",
    service: "http://",
    thematique: "HUM"
  },
  E107: {
    id: "E107",
    composante: "EN",
    description: "Part des ménages à bas revenu",
    niveau: 1,
    acronyme: "BAREV-PCT",
    nom: "Population pauvre (%)",
    service: "http://",
    thematique: "HUM"
  },
  E108: {
    id: "E108",
    composante: "EN",
    description: "Part des résidences secondaires",
    niveau: 1,
    acronyme: "SECOND",
    nom: "Population temporaire",
    service: "http://",
    thematique: "HUM"
  },
  E109: {
    id: "E109",
    composante: "EN",
    description: "Capacité d’hébergement touristique",
    niveau: 1,
    acronyme: "TOURIST",
    nom: "Tourisme",
    service: "http://",
    thematique: "HUM"
  },
  E304: {
    id: "E304",
    composante: "EN",
    description: "Localisation du bâti résidentiel sans étage refuge",
    niveau: 1,
    acronyme: "REFUG",
    nom: "Logements à risque",
    service: "http://",
    thematique: "STR"
  },
  E2: {
    id: "E2",
    composante: "EN",
    description: "Economiques",
    niveau: 2,
    acronyme: "ECO",
    nom: "ECO",
    service: "http://"
  },
  E201: {
    id: "E201",
    composante: "EN",
    description: "Nombre de travailleurs",
    niveau: 1,
    acronyme: "TRAV",
    nom: "Emploi",
    service: "http://",
    thematique: "ECO"
  },
  E202: {
    id: "E202",
    composante: "EN",
    description: "Valeur immobilière moyenne (m²)",
    niveau: 1,
    acronyme: "VIMMO",
    nom: "Immobilier",
    service: "http://",
    thematique: "ECO"
  },
  E203: {
    id: "E203",
    composante: "EN",
    description: "Diversité des activités",
    niveau: 1,
    acronyme: "DIV",
    nom: "Résilience économique",
    service: "http://",
    thematique: "ECO"
  },
  E204: {
    id: "E204",
    composante: "EN",
    description: "Taux de fonction touristique (lits touristiques / habitants)",
    niveau: 1,
    acronyme: "TOUR-TX",
    nom: "Tourisme",
    service: "http://",
    thematique: "ECO"
  },
  E3: {
    id: "E3",
    composante: "EN",
    description: "Structurels",
    niveau: 2,
    acronyme: "STR",
    nom: "STR",
    service: "http://"
  },
  E301: {
    id: "E301",
    composante: "EN",
    description: "Localisation des établissements industriels à risque",
    niveau: 1,
    acronyme: "INDRISQ",
    nom: "Suraccident",
    service: "http://",
    thematique: "STR"
  },
  E302: {
    id: "E302",
    composante: "EN",
    description: "Présence/Nombre de points sensibles",
    niveau: 1,
    acronyme: "NEVRAL",
    nom: "Sensiblité du réseau",
    service: "http://",
    thematique: "STR"
  },
  E303: {
    id: "E303",
    composante: "EN",
    description: "Part du linéaire côtier artificialisé",
    niveau: 1,
    acronyme: "DIG",
    nom: "Artificialisation",
    service: "http://",
    thematique: "STR"
  },
  G: {
    id: "G",
    description: "Gestion",
    niveau: 3,
    acronyme: "GE",
    nom: "GE",
    service: "http://"
  },
  G1: {
    id: "G1",
    composante: "GE",
    description: "Locale",
    niveau: 2,
    acronyme: "LOC",
    nom: "LOC",
    service: "http://"
  },
  G101: {
    id: "G101",
    composante: "GE",
    description: "Démarche locale de gestion des risques",
    niveau: 1,
    acronyme: "STRATE",
    nom: "Démarche locale",
    service: "http://",
    thematique: "LOC"
  },
  G102: {
    id: "G102",
    composante: "GE",
    description: "Etat de la stratégie locale (relocalisation)",
    niveau: 1,
    acronyme: "RELOC",
    nom: "Stratégie locale",
    service: "http://",
    thematique: "LOC"
  },
  G103: {
    id: "G103",
    composante: "GE",
    description: "Actions dans chaque axe du PAPI",
    niveau: 1,
    acronyme: "PAPI1",
    nom: "Actions",
    service: "http://",
    thematique: "LOC"
  },
  G104: {
    id: "G104",
    composante: "GE",
    description: "Mise en œuvre des actions du PAPI",
    niveau: 1,
    acronyme: "PAPI2",
    nom: "Mise en œuvre",
    service: "http://",
    thematique: "LOC"
  },
  G105: {
    id: "G105",
    composante: "GE",
    description: "Intégration différents acteurs de la démarche locale",
    niveau: 1,
    acronyme: "ACTEUR",
    nom: "Intégration des acteurs",
    service: "http://",
    thematique: "LOC"
  },
  G106: {
    id: "G106",
    composante: "GE",
    description: "Investissement humain sur les risques côtiers",
    niveau: 1,
    acronyme: "HUM",
    nom: "Investissement humain",
    service: "http://",
    thematique: "LOC"
  },
  G107: {
    id: "G107",
    composante: "GE",
    description: "Intégration extraterritoriale",
    niveau: 1,
    acronyme: "EXTRA",
    nom: "Intégration extraterritoriale",
    service: "http://",
    thematique: "LOC"
  },
  G108: {
    id: "G108",
    composante: "GE",
    description: "Publications scientifiques sur les risques côtiers",
    niveau: 1,
    acronyme: "PUBLI",
    nom: "Publications scientifiques",
    service: "http://",
    thematique: "LOC"
  },
  G2: {
    id: "G2",
    composante: "GE",
    description: "Prévention",
    niveau: 2,
    acronyme: "PREV",
    nom: "PREV",
    service: "http://"
  },
  G201: {
    id: "G201",
    composante: "GE",
    description: "Etat du PPRL",
    niveau: 1,
    acronyme: "PPRL",
    nom: "PPRL",
    service: "http://",
    thematique: "PREV"
  },
  G202: {
    id: "G202",
    composante: "GE",
    description: "Contraintes de constructibilité en zone d’aléas",
    niveau: 1,
    acronyme: "URBA",
    nom: "Urbanisme",
    service: "http://",
    thematique: "PREV"
  },
  G3: {
    id: "G3",
    composante: "GE",
    description: "Trait de côte",
    niveau: 2,
    acronyme: "TDC",
    nom: "TDC",
    service: "http://"
  },
  G301: {
    id: "G301",
    composante: "GE",
    description: "Mise en place de la compétence",
    niveau: 1,
    acronyme: "GEMAPI1",
    nom: "Compétence GEMAPI",
    service: "http://",
    thematique: "TDC"
  },
  G302: {
    id: "G302",
    composante: "GE",
    description: "Etat des ouvrages",
    niveau: 1,
    acronyme: "GEMAPI2",
    nom: "Etat des ouvrages",
    service: "http://",
    thematique: "TDC"
  },
  G4: {
    id: "G4",
    composante: "GE",
    description: "Gestion de crise",
    niveau: 2,
    acronyme: "CRISE",
    nom: "CRISE",
    service: "http://"
  },
  G401: {
    id: "G401",
    composante: "GE",
    description: "Mise à jour du PCS",
    niveau: 1,
    acronyme: "PCS",
    nom: "Plan Communal de Sauvegarde",
    service: "http://",
    thematique: "CRISE"
  },
  G402: {
    id: "G402",
    composante: "GE",
    description: "Intégration du SDIS dans le PCS",
    niveau: 1,
    acronyme: "SDIS",
    nom: "Intégration",
    service: "http://",
    thematique: "CRISE"
  },
  G403: {
    id: "G403",
    composante: "GE",
    description: "Mode d’alerte de la population",
    niveau: 1,
    acronyme: "ALERTE",
    nom: "Alerte",
    service: "http://",
    thematique: "CRISE"
  },
  G5: {
    id: "G5",
    composante: "GE",
    description: "Sensibilisation",
    niveau: 2,
    acronyme: "SEN",
    nom: "SEN",
    service: "http://"
  },
  G501: {
    id: "G501",
    composante: "GE",
    description: "Repères inondation et de recul du trait de côte",
    niveau: 1,
    acronyme: "REP",
    nom: "Repères",
    service: "http://",
    thematique: "SEN"
  },
  G502: {
    id: "G502",
    composante: "GE",
    description: "Présence d’associations sur les risques côtiers",
    niveau: 1,
    acronyme: "ASSO",
    nom: "Association",
    service: "http://",
    thematique: "SEN"
  },
  G503: {
    id: "G503",
    composante: "GE",
    description: "Evènements de sensibilisation dans les établissements scolaires",
    niveau: 1,
    acronyme: "SCOL",
    nom: "Scolaires",
    service: "http://",
    thematique: "SEN"
  },
  G504: {
    id: "G504",
    composante: "GE",
    description: "Modes de diffusion du DICRIM ",
    niveau: 1,
    acronyme: "DICRIM1",
    nom: "Diffusion",
    service: "http://",
    thematique: "SEN"
  },
  G505: {
    id: "G505",
    composante: "GE",
    description: "Analyse pédagogique du DICRIM",
    niveau: 1,
    acronyme: "DICRIM2",
    nom: "Pédagogie",
    service: "http://",
    thematique: "SEN"
  },
  R: {
    id: "R",
    description: "Représentations",
    niveau: 3,
    acronyme: "RE",
    nom: "RE",
    service: "http://"
  },
  R1: {
    id: "R1",
    composante: "RE",
    description: "",
    niveau: 2,
    acronyme: "",
    nom: "",
    service: "http://"
  },
  R101: {
    id: "R101",
    composante: "RE",
    description: "Vie associative en lien avec les risques côtiers",
    niveau: 1,
    acronyme: "ASSORIS",
    nom: "Association",
    service: "http://",
    thematique: ""
  },
  R102: {
    id: "R102",
    composante: "RE",
    description: "Sources d'information dont disposent les individus",
    niveau: 1,
    acronyme: "COM",
    nom: "Information",
    service: "http://",
    thematique: ""
  },
  R103: {
    id: "R103",
    composante: "RE",
    description: "Valorisation sociale du cadre de vie littorale",
    niveau: 1,
    acronyme: "VALOR",
    nom: "Valorisation",
    service: "http://",
    thematique: ""
  },
  R2: {
    id: "R2",
    composante: "RE",
    description: "Représentation sociale",
    niveau: 2,
    acronyme: "RISCOT",
    nom: "RISCOT",
    service: "http://"
  },
 R201: {
   id: "R201",
   composante: "RE",
   description: "Niveau d’inquiétude",
   niveau: 1,
   acronyme: "NI",
   nom: "Inquiétude",
   service: "http://",
   thematique: "RISCOT"
  },
 R202: {
   id: "R202",
   composante: "RE",
   description: "Identification des risques côtiers ",
   niveau: 1,
   acronyme: "IR",
   nom: "Identification",
   service: "http://",
   thematique: "RISCOT"
  },
 R203: {
   id: "R203",
   composante: "RE",
   description: "Identification personnelle",
   niveau: 1,
   acronyme: "IP",
   nom: "Identification personnelle",
   service: "http://",
   thematique: "RISCOT"
  },
 R204: {
   id: "R204",
   composante: "RE",
   description: "Information active",
   niveau: 1,
   acronyme: "IA",
   nom: "Information",
   service: "http://",
   thematique: "RISCOT"
  },
 R205: {
   id: "R205",
   composante: "RE",
   description: "Expérience des risques",
   niveau: 1,
   acronyme: "ER",
   nom: "Expérience",
   service: "http://",
   thematique: "RISCOT"
  },
 R3: {
   id: "R3",
   composante: "RE",
   description: "Pratiques",
   niveau: 2,
   acronyme: "PRAT",
   nom: "PRAT",
   service: "http://"
  },
 R301: {
   id: "R3",
   composante: "RE",
   description: "Pratiques individuelles de prévention et/ou de protection",
   niveau: 1,
   acronyme: "IND",
   nom: "Pratiques individuelles",
   service: "http://",
   thematique: "PRAT"
  },
 R302: {
   id: "R302",
   composante: "RE",
   description: "Pratiques collectives de prévention et/ou de protection",
   niveau: 1,
   acronyme: "CO",
   nom: "Pratiques collectives",
   service: "http://",
   thematique: "PRAT"
  },
 R4: {
   id: "R4",
   composante: "RE",
   description: "Sens du lieu",
   niveau: 2,
   acronyme: "LIEU",
   nom: "LIEU",
   service: "http://"
  },
 R401: {
   id: "R401",
   composante: "RE",
   description: "Dépendance au lieu",
   niveau: 1,
   acronyme: "DEP",
   nom: "Dépendance",
   service: "http://",
   thematique: "LIEU"
  },
 R402: {
   id: "R402",
   composante: "RE",
   description: "Identité du lieu",
   niveau: 1,
   acronyme: "ID",
   nom: "Identité",
   service: "http://",
   thematique: "LIEU"
  },
 R404: {
   id: "R404",
   composante: "RE",
   description: "Attachement au lieu",
   niveau: 1,
   acronyme: "ATT",
   nom: "Attachement",
   service: "http://",
   thematique: "LIEU"
  },
 R501: {
   id: "R501",
   composante: "RE",
   description: "Confiance et légitimité dans la gestion des risques côtiers",
   niveau: 1,
   acronyme: "GES",
   nom: "Confiance et légitimité",
   service: "http://",
   thematique: ""
  },
 R502: {
   id: "R502",
   composante: "RE",
   description: "Activités en lien avec la mer",
   niveau: 1,
   acronyme: "ACTMER",
   nom: "Activités",
   service: "http://",
   thematique: ""
  }
}};
