export default() => {
  return {
    A: {
      id: "A",
      description: "Aléas",
      niveau: 3,
      acronyme: "AL",
      nom: "AL",
      service: ""
    },
    A1: {
      id: "A1",
      composante: "AL",
      description: "Erosion",
      niveau: 2,
      acronyme: "ERO",
      nom: "ERO",
      service: ""
    },
    A101: {
      id: "A101",
      composante: "AL",
      description: "Distance érodée par an par 100m linéaires",
      niveau: 1,
      acronyme: "DIST",
      nom: "Distance",
      service: "",
      thematique: "ERO"
    },
    A102: {
      id: "A102",
      composante: "AL",
      description: "Surface érodée par an par 100m linéaires",
      niveau: 1,
      acronyme: "SURF",
      nom: "Surface",
      service: "",
      thematique: "ERO"
    },
    A103: {
      id: "A103",
      composante: "AL",
      description: "Volume érodé par an par 100m linéaires",
      niveau: 1,
      acronyme: "VOL",
      nom: "Volume",
      service: "",
      thematique: "ERO"
    },
    A2: {
      id: "A2",
      composante: "AL",
      description: "Submersion",
      niveau: 2,
      acronyme: "SUB",
      nom: "SUB",
      service: ""
    },
    A201: {
      id: "A201",
      composante: "AL",
      description: "Hauteur de submersion",
      niveau: 1,
      acronyme: "HAUT",
      nom: "Hauteur",
      service: "",
      thematique: "SUB"
    },
    A202: {
      id: "A202",
      composante: "AL",
      description: "Linéaire exposé aux paquets de mer et aux écoulements",
      niveau: 1,
      acronyme: "PAQ",
      nom: "Paquets de mer",
      service: "",
      thematique: "SUB"
    },
    A3: {
      id: "A3",
      composante: "AL",
      description: "Migration dunaire",
      niveau: 2,
      acronyme: "MIGR",
      nom: "MIGR",
      service: ""
    },
    A301: {
      id: "A301",
      composante: "AL",
      description: "Vitesse de migration dunaire",
      niveau: 1,
      acronyme: "VIT",
      nom: "Vitesse",
      service: "",
      thematique: "MIGR"
    },
    E: {
      id: "E",
      description: "Enjeux",
      niveau: 3,
      acronyme: "EN",
      nom: "EN",
      service: ""
    },
    E1: {
      id: "E1",
      composante: "EN",
      description: "Humains",
      niveau: 2,
      acronyme: "HUM",
      nom: "HUM",
      service: ""
    },
    E101: {
      id: "E101",
      composante: "EN",
      description: "Nombre d'habitants",
      niveau: 1,
      acronyme: "POP",
      nom: "Population",
      service: "",
      thematique: "HUM"
    },
    E102: {
      id: "E102",
      composante: "EN",
      description: "Nombre de logements",
      niveau: 1,
      acronyme: "BATI",
      nom: "Logements",
      service: "",
      thematique: "HUM"
    },
    E103: {
      id: "E103",
      composante: "EN",
      description: "Capacité d'accueil des Etablissements Recevant du Public",
      niveau: 1,
      acronyme: "ERP",
      nom: "Capacité d'accueil",
      service: "",
      thematique: "HUM"
    },
    E104: {
      id: "E104",
      composante: "EN",
      description: "Nombre de personnes de moins de 10 ou de plus de plus de 65 ans",
      niveau: 1,
      acronyme: "PERVUL-NB",
      nom: "Population vulnérable (nombre)",
      service: "",
      thematique: "HUM"
    },
    E105: {
      id: "E105",
      composante: "EN",
      description: "Pourcentage de personnes de moins de 10 ou de plus de plus de 65 ans",
      niveau: 1,
      acronyme: "PERVUL-PCT",
      nom: "Population vulnérable (%)",
      service: "",
      thematique: "HUM"
    },
    E106: {
      id: "E106",
      composante: "EN",
      description: "Nombre de ménages à bas revenu",
      niveau: 1,
      acronyme: "BAREV-NB",
      nom: "Population pauvre (nombre)",
      service: "",
      thematique: "HUM"
    },
    E107: {
      id: "E107",
      composante: "EN",
      description: "Part des ménages à bas revenu",
      niveau: 1,
      acronyme: "BAREV-PCT",
      nom: "Population pauvre (%)",
      service: "",
      thematique: "HUM"
    },
    E108: {
      id: "E108",
      composante: "EN",
      description: "Part des résidences secondaires",
      niveau: 1,
      acronyme: "SECOND",
      nom: "Population temporaire",
      service: "",
      thematique: "HUM"
    },
    E109: {
      id: "E109",
      composante: "EN",
      description: "Capacité d’hébergement touristique",
      niveau: 1,
      acronyme: "TOURIST",
      nom: "Tourisme",
      service: "",
      thematique: "HUM"
    },
    E2: {
      id: "E2",
      composante: "EN",
      description: "Economiques",
      niveau: 2,
      acronyme: "ECO",
      nom: "ECO",
      service: ""
    },
    E201: {
      id: "E201",
      composante: "EN",
      description: "Nombre de travailleurs",
      niveau: 1,
      acronyme: "TRAV",
      nom: "Emploi",
      service: "",
      thematique: "ECO"
    },
    E202: {
      id: "E202",
      composante: "EN",
      description: "Valeur immobilière moyenne (m²)",
      niveau: 1,
      acronyme: "VIMMO",
      nom: "Immobilier",
      service: "",
      thematique: "ECO"
    },
    E203: {
      id: "E203",
      composante: "EN",
      description: "Diversité des activités",
      niveau: 1,
      acronyme: "DIV",
      nom: "Résilience économique",
      service: "",
      thematique: "ECO"
    },
    E204: {
      id: "E204",
      composante: "EN",
      description: "Taux de fonction touristique (lits touristiques / habitants)",
      niveau: 1,
      acronyme: "TOUR-TX",
      nom: "Tourisme",
      service: "",
      thematique: "ECO"
    },
    E205: {
      id: "E205",
      composante: "EN",
      description: "Surface occupée par l'agriculture",
      niveau: 1,
      acronyme: "AGRI",
      nom: "Agriculture",
      service: "",
      thematique: "ECO"
    },
    E3: {
      id: "E3",
      composante: "EN",
      description: "Structurels",
      niveau: 2,
      acronyme: "STR",
      nom: "STR",
      service: ""
    },
    E301: {
      id: "E301",
      composante: "EN",
      description: "Localisation des établissements industriels à risque",
      niveau: 1,
      acronyme: "INDRISQ",
      nom: "Suraccident",
      service: "",
      thematique: "STR"
    },
    E302: {
      id: "E302",
      composante: "EN",
      description: "Présence/Nombre de points sensibles",
      niveau: 1,
      acronyme: "NEVRAL",
      nom: "Sensiblité du réseau",
      service: "",
      thematique: "STR"
    },
    E303: {
      id: "E303",
      composante: "EN",
      description: "Part du linéaire côtier artificialisé",
      niveau: 1,
      acronyme: "DIG",
      nom: "Artificialisation",
      service: "",
      thematique: "STR"
    },
    E304: {
      id: "E304",
      composante: "EN",
      description: "Localisation du bâti résidentiel sans étage refuge",
      niveau: 1,
      acronyme: "REFUG",
      nom: "Logements à risque",
      service: "",
      thematique: "STR"
    },
    E305: {
      id: "E305",
      composante: "EN",
      description: "Proximité d'établissements de secours",
      niveau: 1,
      acronyme: "SECOUR",
      nom: "Secours",
      service: "",
      thematique: "STR"
    },
    E306: {
      id: "E306",
      composante: "EN",
      description: "Localisation du patrimoine culturel",
      niveau: 1,
      acronyme: "PATRIM",
      nom: "Patrimoine culturel",
      service: "",
      thematique: "STR"
    },
    G: {
      id: "G",
      description: "Gestion",
      niveau: 3,
      acronyme: "GE",
      nom: "GE",
      service: ""
    },
    G1: {
      id: "G1",
      composante: "GE",
      description: "Prévention et anticipation",
      niveau: 2,
      acronyme: "PRE",
      nom: "PRE",
      service: ""
    },
    G101: {
      id: "G101",
      composante: "GE",
      description: "Contraintes de constructibilité en zone d’aléas",
      niveau: 1,
      acronyme: "URBA",
      nom: "Urbanisme",
      service: "",
      thematique: "PRE"
    },
    G102: {
      id: "G102",
      composante: "GE",
      description: "Etat du PPRL",
      niveau: 1,
      acronyme: "PPRL",
      nom: "PPRL",
      service: "",
      thematique: "PRE"
    },
    G103: {
      id: "G103",
      composante: "GE",
      description: "Mise en place de la compétence",
      niveau: 1,
      acronyme: "GEMAPI1",
      nom: "Compétence GEMAPI",
      service: "",
      thematique: "PRE"
    },
    G104: {
      id: "G104",
      composante: "GE",
      description: "Etat des ouvrages",
      niveau: 1,
      acronyme: "GEMAPI2",
      nom: "Etat des ouvrages",
      service: "",
      thematique: "PRE"
    },
    G105: {
      id: "G105",
      composante: "GE",
      description: "Investissement humain sur les risques côtiers",
      niveau: 1,
      acronyme: "HUM",
      nom: "Investissement humain",
      service: "",
      thematique: "PRE"
    },
    G106: {
      id: "G106",
      composante: "GE",
      description: "Démarche locale de gestion des risques",
      niveau: 1,
      acronyme: "STRATE",
      nom: "Démarche locale",
      service: "",
      thematique: "PRE"
    },
    G107: {
      id: "G107",
      composante: "GE",
      description: "Intégration différents acteurs de la démarche locale",
      niveau: 1,
      acronyme: "ACTEUR",
      nom: "Intégration des acteurs",
      service: "",
      thematique: "PRE"
    },
    G108: {
      id: "G108",
      composante: "GE",
      description: "Intégration extraterritoriale",
      niveau: 1,
      acronyme: "EXTRA",
      nom: "Intégration extraterritoriale",
      service: "",
      thematique: "PRE"
    },
    G109: {
      id: "G109",
      composante: "GE",
      description: "Actions dans chaque axe du PAPI",
      niveau: 1,
      acronyme: "PAPI1",
      nom: "Actions",
      service: "",
      thematique: "PRE"
    },
    G110: {
      id: "G110",
      composante: "GE",
      description: "Mise en œuvre des actions du PAPI",
      niveau: 1,
      acronyme: "PAPI2",
      nom: "Mise en œuvre",
      service: "",
      thematique: "PRE"
    },
    G111: {
      id: "G111",
      composante: "GE",
      description: "Etat de la stratégie locale (relocalisation)",
      niveau: 1,
      acronyme: "RELOC",
      nom: "Stratégie locale",
      service: "",
      thematique: "PRE"
    },
    G2: {
      id: "G2",
      composante: "GE",
      description: "Sensibilisation",
      niveau: 2,
      acronyme: "SEN",
      nom: "SEN",
      service: ""
    },
    G201: {
      id: "G201",
      composante: "GE",
      description: "Evènements de sensibilisation dans les établissements scolaires",
      niveau: 1,
      acronyme: "SCOL",
      nom: "Scolaires",
      service: "",
      thematique: "SEN"
    },
    G202: {
      id: "G202",
      composante: "GE",
      description: "Présence d’associations sur les risques côtiers",
      niveau: 1,
      acronyme: "ASSO",
      nom: "Association",
      service: "",
      thematique: "SEN"
    },
    G203: {
      id: "G203",
      composante: "GE",
      description: "Publications scientifiques sur les risques côtiers",
      niveau: 1,
      acronyme: "PUBLI",
      nom: "Publications scientifiques",
      service: "",
      thematique: "SEN"
    },
    G204: {
      id: "G204",
      composante: "GE",
      description: "Repères inondation et de recul du trait de côte",
      niveau: 1,
      acronyme: "REP",
      nom: "Repères",
      service: "",
      thematique: "SEN"
    },
    G205: {
      id: "G205",
      composante: "GE",
      description: "Modes de diffusion du DICRIM ",
      niveau: 1,
      acronyme: "DICRIM1",
      nom: "Diffusion",
      service: "",
      thematique: "SEN"
    },
    G206: {
      id: "G206",
      composante: "GE",
      description: "Analyse pédagogique du DICRIM",
      niveau: 1,
      acronyme: "DICRIM2",
      nom: "Pédagogie",
      service: "",
      thematique: "SEN"
    },
    G3: {
      id: "G3",
      composante: "GE",
      description: "Gestion de crise",
      niveau: 2,
      acronyme: "CRI",
      nom: "CRI",
      service: ""
    },
    G301: {
      id: "G301",
      composante: "GE",
      description: "Mode d’alerte de la population",
      niveau: 1,
      acronyme: "ALERTE",
      nom: "Alerte",
      service: "",
      thematique: "CRI"
    },
    G302: {
      id: "G302",
      composante: "GE",
      description: "Intégration du SDIS dans le PCS",
      niveau: 1,
      acronyme: "SDIS",
      nom: "Intégration",
      service: "",
      thematique: "CRI"
    },
    G303: {
      id: "G303",
      composante: "GE",
      description: "Mise à jour du PCS",
      niveau: 1,
      acronyme: "PCS",
      nom: "Plan Communal de Sauvegarde",
      service: "",
      thematique: "CRI"
    },
    R: {
      id: "R",
      description: "Représentations",
      niveau: 3,
      acronyme: "RE",
      nom: "RE",
      service: ""
    },
    R1: {
      id: "R1",
      composante: "RE",
      description: "Conscience des aléas",
      niveau: 2,
      acronyme: "COAL",
      nom: "COAL",
      service: ""
    },
    R101: {
      id: "R101",
      composante: "RE",
      description: "Sources d'information dont disposent les individus",
      niveau: 1,
      acronyme: "COM",
      nom: "Sources d'information",
      service: "",
      thematique: "COAL"
    },
    R102: {
      id: "R102",
      composante: "RE",
      description: "Expérience des risques",
      niveau: 1,
      acronyme: "ER",
      nom: "Expérience",
      service: "",
      thematique: "COAL"
    },
    R103: {
      id: "R103",
      composante: "RE",
      description: "Information active",
      niveau: 1,
      acronyme: "IA",
      nom: "Information active",
      service: "",
      thematique: "COAL"
    },
    R104: {
      id: "R104",
      composante: "RE",
      description: "Identification des risques côtiers ",
      niveau: 1,
      acronyme: "IR",
      nom: "Identification",
      service: "",
      thematique: "COAL"
    },
    R105: {
      id: "R105",
      composante: "RE",
      description: "Identification personnelle des risques côtiers",
      niveau: 1,
      acronyme: "IP",
      nom: "Identification personnelle",
      service: "",
      thematique: "COAL"
    },
    R106: {
      id: "R106",
      composante: "RE",
      description: "Niveau d’inquiétude",
      niveau: 1,
      acronyme: "NI",
      nom: "Inquiétude",
      service: "",
      thematique: "COAL"
    },
    R107: {
      id: "R107",
      composante: "RE",
      description: "Identification personnelle",
      niveau: 1,
      acronyme: "IP",
      nom: "Identification personnelle",
      service: "",
      thematique: "COAL"
    },
    R2: {
      id: "R2",
      composante: "RE",
      description: "Dimension sociale du lieu",
      niveau: 2,
      acronyme: "DISO",
      nom: "DISO",
      service: ""
    },
    R201: {
      id: "R201",
      composante: "RE",
      description: "Dépendance au lieu",
      niveau: 1,
      acronyme: "DP",
      nom: "Dépendance",
      service: "",
      thematique: "DISO"
      },
    R202: {
      id: "R202",
      composante: "RE",
      description: "Attachement au lieu",
      niveau: 1,
      acronyme: "PA",
      nom: "Attachement",
      service: "",
      thematique: "DISO"
    },
    R203: {
      id: "R203",
      composante: "RE",
      description: "Identité du lieu",
      niveau: 1,
      acronyme: "PI",
      nom: "Identité",
      service: "",
      thematique: "DISO"
    },
    R204: {
      id: "R204",
      composante: "RE",
      description: "Valorisation sociale du cadre de vie littorale",
      niveau: 1,
      acronyme: "VALOR",
      nom: "Valorisation",
      service: "",
      thematique: "DISO"
    },
    R205: {
      id: "R205",
      composante: "RE",
      description: "Vie associative en lien avec les risques côtiers",
      niveau: 1,
      acronyme: "ASSORIS",
      nom: "Association",
      service: "",
      thematique: "DISO"
    },
    R206: {
      id: "R206",
      composante: "RE",
      description: "Activités en lien avec la mer",
      niveau: 1,
      acronyme: "ACTMER",
      nom: "Activités",
      service: "",
      thematique: "DISO"
    },
    R3: {
      id: "R3",
      composante: "RE",
      description: "Perception de la gestion",
      niveau: 2,
      acronyme: "GEST",
      nom: "GEST",
      service: ""
    }, 
    R301: {
      id: "R301",
      composante: "RE",
      description: "Pratiques individuelles de prévention et/ou de protection",
      niveau: 1,
      acronyme: "IND",
      nom: "Pratiques individuelles",
      service: "",
      thematique: "GEST"
    },
    R302: {
      id: "R302",
      composante: "RE",
      description: "Pratiques collectives de prévention et/ou de protection",
      niveau: 1,
      acronyme: "CO",
      nom: "Pratiques collectives",
      service: "",
      thematique: "GEST"
    },
    R303: {
      id: "R303",
      composante: "RE",
      description: "Confiance et légitimité dans la gestion des risques côtiers",
      niveau: 1,
      acronyme: "GES",
      nom: "Confiance et légitimité",
      service: "",
      thematique: "GEST"
    },
    I: {
      id: "I",
      description: "Indices",
      niveau: 3,
      acronyme: "IC",
      nom: "IC",
      service: ""
    },
    I1: {
      id: "I1",
      composante: "IC",
      description: "Par composantes",
      niveau: 2,
      acronyme: "TH",
      nom: "TH",
      service: ""
    }, 
    I101: {
      id: "I101",
      composante: "IC",
      nom: "Aléas",
      composition: [ "A101", "A201", "A202" ],
      methode: "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d'indicateurs",
      description: "Indice des aléas",
      niveau: 1,
      acronyme: "AL",
      service: "",
      thematique: "TH"
    }, 
    I102: {
      id: "I102",
      composante: "IC",
      nom: "Enjeux",
      composition: [ "E101", "E102", "E104", "E106", "E109", "E201", "E203", "E204", "E301", "E303", "E304", "E305", "E306" ],
      methode: "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d'indicateurs",
      description: "Indice des enjeux",
      niveau: 1,
      acronyme: "EN",
      service: "",
      thematique: "TH"
    }, 
    I103: {
      id: "I103",
      composante: "IC",
      nom: "Gestion",
      composition: [ "G101", "G104", "G105", "G106", "G103", "G110", "G108", "G201", "G202", "G203", "G204", "G206", "G301", "G302", "G303" ],
      methode: "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d'indicateurs",
      description: "Indice de gestion",
      niveau: 1,
      acronyme: "GE",
      service: "",
      thematique: "TH"
    }, 
    I104: {
      id: "I104",
      composante: "IC",
      nom: "Représentation",
      composition: [ "R101", "R103", "R201", "R104", "R105", "R203", "R303" ],
      methode: "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d'indicateurs",
      description: "Indice des représentations",
      niveau: 1,
      acronyme: "RE",
      service: "",
      thematique: "TH"
    }, 
    I105: {
      id: "I105",
      composante: "IC",
      nom: "_temp Enjeux (somme)",
      composition: [ "E101", "E102", "E104", "E106", "E109", "E201", "E203", "E204", "E303", "E304", "E306", "E305", "E306" ],
      methode: "Somme normalisée des indicateurs",
      description: "Somme des enjeux",
      niveau: 1,
      acronyme: "EN",
      service: "",
      thematique: "TH"
    }, 
    I106: {
      id: "I106",
      composante: "IC",
      nom: "_temp Enjeux (produit)",
      composition: [ "E101", "E102", "E104", "E106", "E109", "E201", "E203", "E204", "E303", "E304", "E301", "E305", "E306" ],
      methode: "Produit normalisé des indicateurs",
      description: "Produit des enjeux",
      niveau: 1,
      acronyme: "ENTP",
      service: "",
      thematique: "TH"
    }, 
    I2: {
      id: "I2",
      composante: "IC",
      description: "Transverses",
      niveau: 2,
      acronyme: "PA",
      nom: "PA",
      service: ""
      }, 
    I201: {
      id: "I201",
      composante: "IC",
      nom: "Intrinsèque",
      composition: [ "A201", "E303", "E304", "G302", "G303"],
      methode: "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d'indicateurs",
      description: "Vulnérabilité du bâti",
      niveau: 1,
      acronyme: "VI",
      service: "",
      thematique: "PA"
    },
    I202: {
      id: "I202",
      composante: "IC",
      nom: "Submersion",
      composition: [ "A201", "E303", "E101", "E102", "E104", "E106", "G101", "G104" ],
      methode: "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d'indicateurs",
      description: "Vulnérabilité à la submersion",
      niveau: 1,
      acronyme: "SU",
      service: "",
      thematique: "PA"
    },
    I203: {
      id: "I203",
      composante: "IC",
      nom: "Stratégique",
      composition: [ "A101", "A201", "A202", "E202", "E303", "E304", "G104", "G204", "G301", "R101", "R103", "R201" ],
      methode: "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d'indicateurs",
      description: "Actions possibles à moyen ou long terme",
      niveau: 1,
      acronyme: "ST",
      service: "",
      thematique: "PA"
    },
    I204: {
      id: "I204",
      composante: "IC",
      nom: "Opérationnel",
      composition: [ "A101", "E103", "E202", "E203", "E301", "E302", "G101", "G106", "G108", "G302", "R104", "R105", "R203", "R303" ],
      methode: "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d'indicateurs",
      description: "Action possible à court terme",
      niveau: 1,
      acronyme: "OP",
      service: "",
      thematique: "PA"
    }, 
    I205: {
      id: "I205",
      composante: "IC",
      nom: "_temp Submersion (produit)",
      composition: [ "A201", "E303", "E101", "E102", "E104", "E106", "G101", "G104" ],
      description: "Vulnérabilité à la submersion, agrégation géométrique",
      methode: "Produit normalisé des indicateurs",
      niveau: 1,
      acronyme: "SUTP",
      service: "",
      thematique: "PA"
    },
    I206: {
      id: "I206",
      composante: "IC",
      nom: "_temp Intrinsèque (produit)",
      methode: "Produit normalisé des indicateurs",
      composition: [ "A201", "E303", "E304", "G302", "G303"],
      description: "Vulnérabilité du bâti, agrégation géométrique",
      niveau: 1,
      acronyme: "VITP",
      service: "",
      thematique: "PA"
    },
    I207: {
      id: "I207",
      composante: "IC",
      nom: "_temp Submersion (somme)",
      composition: [ "A201", "E303", "E101", "E102", "E104", "E106", "G101", "G104" ],
      description: "Vulnérabilité à la submersion, agrégation arithmétique",
      methode: "Somme normalisée des indicateurs",
      niveau: 1,
      acronyme: "SUTS",
      service: "",
      thematique: "PA"
    },
    I208: {
      id: "I208",
      composante: "IC",
      nom: "_temp Intrinsèque (somme)",
      composition: [ "A201", "E303", "E304", "G302", "G303"],
      description: "Vulnérabilité du bâti, agrégation arithmétique",
      methode: "Somme normalisée des indicateurs",
      niveau: 1,
      acronyme: "VITS",
      service: "",
      thematique: "PA"
    },
    I3: {
      id: "I2",
      composante: "IC",
      description: "Globaux",
      niveau: 2,
      acronyme: "GL",
      nom: "GL",
      service: ""
    }, 
    I301: {
      id: "I201",
      composante: "IC",
      nom: "Vulnérabilité systémique",
      methode: "$ Aléa * [ Enjeux - (5 - Gestion) - (5 - Représentations) ] $",
      description: "Agrégation systémique des composantes de vulnérabilité",
      composition: [ "I101", "I102", "I103", "I104" ],
      niveau: 1,
      acronyme: "SG",
      service: "",
      thematique: "GL"
    },
  }
};