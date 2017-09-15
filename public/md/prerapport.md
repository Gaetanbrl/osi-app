Fiche d’installation Olivier Marcel

Contribution au développement d’une interface WEB-SIG dans le cadre d’un
observatoire intégré des risques côtiers.

Stage de 5 mois à Géomer (LETG/IUEM, Brest) encadré par Iwan Le Berre

Risque et géomatique décisionnelle : une problématique émergente
================================================================

Avec l’avènement de la « société du risque »^[^1]^, théorisée par U.
Beck dès les années 1980, le temps où la société n’était envisagée que
comme victime passive des risques semble clairement révolue. Organisée
autour d’eux, notre société assume maintenant d’en être au moins
co-productrice. Ainsi, la survenue d’un aléa déclenche quasi
instantanément la recherche d’un responsable. Dès lors, la notion de
« gestion des risques » s’est imposée non seulement comme question de
recherche mais aussi comme compétence/responsabilité territoriale. Cette
notion met l’accent sur les arbitrages inhérents aux politiques de
gestion, et donc sur les moyens de les objectiver, les communiquer et
les légitimer. En effet, tout gestionnaire territorial devant répondre à
(d’) un risque se pose nécessairement cette question : quel est le
« bon » niveau d’investissement pour protéger de manière adéquate les
personnes et les biens ? Au cœur de ces arbitrages se trouve le concept
de vulnérabilité :

« Au départ, il s’agissait simplement d’évaluer l’impact physique de
l’aléa \[…\] en termes de dommage. Peu à peu, on met en évidence la
corrélation entre l’endommagement et la capacité de résistance physique
de l’enjeu, c’est-à-dire, sa fragilité propre. Parallèlement, on
souligne la nécessaire prise en compte de son degré d’exposition. Dans
le même temps, les sciences sociales mettent en évidence l’importance
des facteurs sociaux et montrent qu’il existe une vulnérabilité sociale,
c’est-à-dire une fragilité inhérente aux enjeux, fragilité qui dépend
justement de facteurs cognitifs, socio-économiques, politiques,
juridiques, culturels, etc. »^\ [^2]^.

Il existe maintenant une littérature foisonnante autour de la
vulnérabilité et il est possible d’en retracer, comme l’a fait J.
Birkmann, son expansion conceptuelle au gré de croisements d’études de
cas et d’avancées théoriques^[^3]^.

Ce stage n’a pas pour vocation d’ajouter à l’édifice scientifique sur
les questions de vulnérabilité mais plutôt proposer des pistes pour en
faciliter l’appropriation par les gestionnaires, cela avec les outils de
la géomatique décisionnelle et du géoweb. En effet, à mesure que le
concept scientifique s’est élargi, embrassant jusqu’aux sciences
cognitives, s’est posé le problème des limites de son application : « La
plupart du temps, le concept est utilisé dans un sens restreint qui ne
rend pas compte de sa complexité. Ainsi, les cartes de PPR appelées
cartes de vulnérabilité sont en fait des cartes d’exposition des enjeux
qui ne prennent pas en compte les facteurs inhérents de
fragilité »^[^4]^. Dès lors, il s’agit d’intégrer toute la complexité du
concept de vulnérabilité dans un outil d’aide à la décision.

Contexte transdisciplinaire et philosophie systémique du projet OSIRISC^[^5]^
-----------------------------------------------------------------------------

Ce stage s’inscrit dans le cadre d’OSIRISC (2016-2019), projet porté par
GEOMER, équipe brestoise du laboratoire LEGT (Littoral, environnement,
télédétection, géomatique, UBO/CNRS, Labex Mer), financé par la
Fondation de France (« Quels littoraux pour demain ? Savoirs, pratiques,
vision et représentations de l’avenir ») et faisant suite à l’ANR
COCORISCO (2011-2014).

Un des principaux acquis de COCORISCO est la définition de la
*vulnérabilité systémique* des zones côtières^[^6]^. Traditionnellement
vue comme l’intersection entre aléas et enjeux, la notion de « risques »
est complétée par l’apport de la gestion et des représentations du
littoral. Il s’agit donc d’un système complexe qui résulte de la
combinaison de dynamiques à la fois naturelles et sociales, exacerbées
dans le contexte contemporain du changement climatique et de l’élévation
du niveau marin, mais également de la littoralisation de la population
et de la maritimisation de l’économie mondiale.

En tant que système complexe, l’approche de la vulnérabilité est
nécessairement pluridisciplinaire, impliquant sciences naturalistes pour
l’analyse des *aléas*, sciences humaines et sociales, sciences
économiques et sciences juridiques pour celle des *enjeux*, de la
composante *gestion *et pour celle des *représentations*. Aucune de ces
composantes n'est stabilisée dans le temps et leurs évolutions
respectives modifient régulièrement la vulnérabilité des territoires
côtiers. Si les aléas et les dynamiques morphologiques de certains types
de littoraux, notamment les littoraux d'accumulation, sont plutôt bien
pourvus en moyens de suivi et en indicateurs, il n'en est pas de même
pour l'évolution des enjeux, de la gestion et des représentations qui ne
disposent pas de méthodes et d'outils équivalents. Or, un suivi temporel
intégré de leurs évolutions et des évaluations régulières sont à même
d'améliorer leur connaissance et d'éclairer les stratégies de gestion.

