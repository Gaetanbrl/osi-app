export default() => {
  return {
    VS: {
      id: "VS",
      composante: "",
      description: "Vulnérabilité Systèmique",
      composition: [ "RI", "G", "R", "I"],
      methode: "à définir",
      niveau: 5,
      statut: "indice",
      acronyme: "VS",
      nom: "Vulnérabilité Systèmique",
      service: ""
    },
    RI: {
      id: "RI",
      composante: "",
      description: "Risque",
      composition: [ "A", "E" ],
      methode: "à définir",
      niveau: 4,
      statut: "indice",
      acronyme: "RI",
      nom: "Risque",
      service: ""
    },
    A: {
      id: "A",
      composante: "AL",
      description: "Aléas",
      composition: [ "A1", "A2", "A3" ],
      methode: "Maximum des indicateurs thématiques (érosion, submersion, migration dunaire)",
      niveau: 3,
      statut: "indice",
      acronyme: "AL",
      nom: "Composante des aléas",
      service: ""
    },
    A1: {
      id: "A1",
      composante: "AL",
      description: "Erosion",
      composition: [ "A101" ],
      methode: "Distance érodée par an par 100m linéaires",
      niveau: 2,
      statut: "indice",
      acronyme: "ERO",
      nom: "Erosion",
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
    A2: {
      id: "A2",
      composante: "AL",
      description: "Submersion",
      composition: [ "A201", "A202" ],
      methode: "Maximum des indicateurs (submersion et paquets de mer)",
      niveau: 2,
      statut: "indice",
      acronyme: "SUB",
      nom: "Submersion",
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
    A3: {
      id: "A3",
      composante: "AL",
      description: "Migration dunaire",
      composition: [ "A301" ],
      methode: "",
      niveau: 2,
      statut: "indice",
      acronyme: "MIGR",
      nom: "Migration dunaire",
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
      composante: "EN",
      description: "Enjeux",
      composition: [ "E1", "E2","E3","E4"],
      methode: "Moyenne géométrique des indicateurs",
      niveau: 3,
      statut: "indice",
      acronyme: "EN",
      nom: "Composante des enjeux",
      service: ""
    },
    E1: {
      id: "E1",
      composante: "EN",
      description: "Humains",
      composition: [ "E101", "E102", "E103", "E105", "E107", "E108", "E109" ],
      methode: "Maximum des indicateurs",
      niveau: 2,
      statut: "indice",
      acronyme: "HUM",
      nom: "Humains",
      service: ""
    },
    E101: {
      id: "E101",
      composante: "EN",
      description: "Nombre d'habitants",
      niveau: 1,
      acronyme: "POP",
      nom: "Population",
      service: "https://tucuxi.univ-brest.fr/attachments/download/669/E101_ENHUMPOP.pdf",
      thematique: "HUM"
    },
    E102: {
      id: "E102",
      composante: "EN",
      description: "Nombre de bâtiments résidentiels",
      niveau: 1,
      acronyme: "BATI",
      nom: "Logements",
      service: "https://tucuxi.univ-brest.fr/attachments/download/670/E102_ENHUMBATI.pdf",
      thematique: "HUM"
    },
    E103: {
      id: "E103",
      composante: "EN",
      description: "Capacité d'accueil des Etablissements Recevant du Public",
      niveau: 1,
      acronyme: "ERP",
      nom: "Capacité d'accueil",
      service: "https://tucuxi.univ-brest.fr/attachments/download/671/E103_ENHUMERP.pdf",
      thematique: "HUM"
    },
    E105: {
      id: "E105",
      composante: "EN",
      description: "Pourcentage de personnes de moins de 10 ou de plus de plus de 65 ans",
      niveau: 1,
      acronyme: "PERVUL-PCT",
      nom: "Population vulnérable (%)",
      service: "https://tucuxi.univ-brest.fr/attachments/download/672/E105_ENHUMPERVUL.pdf",
      thematique: "HUM"
    },
    E107: {
      id: "E107",
      composante: "EN",
      description: "Part des ménages à bas revenu",
      niveau: 1,
      acronyme: "BAREV-PCT",
      nom: "Ménages à bas revenu (%)",
      service: "https://tucuxi.univ-brest.fr/attachments/download/673/E107_ENHUMBAREV.pdf",
      thematique: "HUM"
    },
    E108: {
      id: "E108",
      composante: "EN",
      description: "Part des résidences secondaires",
      niveau: 1,
      acronyme: "SECOND",
      nom: "Résidences secondaires",
      service: "https://tucuxi.univ-brest.fr/attachments/download/668/E108_ENHUMSECOND.pdf",
      thematique: "HUM"
    },
    E109: {
      id: "E109",
      composante: "EN",
      description: "Capacité d’hébergement touristique",
      niveau: 1,
      acronyme: "TOURIST",
      nom: "Hébergement touristique",
      service: "https://tucuxi.univ-brest.fr/attachments/download/674/E109_ENHUMTOURIS.pdf",
      thematique: "HUM"
    },
    E2: {
      id: "E2",
      composante: "EN",
      description: "Economiques",
      composition: [ "E201", "E202", "E203", "E205" ],
      methode: "Maximum des indicateurs",
      niveau: 2,
      statut: "indice",
      acronyme: "ECO",
      nom: "Economiques",
      service: ""
    },
    E201: {
      id: "E201",
      composante: "EN",
      description: "Nombre de travailleurs",
      niveau: 1,
      acronyme: "TRAV",
      nom: "Emploi",
      service: "https://tucuxi.univ-brest.fr/attachments/download/675/E201_ENECOTRAV.pdf",
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
    E205: {
      id: "E205",
      composante: "EN",
      description: "Surface occupée par l'agriculture",
      niveau: 1,
      acronyme: "AGRI",
      nom: "Agriculture",
      service: "https://tucuxi.univ-brest.fr/attachments/download/676/E205_ENECOAGRI.pdf",
      thematique: "ECO"
    },
    E3: {
      id: "E3",
      composante: "EN",
      description: "Structurels",
      composition: [ "E301", "E302", "E303", "E304", "E305"],
      methode: "Maximum des indicateurs",
      niveau: 2,
      statut: "indice",
      acronyme: "STR",
      nom: "Structurels",
      service: ""
    },
    E301: {
      id: "E301",
      composante: "EN",
      description: "Localisation des établissements industriels à risque",
      niveau: 1,
      acronyme: "INDRISQ",
      nom: "Suraccident",
      service: "https://tucuxi.univ-brest.fr/attachments/download/677/E301_ENSTRINDRISQ.pdf",
      thematique: "STR"
    },
    E302: {
      id: "E302",
      composante: "EN",
      description: "Présence/Nombre de points sensibles",
      niveau: 1,
      acronyme: "NEVRAL",
      nom: "Réseaux sensibles",
      service: "",
      thematique: "STR"
    },
    E303: {
      id: "E303",
      composante: "EN",
      description: "Part du linéaire côtier protégé par des ouvrages",
      niveau: 1,
      acronyme: "DIG",
      nom: "Protections contre la mer",
      service: "https://tucuxi.univ-brest.fr/attachments/download/698/E303_ENSTRDIG.pdf",
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
      service: "https://tucuxi.univ-brest.fr/attachments/download/721/E305_ENSTRSECOUR.pdf",
      thematique: "STR"
    },
    E4: {
      id: "E4",
      composante: "EN",
      description: "Patrimoine naturel et culturel",
      composition: [ "E306", "E402"],
      methode: "Maximum des indicateurs",
      niveau: 2,
      statut: "indice",
      acronyme: "PAT",
      nom: "Patrimoniaux",
      service: ""
    },
    E306: {
      id: "E306",
      composante: "EN",
      description: "Patrimoine historique et architectural",
      niveau: 1,
      acronyme: "PATRIM",
      nom: "Patrimoine culturel",
      service: "https://tucuxi.univ-brest.fr/attachments/download/699/E306_ENPATPATRIM.pdf",
      thematique: "PAT"
    },
    E402: {
      id: "E402",
      composante: "EN",
      description: "Nombre de zonages environnementaux",
      niveau: 1,
      acronyme: "PATNAT",
      nom: "Patrimoine naturel",
      service: "https://tucuxi.univ-brest.fr/attachments/download/722/E402_ENPATNAT.pdf",
      thematique: "PAT"
    },
    G: {
      id: "G",
      composante: "GE",
      description: "Gestion",
      composition: [ "G1", "G2", "G3", "G4", "G5"],
      methode: "Maximum des indicateurs (prévention et anticipation, sensibilisation, gestion de crise)",
      niveau: 4,
      statut: "indice",
      acronyme: "GE",
      nom: "Composante de la gestion",
      service: ""
    },
    G1: {
      id: "G1",
      composante: "GE",
      description: "Maîtrise de l’urbanisation",
      composition: [ "G101", "G102"],
      methode: "Maximum des indicateurs",
      niveau: 2,
      statut: "indice",
      acronyme: "MURBA",
      nom: "Maîtrise de l’urbanisation",
      service: ""
    },
    G101: {
      id: "G101",
      composante: "GE",
      description: "Contraintes de constructibilité en zone d’aléas",
      niveau: 1,
      acronyme: "URBA",
      nom: "Urbanisme",
      service: "https://tucuxi.univ-brest.fr/attachments/download/701/G101_Urba.pdf",
      thematique: "MURBA"
    },
    G102: {
      id: "G102",
      composante: "GE",
      description: "Etat général du PPRL",
      niveau: 1,
      acronyme: "PPRL",
      nom: "PPRL",
      service: "https://tucuxi.univ-brest.fr/attachments/download/702/G102_PPRL.pdf",
      thematique: "MURBA"
    },
    G2: {
      id: "G2",
      composante: "GE",
      description: "Stratégie locale",
      composition: [ "G103", "G104", "G105", "G106", "G107", "G108", "G109", "G110", "G111"],
      methode: "Maximum des indicateurs",
      niveau: 2,
      statut: "indice",
      acronyme: "STRATLOC",
      nom: "Stratégie locale",
      service: ""
    },
    G103: {
      id: "G103",
      composante: "GE",
      description: "Mise en place de la compétence GEMAPI",
      niveau: 1,
      acronyme: "GEMAPI1",
      nom: "Compétence GEMAPI",
      service: "https://tucuxi.univ-brest.fr/attachments/download/703/G103_GEMAPI.pdf",
      thematique: "STRATLOC"
    },
    G104: {
      id: "G104",
      composante: "GE",
      description: "Etat des ouvrages GEMAPI2",
      niveau: 1,
      acronyme: "GEMAPI2",
      nom: "Etat des ouvrages GEMAPI2",
      service: "https://tucuxi.univ-brest.fr/attachments/download/704/G104_OUV_GEMAPI2.pdf",
      thematique: "STRATLOC"
    },
    G105: {
      id: "G105",
      composante: "GE",
      description: "Capacités humaines sur les risques côtiers",
      niveau: 1,
      acronyme: "HUM",
      nom: "Investissement humain",
      service: "https://tucuxi.univ-brest.fr/attachments/download/705/G105_CapHum.pdf",
      thematique: "STRATLOC"
    },
    G106: {
      id: "G106",
      composante: "GE",
      description: "Démarche locale de gestion des risques",
      niveau: 1,
      acronyme: "STRATE",
      nom: "Démarche locale (PAPI, SL)",
      service: "https://tucuxi.univ-brest.fr/attachments/download/706/G106_Strate.pdf",
      thematique: "STRATLOC"
    },
    G107: {
      id: "G107",
      composante: "GE",
      description: "Acteurs partenaires de la démarche locale",
      niveau: 1,
      acronyme: "ACTEUR",
      nom: "Intégration des acteurs",
      service: "https://tucuxi.univ-brest.fr/attachments/download/707/G107_IntActDem.pdf",
      thematique: "STRATLOC"
    },
    G108: {
      id: "G108",
      composante: "GE",
      description: "Intégration extraterritoriale",
      niveau: 1,
      acronyme: "EXTRA",
      nom: "Intégration extraterritoriale",
      service: "https://tucuxi.univ-brest.fr/attachments/download/708/G108_DemExtra.pdf",
      thematique: "STRATLOC"
    },
    G109: {
      id: "G109",
      composante: "GE",
      description: "Actions dans chaque axe du PAPI",
      niveau: 1,
      acronyme: "PAPI1",
      nom: "Actions",
      service: "https://tucuxi.univ-brest.fr/attachments/download/709/G109_ActPAPI1.pdf",
      thematique: "STRATLOC"
    },
    G110: {
      id: "G110",
      composante: "GE",
      description: "Mise en œuvre des actions du PAPI",
      niveau: 1,
      acronyme: "PAPI2",
      nom: "Mise en œuvre",
      service: "https://tucuxi.univ-brest.fr/attachments/download/710/G110_MeOPAPI2.pdf",
      thematique: "STRATLOC"
    },
    G111: {
      id: "G111",
      composante: "GE",
      description: "Etat de la stratégie locale (relocalisation)",
      niveau: 1,
      acronyme: "RELOC",
      nom: "Stratégie locale",
      service: "https://tucuxi.univ-brest.fr/attachments/download/711/G111_Reloc.pdf",
      thematique: "STRATLOC"
    },
    G3: {
      id: "G3",
      composante: "GE",
      description: "Gestion de crise",
      composition: [ "G301", "G302", "G303" ],
      methode: "Maximum des indicateurs",
      niveau: 2,
      statut: "indice",
      acronyme: "CRI",
      nom: "Gestion de crise",
      service: ""
    },
    G301: {
      id: "G301",
      composante: "GE",
      description: "Moyens d’alerte",
      niveau: 1,
      acronyme: "ALERTE",
      nom: "Alerte",
      service: "https://tucuxi.univ-brest.fr/attachments/download/719/G301_Alert.pdf",
      thematique: "CRI"
    },
    G302: {
      id: "G302",
      composante: "GE",
      description: "Intégration du SDIS dans le PCS",
      niveau: 1,
      acronyme: "SDIS",
      nom: "Intégration",
      service: "https://tucuxi.univ-brest.fr/attachments/download/718/G302_IntSDIS.pdf",
      thematique: "CRI"
    },
    G303: {
      id: "G303",
      composante: "GE",
      description: "Mise à jour du PCS",
      niveau: 1,
      acronyme: "PCS",
      nom: "Plan Communal de Sauvegarde",
      service: "https://tucuxi.univ-brest.fr/attachments/download/720/G303_MJ_PCS.pdf",
      thematique: "CRI"
    },
    G4: {
      id: "G4",
      composante: "GE",
      description: "Sensibilisation",
      composition: [ "G201", "G202", "G204", "G205", "G206" ],
      methode: "Maximum des indicateurs",
      niveau: 2,
      statut: "indice",
      acronyme: "SEN",
      nom: "Sensibilisation",
      service: ""
    },
    G201: {
      id: "G201",
      composante: "GE",
      description: "Evènements de sensibilisation dans les établissements scolaires",
      niveau: 1,
      acronyme: "SCOL",
      nom: "Scolaires",
      service: "https://tucuxi.univ-brest.fr/attachments/download/716/G201_EvetScol.pdf",
      thematique: "SEN"
    },
    G202: {
      id: "G202",
      composante: "GE",
      description: "Présence d’associations sur les risques côtiers",
      niveau: 1,
      acronyme: "ASSO",
      nom: "Association",
      service: "https://tucuxi.univ-brest.fr/attachments/download/712/G202_Asso.pdf",
      thematique: "SEN"
    },
    G204: {
      id: "G204",
      composante: "GE",
      description: "Repères inondation et de recul du trait de côte",
      niveau: 1,
      acronyme: "REP",
      nom: "Repères",
      service: "https://tucuxi.univ-brest.fr/attachments/download/714/G204_Rep.pdf",
      thematique: "SEN"
    },
    G205: {
      id: "G205",
      composante: "GE",
      description: "Modes de diffusion du DICRIM ",
      niveau: 1,
      acronyme: "DICRIM1",
      nom: "DICRIM Diffusion",
      service: "https://tucuxi.univ-brest.fr/attachments/download/715/G205_DICRIM1.pdf",
      thematique: "SEN"
    },
    G206: {
      id: "G206",
      composante: "GE",
      description: "Analyse pédagogique du DICRIM",
      niveau: 1,
      acronyme: "DICRIM2",
      nom: "DICRIM Pédagogie",
      service: "https://tucuxi.univ-brest.fr/attachments/download/717/G206_DICRIM2.pdf",
      thematique: "SEN"
    },
    G5: {
      id: "G5",
      composante: "GE",
      description: "Connaissance",
      composition: [ "G203"],
      methode: "Maximum des indicateurs",
      niveau: 2,
      statut: "indice",
      acronyme: "CONN",
      nom: "Connaissance",
      service: ""
    },
    G203: {
      id: "G203",
      composante: "GE",
      description: "Publications scientifiques sur les risques côtiers",
      niveau: 1,
      acronyme: "PUBLI",
      nom: "Publications scientifiques",
      service: "https://tucuxi.univ-brest.fr/attachments/download/713/G203_PblSci.pdf",
      thematique: "CONN"
    },
    R: {
      id: "R",
      composante: "RE",
      description: "Représentations",
      niveau: 4,
      statut: "indice",
      acronyme: "RE",
      composition: [ "R1", "R2", "R3" ],
      methode: "Maximum des indicateurs (conscience des aléas, dimension sociale du lieu, perception de la gestion)",
      nom: "Composante des représentations",
      service: ""
    },
    R1: {
      id: "R1",
      composante: "RE",
      description: "Conscience des risques",
      composition: [ "R102", "R103", "R104", "R105", "R106", "R201", "R204", "R301" ],
      methode: "Maximum des indicateurs",
      niveau: 2,
      statut: "indice",
      acronyme: "CONSRISQ",
      nom: "Conscience des risques",
      service: ""
    },
    R102: {
      id: "R102",
      composante: "RE",
      description: "Expérience personnelle du risque",
      niveau: 1,
      acronyme: "ER",
      nom: "Expérience personnelle",
      service: "",
      thematique: "CONSRISQ"
    },
    R103: {
      id: "R103",
      composante: "RE",
      description: "Information active",
      niveau: 1,
      acronyme: "IA",
      nom: "Information active",
      service: "",
      thematique: "CONSRISQ"
    },
    R104: {
      id: "R104",
      composante: "RE",
      description: "Problématiques locales",
      niveau: 1,
      acronyme: "PROLOC",
      nom: "Problématiques locales",
      service: "",
      thematique: "CONSRISQ"
    },
    R105: {
      id: "R105",
      composante: "RE",
      description: "Attention personnelle",
      niveau: 1,
      acronyme: "AP",
      nom: "Attention personnelle",
      service: "",
      thematique: "CONSRISQ"
    },
    R106: {
      id: "R106",
      composante: "RE",
      description: "Niveau d’inquiétude",
      niveau: 1,
      acronyme: "NI",
      nom: "Inquiétude",
      service: "",
      thematique: "CONSRISQ"
    },
    R201: {
      id: "R201",
      composante: "RE",
      description: "Sens du lieu",
      niveau: 1,
      acronyme: "DP",
      nom: "Sens du lieu",
      service: "",
      thematique: "CONSRISQ"
    },
    R204: {
      id: "R204",
      composante: "RE",
      description: "Activités en lien avec la mer",
      niveau: 1,
      acronyme: "ACTMER",
      nom: "Activités en lien avec la mer",
      service: "",
      thematique: "CONSRISQ"
    },
    R301: {
      id: "R301",
      composante: "RE",
      description: "Pratiques individuelles",
      niveau: 1,
      acronyme: "IND",
      nom: "Pratiques individuelles",
      service: "",
      thematique: "CONSRISQ"
    },
    R2: {
      id: "R2",
      composante: "RE",
      description: "Evaluation des pratiques collectives",
      composition: [ "R302", "R202", "R203" ],
      methode: "Maximum des indicateurs",
      niveau: 2,
      statut: "indice",
      acronyme: "EVAPRACOL",
      nom: "Evaluation des pratiques collectives",
      service: ""
    },
    R302: {
      id: "R302",
      composante: "RE",
      description: "Renforcement de l'existant",
      niveau: 1,
      acronyme: "RENFEX",
      nom: "Renforcement de l'existant",
      service: "",
      thematique: "EVAPRACOL"
    },
    R202: {
      id: "R202",
      composante: "RE",
      description: "Impact sur l'existant",
      niveau: 1,
      acronyme: "IMPEX",
      nom: "Impact sur l'existant",
      service: "",
      thematique: "EVAPRACOL"
    },
    R203: {
      id: "R203",
      composante: "RE",
      description: "Mesures d'évacuation",
      niveau: 1,
      acronyme: "MESEVAC",
      nom: "Mesures d'évacuation",
      service: "",
      thematique: "EVAPRACOL"
    },
    R3: {
      id: "R3",
      composante: "RE",
      description: "Confiance",
      composition: [ "R303", "R101"],
      methode: "Maximum des indicateurs",
      niveau: 2,
      statut: "indice",
      acronyme: "CONF",
      nom: "Confiance",
      service: ""
    },
    R303: {
      id: "R303",
      composante: "RE",
      description: "Intéractions locales",
      niveau: 1,
      acronyme: "INTERLOC",
      nom: "Intéractions locales",
      service: "",
      thematique: "CONF"
    },
    R101: {
      id: "R101",
      composante: "RE",
      description: "Interactions médiatisées",
      niveau: 1,
      acronyme: "INTERMED",
      nom: "Interactions médiatisées",
      service: "",
      thematique: "CONF"
    },
    I: {
      id: "I",
      composante: "IT",
      composition: [],
      description: "Indices",
      niveau: 4,
      statut: "indice",
      acronyme: "IT",
      nom: "Indices composites",
      service: ""
    },
    I1: {
      id: "I1",
      composante: "IT",
      composition: [ "A", "E", "G", "R" ],
      description: "Globaux",
      niveau: 2,
      statut: "indice",
      acronyme: "SYST",
      nom: "SYST",
      service: ""
    },
    I101: {
      id: "I101",
      composante: "IT",
      nom: "Systémique",
      description: "Aléas * Enjeux * (6-Gestion + 6-Représentation)",
      composition: [ "A", "E", "G", "R" ],
      methode: "Aléas * Enjeux * (6-Gestion + 6-Représentation)",
      niveau: 1,
      statut: "indice",
      acronyme: "GLOB",
      service: "",
      thematique: "SYST"
    },
    I102: {
      id: "I102",
      composante: "IT",
      nom: "Risque",
      composition: [ "A", "E" ],
      methode: "Normalisation du produit entre les aléas et les enjeux",
      description: "Aléas * Enjeux",
      niveau: 1,
      statut: "indice",
      acronyme: "RISK",
      service: "",
      thematique: "SYST"
    },
    I2: {
      id: "I2",
      composante: "IT",
      composition: [ "A", "E", "G", "R" ],
      description: "Transverses",
      niveau: 2,
      statut: "indice",
      acronyme: "TRANS",
      nom: "TRANS",
      service: ""
    },
    I221: {
      id: "I221",
      composante: "IT",
      nom: "Opérationnel",
      composition: [ "A", "E303", "E304", "G104", "G204", "G301", "R101", "R103", "R201" ],
      methode: "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d'indicateurs",
      description: "Actions possibles dans l'immédiat",
      niveau: 1,
      statut: "indice",
      acronyme: "OPE",
      service: "",
      thematique: "TRANS"
    },
    I231: {
      id: "I231",
      composante: "IT",
      nom: "Stratégique",
      composition: [ "A", "E103", "E202", "E203", "E301", "E302", "G101", "G106", "G108", "G302", "R104", "R105", "R201", "R303" ],
      methode: "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d'indicateurs",
      description: "Actions possibles à terme",
      niveau: 1,
      statut: "indice",
      acronyme: "STRAT",
      service: "",
      thematique: "TRANS"
    },
    I201: {
      id: "I201",
      composante: "IT",
      description: "Vulnérabilité du bâti (racine)",
      composition: [ "A1", "A2" , "E303" ,  "E304" ,  "G3" ,  "E102" ],
      methode: "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d'indicateurs",
      niveau: 1,
      statut: "indice",
      acronyme: "BATI",
      nom: "Matériel (racine)",
      service: "",
      thematique: "TRANS"
    },
    I202: {
      id: "I202",
      composante: "IT",
      nom: "Matériel (somme)",
      description: "Vulnérabilité du bâti (moyenne)",
      composition: [ "A1", "A2" , "E303" ,  "E304" ,  "G3" ,  "E102" ],
      methode: "Moyenne arithmétique des indicateurs",
      niveau: 1,
      statut: "indice",
      acronyme: "BATISOM",
      service: "",
      thematique: "TRANS"
    },
    I203: {
      id: "I203",
      composante: "IT",
      nom: "Matériel (produit)",
      description: "Vulnérabilité du bâti (produit)",
      composition: [ "A1", "A2" , "E303" ,  "E304" ,  "G3" ,  "E102" ],
      methode: "Produit des indicateurs",
      niveau: 1,
      statut: "indice",
      acronyme: "BATIPROD",
      service: "",
      thematique: "TRANS"
    },
    I211: {
      id: "I211",
      composante: "IT",
      nom: "Submersion (racine)",
      composition: [ "A201", "E303", "E101", "E102", "E104", "E106", "G101", "G106" ],
      methode: "Normalisation par la maximum de la racine du produit des indicateurs discrétisés sur la racine du nombre d'indicateurs",
      description: "Vulnérabilité à la submersion (racine)",
      niveau: 1,
      statut: "indice",
      acronyme: "SUB",
      service: "",
      thematique: "TRANS"
    },
    I212: {
      id: "I212",
      composante: "IT",
      nom: "Submersion (somme)",
      description: "Vulnérabilité à la submersion (moyenne)",
      composition: [ "A201", "E303", "E101", "E102", "E104", "E106", "G101", "G106" ],
      methode: "Moyenne arithmétique des indicateurs",
      niveau: 1,
      statut: "indice",
      acronyme: "SUBSOM",
      service: "",
      thematique: "TRANS"
    },
    I213: {
      id: "I213",
      composante: "IT",
      nom: "Submersion (produit)",
      description: "Vulnérabilité à la submersion (produit)",
      composition: [ "A201", "E303", "E101", "E102", "E104", "E106", "G101", "G106" ],
      methode: "Produit des indicateurs",
      niveau: 1,
      statut: "indice",
      acronyme: "SUMPROD",
      service: "",
      thematique: "TRANS"
    },
  }
};
