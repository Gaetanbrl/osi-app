DROP TABLE IF EXISTS refIndic;
CREATE TABLE refIndic (  
  ref text NOT NULL,
  meta jsonb
);

INSERT INTO refIndic VALUES ('A', '{
  "id": "A",
  "composante": "AL",
  "description": "Aléas",
  "composition": [ "A1", "A2", "A3" ],
  "methode": "Maximum des indicateurs thématiques (érosion, submersion, migration dunaire)",
  "niveau": 3,
  "acronyme": "AL",
  "nom": "Composante des aléas",
  "service": ""
}');
INSERT INTO refIndic VALUES ('A1', '{
  "id": "A1",
  "composante": "AL",
  "description": "Erosion",
  "composition": [ "A101" ],
  "methode": "Distance érodée par an par 100m linéaires",
  "niveau": 2,
  "acronyme": "ERO",
  "nom": "ERO",
  "service": ""
}');
INSERT INTO refIndic VALUES ('A101', '{
  "id": "A101",
  "composante": "AL",
  "description": "Distance érodée par an par 100m linéaires",
  "niveau": 1,
  "acronyme": "DIST",
  "nom": "Distance",
  "service": "",
  "thematique": "ERO"
}');
INSERT INTO refIndic VALUES ('A102', '{
  "id": "A102",
  "composante": "AL",
  "description": "Surface érodée par an par 100m linéaires",
  "niveau": 1,
  "acronyme": "SURF",
  "nom": "Surface",
  "service": "",
  "thematique": "ERO"
}');
INSERT INTO refIndic VALUES ('A103', '{
  "id": "A103",
  "composante": "AL",
  "description": "Volume érodé par an par 100m linéaires",
  "niveau": 1,
  "acronyme": "VOL",
  "nom": "Volume",
  "service": "",
  "thematique": "ERO"
}');
INSERT INTO refIndic VALUES ('A2', '{
  "id": "A2",
  "composante": "AL",
  "description": "Submersion",
  "composition": [ "A201", "A202" ],
  "methode": "Maximum des indicateurs (submersion et paquets de mer)",
  "niveau": 2,
  "acronyme": "SUB",
  "nom": "SUB",
  "service": ""
}');
INSERT INTO refIndic VALUES ('A201', '{
  "id": "A201",
  "composante": "AL",
  "description": "Hauteur de submersion",
  "niveau": 1,
  "acronyme": "HAUT",
  "nom": "Hauteur",
  "service": "",
  "thematique": "SUB"
}');
INSERT INTO refIndic VALUES ('A202', '{
  "id": "A202",
  "composante": "AL",
  "description": "Linéaire exposé aux paquets de mer et aux écoulements",
  "niveau": 1,
  "acronyme": "PAQ",
  "nom": "Paquets de mer",
  "service": "",
  "thematique": "SUB"
}');
INSERT INTO refIndic VALUES ('A3', '{
  "id": "A3",
  "composante": "AL",
  "description": "Migration dunaire",
  "composition": [ "A301" ],
  "methode": "",
  "niveau": 2,
  "acronyme": "MIGR",
  "nom": "MIGR",
  "service": ""
}');
INSERT INTO refIndic VALUES ('A301', '{
  "id": "A301",
  "composante": "AL",
  "description": "Vitesse de migration dunaire",
  "niveau": 1,
  "acronyme": "VIT",
  "nom": "Vitesse",
  "service": "",
  "thematique": "MIGR"
}');
INSERT INTO refIndic VALUES ('E', '{
  "id": "E",
  "composante": "EN",
  "description": "Enjeux",
  "composition": [ "E101",    "E102",    "E103",    "E104",    "E106",    "E108",    "E109",   "E201" ,   "E202",    "E203",   "E204" ,   "E301",    "E303" , "E304",    "E305" ,   "E306" ],
  "methode": "Moyenne géométrique des indicateurs",
  "niveau": 3,
  "acronyme": "EN",
  "nom": "Composante des enjeux",
  "service": ""
}');
INSERT INTO refIndic VALUES ('E1', '{
  "id": "E1",
  "composante": "EN",
  "description": "Humains",
  "composition": [ "E101", "E102", "E103", "E104", "E106", "E108", "E109" ], 
  "methode": "Maximum des indicateurs",
  "niveau": 2,
  "acronyme": "HUM",
  "nom": "HUM",
  "service": ""
}');
INSERT INTO refIndic VALUES ('E101', '{
  "id": "E101",
  "composante": "EN",
  "description": "Nombre d''habitants",
  "niveau": 1,
  "acronyme": "POP",
  "nom": "Population",
  "service": "",
  "thematique": "HUM"
}');
INSERT INTO refIndic VALUES ('E102', '{
  "id": "E102",
  "composante": "EN",
  "description": "Nombre de bâti résidentiel",
  "niveau": 1,
  "acronyme": "BATI",
  "nom": "Logements",
  "service": "",
  "thematique": "HUM"
}');
INSERT INTO refIndic VALUES ('E103', '{
  "id": "E103",
  "composante": "EN",
  "description": "Capacité d''accueil des Etablissements Recevant du Public",
  "niveau": 1,
  "acronyme": "ERP",
  "nom": "Capacité d''accueil",
  "service": "",
  "thematique": "HUM"
}');
INSERT INTO refIndic VALUES ('E104', '{
  "id": "E104",
  "composante": "EN",
  "description": "Nombre de personnes de moins de 10 ou de plus de plus de 65 ans",
  "niveau": 1,
  "acronyme": "PERVUL-NB",
  "nom": "Population vulnérable (nombre)",
  "service": "",
  "thematique": "HUM"
}');
INSERT INTO refIndic VALUES ('E105', '{
  "id": "E105",
  "composante": "EN",
  "description": "Pourcentage de personnes de moins de 10 ou de plus de plus de 65 ans",
  "niveau": 1,
  "acronyme": "PERVUL-PCT",
  "nom": "Population vulnérable (%)",
  "service": "",
  "thematique": "HUM"
}');
INSERT INTO refIndic VALUES ('E106', '{
  "id": "E106",
  "composante": "EN",
  "description": "Nombre de ménages à bas revenu",
  "niveau": 1,
  "acronyme": "BAREV-NB",
  "nom": "Population pauvre (nombre)",
  "service": "",
  "thematique": "HUM"
}');
INSERT INTO refIndic VALUES ('E107', '{
  "id": "E107",
  "composante": "EN",
  "description": "Part des ménages à bas revenu",
  "niveau": 1,
  "acronyme": "BAREV-PCT",
  "nom": "Population pauvre (%)",
  "service": "",
  "thematique": "HUM"
}');
INSERT INTO refIndic VALUES ('E108', '{
  "id": "E108",
  "composante": "EN",
  "description": "Part des résidences secondaires",
  "niveau": 1,
  "acronyme": "SECOND",
  "nom": "Population temporaire",
  "service": "",
  "thematique": "HUM"
}');
INSERT INTO refIndic VALUES ('E109', '{
  "id": "E109",
  "composante": "EN",
  "description": "Capacité d’hébergement touristique",
  "niveau": 1,
  "acronyme": "TOURIST",
  "nom": "Tourisme",
  "service": "",
  "thematique": "HUM"
}');
INSERT INTO refIndic VALUES ('E2', '{
  "id": "E2",
  "composante": "EN",
  "description": "Economiques",
  "composition": [ "E201", "E202", "E203", "E204" ],
  "methode": "Maximum des indicateurs",
  "niveau": 2,
  "acronyme": "ECO",
  "nom": "ECO",
  "service": ""
}');
INSERT INTO refIndic VALUES ('E201', '{
  "id": "E201",
  "composante": "EN",
  "description": "Nombre de travailleurs",
  "niveau": 1,
  "acronyme": "TRAV",
  "nom": "Emploi",
  "service": "",
  "thematique": "ECO"
}');
INSERT INTO refIndic VALUES ('E202', '{
  "id": "E202",
  "composante": "EN",
  "description": "Valeur immobilière moyenne (m²)",
  "niveau": 1,
  "acronyme": "VIMMO",
  "nom": "Immobilier",
  "service": "",
  "thematique": "ECO"
}');
INSERT INTO refIndic VALUES ('E203', '{
  "id": "E203",
  "composante": "EN",
  "description": "Diversité des activités",
  "niveau": 1,
  "acronyme": "DIV",
  "nom": "Résilience économique",
  "service": "",
  "thematique": "ECO"
}');
INSERT INTO refIndic VALUES ('E204', '{
  "id": "E204",
  "composante": "EN",
  "description": "Taux de fonction touristique (lits touristiques / habitants)",
  "niveau": 1,
  "acronyme": "TOUR-TX",
  "nom": "Tourisme",
  "service": "",
  "thematique": "ECO"
}');
INSERT INTO refIndic VALUES ('E205', '{
  "id": "E205",
  "composante": "EN",
  "description": "Surface occupée par l''agriculture",
  "niveau": 1,
  "acronyme": "AGRI",
  "nom": "Agriculture",
  "service": "",
  "thematique": "ECO"
}');
INSERT INTO refIndic VALUES ('E3', '{
  "id": "E3",
  "composante": "EN",
  "description": "Structurels",
  "composition": [ "E301", "E302", "E303", "E304", "E305", "E306" ],  
  "methode": "Maximum des indicateurs",
  "niveau": 2,
  "acronyme": "STR",
  "nom": "STR",
  "service": ""
}');
INSERT INTO refIndic VALUES ('E301', '{
  "id": "E301",
  "composante": "EN",
  "description": "Localisation des établissements industriels à risque",
  "niveau": 1,
  "acronyme": "INDRISQ",
  "nom": "Suraccident",
  "service": "",
  "thematique": "STR"
}');
INSERT INTO refIndic VALUES ('E302', '{
  "id": "E302",
  "composante": "EN",
  "description": "Présence/Nombre de points sensibles",
  "niveau": 1,
  "acronyme": "NEVRAL",
  "nom": "Sensiblité du réseau",
  "service": "",
  "thematique": "STR"
}');
INSERT INTO refIndic VALUES ('E303', '{
  "id": "E303",
  "composante": "EN",
  "description": "Part du linéaire côtier artificialisé à l''aide d''ouvrages de type digue",
  "niveau": 1,
  "acronyme": "DIG",
  "nom": "Artificialisation",
  "service": "",
  "thematique": "STR"
}');
INSERT INTO refIndic VALUES ('E304', '{
  "id": "E304",
  "composante": "EN",
  "description": "Localisation du bâti résidentiel sans étage refuge",
  "niveau": 1,
  "acronyme": "REFUG",
  "nom": "Logements à risque",
  "service": "",
  "thematique": "STR"
}');
INSERT INTO refIndic VALUES ('E305', '{
  "id": "E305",
  "composante": "EN",
  "description": "Proximité d''établissements de secours",
  "niveau": 1,
  "acronyme": "SECOUR",
  "nom": "Secours",
  "service": "",
  "thematique": "STR"
}');
INSERT INTO refIndic VALUES ('E306', '{
  "id": "E306",
  "composante": "EN",
  "description": "Localisation du patrimoine culturel",
  "niveau": 1,
  "acronyme": "PATRIM",
  "nom": "Patrimoine culturel",
  "service": "",
  "thematique": "STR"
}');
INSERT INTO refIndic VALUES ('G', '{
  "id": "G",
  "composante": "GE",
  "description": "Gestion",
  "composition": [ "G1", "G2", "G3" ],
  "methode": "Maximum des indicateurs (prévention et anticipation, sensibilisation, gestion de crise)", 
  "niveau": 3,
  "acronyme": "GE",
  "nom": "Composante de la gestion",
  "service": ""
}');
INSERT INTO refIndic VALUES ('G1', '{
  "id": "G1",
  "composante": "GE",
  "description": "Prévention",
  "composition": [ "G101", "G103", "G104", "G105", "G106", "G108", "G110" ],
  "methode": "Maximum des indicateurs",
  "niveau": 2,
  "acronyme": "PRE",
  "nom": "PRE",
  "service": ""
}');
INSERT INTO refIndic VALUES ('G101', '{
  "id": "G101",
  "composante": "GE",
  "description": "Contraintes de constructibilité en zone d’aléas",
  "niveau": 1,
  "acronyme": "URBA",
  "nom": "Urbanisme",
  "service": "",
  "thematique": "PRE"
}');
INSERT INTO refIndic VALUES ('G102', '{
  "id": "G102",
  "composante": "GE",
  "description": "Etat du PPRL",
  "niveau": 1,
  "acronyme": "PPRL",
  "nom": "PPRL",
  "service": "",
  "thematique": "PRE"
}');
INSERT INTO refIndic VALUES ('G103', '{
  "id": "G103",
  "composante": "GE",
  "description": "Mise en place de la compétence",
  "niveau": 1,
  "acronyme": "GEMAPI1",
  "nom": "Compétence GEMAPI",
  "service": "",
  "thematique": "PRE"
}');
INSERT INTO refIndic VALUES ('G104', '{
  "id": "G104",
  "composante": "GE",
  "description": "Etat des ouvrages",
  "niveau": 1,
  "acronyme": "GEMAPI2",
  "nom": "Etat des ouvrages",
  "service": "",
  "thematique": "PRE"
}');
INSERT INTO refIndic VALUES ('G105', '{
  "id": "G105",
  "composante": "GE",
  "description": "Investissement humain sur les risques côtiers",
  "niveau": 1,
  "acronyme": "HUM",
  "nom": "Investissement humain",
  "service": "",
  "thematique": "PRE"
}');
INSERT INTO refIndic VALUES ('G106', '{
  "id": "G106",
  "composante": "GE",
  "description": "Démarche locale de gestion des risques",
  "niveau": 1,
  "acronyme": "STRATE",
  "nom": "Démarche locale",
  "service": "",
  "thematique": "PRE"
}');
INSERT INTO refIndic VALUES ('G107', '{
  "id": "G107",
  "composante": "GE",
  "description": "Intégration différents acteurs de la démarche locale",
  "niveau": 1,
  "acronyme": "ACTEUR",
  "nom": "Intégration des acteurs",
  "service": "",
  "thematique": "PRE"
}');
INSERT INTO refIndic VALUES ('G108', '{
  "id": "G108",
  "composante": "GE",
  "description": "Intégration extraterritoriale",
  "niveau": 1,
  "acronyme": "EXTRA",
  "nom": "Intégration extraterritoriale",
  "service": "",
  "thematique": "PRE"
}');
INSERT INTO refIndic VALUES ('G109', '{
  "id": "G109",
  "composante": "GE",
  "description": "Actions dans chaque axe du PAPI",
  "niveau": 1,
  "acronyme": "PAPI1",
  "nom": "Actions",
  "service": "",
  "thematique": "PRE"
}');
INSERT INTO refIndic VALUES ('G110', '{
  "id": "G110",
  "composante": "GE",
  "description": "Mise en œuvre des actions du PAPI",
  "niveau": 1,
  "acronyme": "PAPI2",
  "nom": "Mise en œuvre",
  "service": "",
  "thematique": "PRE"
}');
INSERT INTO refIndic VALUES ('G111', '{
  "id": "G111",
  "composante": "GE",
  "description": "Etat de la stratégie locale (relocalisation)",
  "niveau": 1,
  "acronyme": "RELOC",
  "nom": "Stratégie locale",
  "service": "",
  "thematique": "PRE"
}');
INSERT INTO refIndic VALUES ('G2', '{
  "id": "G2",
  "composante": "GE",
  "description": "Sensibilisation",
  "composition": [ "G201", "G202", "G203", "G204", "G206" ],
  "methode": "Maximum des indicateurs",
  "niveau": 2,
  "acronyme": "SEN",
  "nom": "SEN",
  "service": ""
}');
INSERT INTO refIndic VALUES ('G201', '{
  "id": "G201",
  "composante": "GE",
  "description": "Evènements de sensibilisation dans les établissements scolaires",
  "niveau": 1,
  "acronyme": "SCOL",
  "nom": "Scolaires",
  "service": "",
  "thematique": "SEN"
}');
INSERT INTO refIndic VALUES ('G202', '{
  "id": "G202",
  "composante": "GE",
  "description": "Présence d’associations sur les risques côtiers",
  "niveau": 1,
  "acronyme": "ASSO",
  "nom": "Association",
  "service": "",
  "thematique": "SEN"
}');
INSERT INTO refIndic VALUES ('G203', '{
  "id": "G203",
  "composante": "GE",
  "description": "Publications scientifiques sur les risques côtiers",
  "niveau": 1,
  "acronyme": "PUBLI",
  "nom": "Publications scientifiques",
  "service": "",
  "thematique": "SEN"
}');
INSERT INTO refIndic VALUES ('G204', '{
  "id": "G204",
  "composante": "GE",
  "description": "Repères inondation et de recul du trait de côte",
  "niveau": 1,
  "acronyme": "REP",
  "nom": "Repères",
  "service": "",
  "thematique": "SEN"
}');
INSERT INTO refIndic VALUES ('G205', '{
  "id": "G205",
  "composante": "GE",
  "description": "Modes de diffusion du DICRIM ",
  "niveau": 1,
  "acronyme": "DICRIM1",
  "nom": "Diffusion",
  "service": "",
  "thematique": "SEN"
}');
INSERT INTO refIndic VALUES ('G206', '{
  "id": "G206",
  "composante": "GE",
  "description": "Analyse pédagogique du DICRIM",
  "niveau": 1,
  "acronyme": "DICRIM2",
  "nom": "Pédagogie",
  "service": "",
  "thematique": "SEN"
}');
INSERT INTO refIndic VALUES ('G3', '{
  "id": "G3",
  "composante": "GE",
  "description": "Gestion de crise",
  "composition": [ "G301", "G302", "G303" ],
  "methode": "Maximum des indicateurs",
  "niveau": 2,
  "acronyme": "CRI",
  "nom": "CRI",
  "service": ""
}');
INSERT INTO refIndic VALUES ('G301', '{
  "id": "G301",
  "composante": "GE",
  "description": "Mode d’alerte de la population",
  "niveau": 1,
  "acronyme": "ALERTE",
  "nom": "Alerte",
  "service": "",
  "thematique": "CRI"
}');
INSERT INTO refIndic VALUES ('G302', '{
  "id": "G302",
  "composante": "GE",
  "description": "Intégration du SDIS dans le PCS",
  "niveau": 1,
  "acronyme": "SDIS",
  "nom": "Intégration",
  "service": "",
  "thematique": "CRI"
}');
INSERT INTO refIndic VALUES ('G303', '{
  "id": "G303",
  "composante": "GE",
  "description": "Mise à jour du PCS",
  "niveau": 1,
  "acronyme": "PCS",
  "nom": "Plan Communal de Sauvegarde",
  "service": "",
  "thematique": "CRI"
}');
INSERT INTO refIndic VALUES ('R', '{
  "id": "R",
  "composante": "RE",
  "description": "Représentations", 
  "niveau": 3,
  "acronyme": "RE",
  "composition": [ "R1", "R2", "R3" ],
  "methode": "Maximum des indicateurs (conscience des aléas, dimension sociale du lieu, perception de la gestion)",
  "nom": "Composante des représentations",
  "service": ""
}');
INSERT INTO refIndic VALUES ('R1', '{
  "id": "R1",
  "composante": "RE",
  "description": "Conscience des aléas",
  "composition": [ "R101", "R103", "R104", "R105" ],
  "methode": "Maximum des indicateurs",
  "niveau": 2,
  "acronyme": "COAL",
  "nom": "COAL",
  "service": ""
}');
INSERT INTO refIndic VALUES ('R101', '{
  "id": "R101",
  "composante": "RE",
  "description": "Sources d''information dont disposent les individus",
  "niveau": 1,
  "acronyme": "COM",
  "nom": "Sources d''information",
  "service": "",
  "thematique": "COAL"
}');
INSERT INTO refIndic VALUES ('R102', '{
  "id": "R102",
  "composante": "RE",
  "description": "Expérience des risques",
  "niveau": 1,
  "acronyme": "ER",
  "nom": "Expérience",
  "service": "",
  "thematique": "COAL"
}');
INSERT INTO refIndic VALUES ('R103', '{
  "id": "R103",
  "composante": "RE",
  "description": "Information active",
  "niveau": 1,
  "acronyme": "IA",
  "nom": "Information active",
  "service": "",
  "thematique": "COAL"
}');
INSERT INTO refIndic VALUES ('R104', '{
  "id": "R104",
  "composante": "RE",
  "description": "Identification des risques côtiers ",
  "niveau": 1,
  "acronyme": "IR",
  "nom": "Identification",
  "service": "",
  "thematique": "COAL"
}');
INSERT INTO refIndic VALUES ('R105', '{
  "id": "R105",
  "composante": "RE",
  "description": "Identification personnelle des risques côtiers",
  "niveau": 1,
  "acronyme": "IP",
  "nom": "Identification personnelle",
  "service": "",
  "thematique": "COAL"
}');
INSERT INTO refIndic VALUES ('R106', '{
  "id": "R106",
  "composante": "RE",
  "description": "Niveau d’inquiétude",
  "niveau": 1,
  "acronyme": "NI",
  "nom": "Inquiétude",
  "service": "",
  "thematique": "COAL"
}');
INSERT INTO refIndic VALUES ('R107', '{
  "id": "R107",
  "composante": "RE",
  "description": "Identification personnelle",
  "niveau": 1,
  "acronyme": "IP",
  "nom": "Identification personnelle",
  "service": "",
  "thematique": "COAL"
}');
INSERT INTO refIndic VALUES ('R2', '{
  "id": "R2",
  "composante": "RE",
  "description": "Dimension sociale",
  "composition": [ "R201", "R202", "R203" ], 
  "methode": "Maximum des indicateurs",
  "niveau": 2,
  "acronyme": "DISO",
  "nom": "DISO",
  "service": ""
}');
INSERT INTO refIndic VALUES ('R201', '{
  "id": "R201",
  "composante": "RE",
  "description": "Dépendance, attachement et identité du lieu",
  "niveau": 1,
  "acronyme": "DP",
  "nom": "Sens du lieu",
  "service": "",
  "thematique": "DISO"
}');
INSERT INTO refIndic VALUES ('R202', '{
  "id": "R202",
  "composante": "RE",
  "description": "Valorisation sociale du cadre de vie littorale",
  "niveau": 1,
  "acronyme": "VALOR",
  "nom": "Valorisation",
  "service": "",
  "thematique": "DISO"
}');
INSERT INTO refIndic VALUES ('R203', '{
  "id": "R203",
  "composante": "RE",
  "description": "Vie associative en lien avec les risques côtiers",
  "niveau": 1,
  "acronyme": "ASSORIS",
  "nom": "Association",
  "service": "",
  "thematique": "DISO"
}');
INSERT INTO refIndic VALUES ('R204', '{
  "id": "R204",
  "composante": "RE",
  "description": "Activités en lien avec la mer",
  "niveau": 1,
  "acronyme": "ACTMER",
  "nom": "Activités",
  "service": "",
  "thematique": "DISO"
}');
INSERT INTO refIndic VALUES ('R3', '{
  "id": "R3",
  "composante": "RE",
  "description": "Perception",
  "composition": [ "R301", "R302", "R303" ],
  "methode": "Maximum des indicateurs",
  "niveau": 2,
  "acronyme": "GEST",
  "nom": "GEST",
  "service": ""
}'); 
INSERT INTO refIndic VALUES ('R301', '{
  "id": "R301",
  "composante": "RE",
  "description": "Pratiques individuelles de prévention et/ou de protection",
  "niveau": 1,
  "acronyme": "IND",
  "nom": "Pratiques individuelles",
  "service": "",
  "thematique": "GEST"
}');
INSERT INTO refIndic VALUES ('R302', '{
  "id": "R302",
  "composante": "RE",
  "description": "Pratiques collectives de prévention et/ou de protection",
  "niveau": 1,
  "acronyme": "CO",
  "nom": "Pratiques collectives",
  "service": "",
  "thematique": "GEST"
}');
INSERT INTO refIndic VALUES ('R303', '{
  "id": "R303",
  "composante": "RE",
  "description": "Confiance et légitimité dans la gestion des risques côtiers",
  "niveau": 1,
  "acronyme": "GES",
  "nom": "Confiance et légitimité",
  "service": "",
  "thematique": "GEST"
}');
INSERT INTO refIndic VALUES ('I', '{
  "id": "I",
  "composante": "IT",
  "composition": [ "A", "E", "G", "R" ],
  "description": "Indices",
  "niveau": 3,
  "acronyme": "IT",
  "nom": "Indices composites",
  "service": ""
}');
INSERT INTO refIndic VALUES ('I1', '{
  "id": "I1",
  "composante": "IT",
  "composition": [ "A", "E", "G", "R" ],
  "description": "Globaux",
  "niveau": 2,
  "acronyme": "SYST",
  "nom": "SYST",
  "service": ""
}');
INSERT INTO refIndic VALUES ('I101', '{
  "id": "I101",
  "composante": "IT",
  "nom": "Systémique",
  "description": "Aléas * Enjeux * (6-Gestion + 6-Représentation)",
  "composition": [ "A", "E", "G", "R" ],
  "methode": "Aléas * Enjeux * (6-Gestion + 6-Représentation)",
  "niveau": 1,
  "acronyme": "GLOB",
  "service": "",
  "thematique": "SYST"
}'); 
INSERT INTO refIndic VALUES ('I102', '{
  "id": "I102",
  "composante": "IT",
  "nom": "Risque",
  "composition": [ "A", "E" ],
  "methode": "Normalisation du produit entre les aléas et les enjeux",
  "description": "Aléas * Enjeux",
  "niveau": 1,
  "acronyme": "RISK",
  "service": "",
  "thematique": "SYST"
}');
INSERT INTO refIndic VALUES ('I2', '{
  "id": "I2",
  "composante": "IT",
  "composition": [ "A", "E", "G", "R" ],
  "description": "Transverses",
  "niveau": 2,
  "acronyme": "TRANS",
  "nom": "TRANS",
  "service": ""
}');
INSERT INTO refIndic VALUES ('I221', '{
  "id": "I221",
  "composante": "IT",
  "nom": "Opérationnel",
  "composition": [ "A", "E303", "E304", "G104", "G204", "G301", "R101", "R103", "R201" ],
  "methode": "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d''indicateurs",
  "description": "Actions possibles dans l'i'mmédiat",
  "niveau": 1,
  "acronyme": "OPE",
  "service": "",
  "thematique": "TRANS"
}');
INSERT INTO refIndic VALUES ('I231', '{
  "id": "I231",
  "composante": "IT",
  "nom": "Stratégique",
  "composition": [ "A", "E103", "E202", "E203", "E301", "E302", "G101", "G106", "G108", "G302", "R104", "R105", "R201", "R303" ],
  "methode": "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d''indicateurs",
  "description": "Actions possibles à terme",
  "niveau": 1,
  "acronyme": "STRAT",
  "service": "",
  "thematique": "TRANS"
}');
INSERT INTO refIndic VALUES ('I201', '{
  "id": "I201",
  "composante": "IT",
  "description": "Vulnérabilité du bâti (racine)",
  "composition": [ "A1", "A2" , "E303" ,  "E304" ,  "G3" ,  "E102" ],
  "methode": "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d''indicateurs",
  "niveau": 1,
  "acronyme": "BATI",
  "nom": "Matériel (racine)",
  "service": "",
  "thematique": "TRANS"
}'); 
INSERT INTO refIndic VALUES ('I202', '{
  "id": "I202",
  "composante": "IT",
  "nom": "Matériel (somme)",
  "description": "Vulnérabilité du bâti (moyenne)",
  "composition": [ "A1", "A2" , "E303" ,  "E304" ,  "G3" ,  "E102" ],
  "methode": "Moyenne arithmétique des indicateurs",
  "niveau": 1,
  "acronyme": "BATISOM",
  "service": "",
  "thematique": "TRANS"
}');
INSERT INTO refIndic VALUES ('I203', '{
  "id": "I203",
  "composante": "IT",
  "nom": "Matériel (produit)",
  "description": "Vulnérabilité du bâti (produit)",
  "composition": [ "A1", "A2" , "E303" ,  "E304" ,  "G3" ,  "E102" ],
  "methode": "Produit des indicateurs",
  "niveau": 1,
  "acronyme": "BATIPROD",
  "service": "",
  "thematique": "TRANS"
}');
INSERT INTO refIndic VALUES ('I211', '{
  "id": "I211",
  "composante": "IT",
  "nom": "Submersion (racine)",
  "composition": [ "A201", "E303", "E101", "E102", "E104", "E106", "G101", "G106" ],
  "methode": "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d''indicateurs",
  "description": "Vulnérabilité à la submersion (racine)",
  "niveau": 1,
  "acronyme": "SUB",
  "service": "",
  "thematique": "TRANS"
}');
INSERT INTO refIndic VALUES ('I212', '{
  "id": "I212",
  "composante": "IT",
  "nom": "Submersion (somme)",
  "description": "Vulnérabilité à la submersion (moyenne)",
  "composition": [ "A201", "E303", "E101", "E102", "E104", "E106", "G101", "G106" ],
  "methode": "Moyenne arithmétique des indicateurs",
  "niveau": 1,
  "acronyme": "SUBSOM",
  "service": "",
  "thematique": "TRANS"
}');
INSERT INTO refIndic VALUES ('I213', '{
  "id": "I213",
  "composante": "IT",
  "nom": "Submersion (produit)",
  "description": "Vulnérabilité à la submersion (produit)",
  "composition": [ "A201", "E303", "E101", "E102", "E104", "E106", "G101", "G106" ],
  "methode": "Produit des indicateurs",
  "niveau": 1,
  "acronyme": "SUMPROD",
  "service": "",
  "thematique": "TRANS"
}');