Afin de pallier ces insuffisances, le projet OSIRISC propose
d'expérimenter, en étroite relation avec les gestionnaires praticiens et
les décideurs, un observatoire interdisciplinaire novateur des risques
côtiers mettant en œuvre un suivi des quatre composantes de la
vulnérabilité systémique et définissant des indicateurs pertinents de
leurs dynamiques. En recherchant les meilleurs compromis entre exigences
scientifiques et opérationnalisation des méthodes, la recherche est axée
sur la définition d'indicateurs multicritères des évolutions des 4
composantes de la vulnérabilité côtière.

Un démonstrateur WEB-SIG pour **(**dé)construire un indice composite de
vulnérabilité

L’objectif de long terme du projet OSIRISC est la conception, en
partenariat avec les gestionnaires, d'un observatoire du suivi à long
terme des risques côtiers. Dans ce cadre, ce stage vise à aboutir sur
une démonstration de faisabilité d’un outil WEB-SIG permettant de
construire et de déconstruire un indice composite de vulnérabilité,
cheminement qui répond aux exigences pédagogiques du projet.

Cet outil est pensé comme un prototype, posant des jalons de ce que
pourrait devenir l’observatoire OSIRISC. Il se fonde néanmoins sur une
liste d’indicateurs concertée et qui devra être renseignée avec des
données réelles. Cet outil transversal aux composantes du projet doit
ainsi permettre de tester les indicateurs produits par les différentes
équipes et expérimenter des méthodes de croisement et d’agrégation de
ces indicateurs. Exclusivement développé à partir d’outils libres, il
devra en outre répondre aux besoins des gestionnaires, ce qui impose des
temps d’agilité et une certaine fluidité dans la conception (*cf*.
diagramme de GANTT, ci-après).

Pour permettre aux gestionnaires de se saisir de la complexité du
concept de vulnérabilité, souvent diluée dans un indice dont la
signification est elle-même diluée, l’objectif du projet est de
permettre aux gestionnaires de composer et de décomposer de manière
interactive un indice de vulnérabilité. Cela se fonde sur deux tâches
centrales : élaborer des fiches indicateurs dans un premier temps, et
concevoir un constructeur d’indice dans un second. Ces deux tâches sont
complémentaires, comme le montre le schéma ci-dessous qui vise à
justifier le projet.

Le travail sur les indicateurs est collectif et partagé en quatre
équipes dédiées à chacune des composantes identifiées dans le projet
OSIRISC. Les fiches suivent un modèle unique, élaboré en amont du stage
par Manuelle Phillippe (laboratoire AMURE, partenaire du projet).
Parallèlement à la conception du démonstrateur WEB-SIG, une mission est
de participer à la conception des indicateurs de la composante
« enjeux ». En explicitant ce que l’indicateur mesure, ce qu’il indique,
le protocole pour collecter et traiter la donnée, en évaluant sa
fiabilité et sa pertinence, le travail des fiches peut contribuer à une
meilleure appréhension de la vulnérabilité, à condition de le rendre
accessible sous un format synthétique. Les fiches d’indicateurs
constituent la matière première sur laquelle peut se construire le
démonstrateur. Il faut néanmoins soumettre le travail des composantes
aux parties prenantes du projet (notamment des gestionnaires de
collectivités, d’administrations, etc.), et affiner la sélection sur la
base de tests statistiques de corrélation (ACP, …).

A son tour, l’objectif du démonstrateur est de mettre à nu le processus
de construction d’un indice de vulnérabilité, en validant le contenu des
composantes et les modalités du calcul d’indice. Aboutissant à un
tableau de bord interactif de visualisation de l’indice, le
démonstrateur doit mettre en œuvre l’ensemble des indicateurs,
préalablement produits à l’échelle d’un site pilote. Le choix de ce site
s’est porté sur la Communauté de Communes du Pays Bigouden Sud, cohérent
au regard des compétences des collectivités territoriales sur les
risques, mais aussi des acquis d’expérience des études passées des
membres de l’équipe du projet.

A terme, le démonstrateur est pensé dans un cercle vertueux dans lequel
les lacunes des EPCI voisines peuvent motiver leur investissement :
devenir partie prenante du processus d’élaboration de l’observatoire ;
contribuer à la production des données en suivant les protocoles des
fiches ; donner accès à des données supplémentaires.

Gestion du projet

Le diagramme de GANTT, ci-dessous, planifie l’ensemble des temps du
projet, leurs attendus et leurs enchainements.

Il est à noter que d'autres réunions seront programmées à partir de la
mi-août et jusqu'à la fin du projet, notamment pour définir
l'articulation du prototype avec l’IDG Indigéo et pour tester et valider
son fonctionnement.

Maquette
--------

Les fonctionnalités et les technologies associées seront décrites
ultérieurement.

[^1]:  Beck U., *La société du risque. Sur la voie d’une autre
    modernité*, trad. de l’allemand par L. Bernardi. Paris : Aubier,
    (2001), 521 p.

[^2]:  Veyret Y., Reghezza M. (2006). « Vulnérabilité et risques.
    L’approche récente de la vulnérabilité ». Annales des mines 43
    (2006), 9-13

[^3]:  Birkmann J., “Risk and vulnerability indicators at different
    scales: Applicability, usefulness and policy implications”,
    *Environmental Hazards* 7 (2007) 20–31

[^4]:  Veyret Y., Reghezza M. (2006), *op. cit.*

[^5]:  Cette partie reprend des passages du dossier de présentation
    OSIRISC.

[^6]:  Hénaff, A., Philippe, M., *Gestion des risques d’érosion et de
    submersion marines, guide méthodologique*, Projet COCORISCO (2014)
    153 p. : <http://www.risques-cotiers.fr/>
