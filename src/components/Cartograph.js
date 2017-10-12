import React, { Component } from 'react';
import { DropdownButton, MenuItem, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ReactHighmaps from 'react-highcharts/ReactHighmaps';

import Geom_CAR200 from './Geom_CAR200'; /* Rendre dynamique selon le choix d'epci */
import Geom_COM from './Geom_COM';
import Geom_EPCI from './Geom_EPCI';

export default class Cartograph extends Component {

	constructor(props) {
	  super(props);
	  this.handleInput = this.handleInput.bind(this);
	  this.triSource = this.triSource.bind(this);
	  this.state = {
		input : 0,
	  }
	}

	/* Fonctions pour les options de visualisation */
	handleInput(e) {
		this.setState({ input: e });
	}
	triSource(input) {
		let choixMenu = [
			<li key={ input.length + 3} className="divider"></li>,
			<h6 key={ input.length + 4 }> >  Agrégations</h6>,
			<MenuItem eventKey={"a"} key={ input.length } onSelect={ this.handleInput } bsSize="xsmall"> Moyenne </MenuItem>,
			<MenuItem eventKey={"b"} key={ input.length + 1 } onSelect={ this.handleInput } bsSize="xsmall"> Maximum </MenuItem>,
			<MenuItem eventKey={"c"} key={ input.length + 2 } onSelect={ this.handleInput } bsSize="xsmall" disabled> ... </MenuItem>
		]
		if (input.length === 1) {
			return (
		      	<div>
		      	<OverlayTrigger trigger={['hover', 'focus']} placement="top" 
		      		overlay={(<Tooltip id="tooltip">Sélectionner plusieurs sources pour les comparer et les combiner</Tooltip>)}>
			      	<DropdownButton title="" id="bg-nested-dropdown" bsSize="xsmall" className="btn-primary glyphicon glyphicon-duplicate disabled">
			      		{ choixMenu }
		      	    </DropdownButton>
		      	</OverlayTrigger>

	      	    </div>			)
		} else {
			// Ajoute au début de l'array chaque élément source
			choixMenu.unshift(
				input.map((source, idx) =>
					<MenuItem eventKey={ idx } key={ idx } onSelect={ this.handleInput } bsSize="xsmall"> { source } </MenuItem>
				)
			)
			return (
		      	<div>
		      	<OverlayTrigger trigger={['hover', 'focus']} placement="top" 
		      		overlay={(<Tooltip id="tooltip">Comparer et combiner les sources</Tooltip>)}>
			      	<DropdownButton title="" id="bg-nested-dropdown" bsSize="xsmall" className="btn-primary glyphicon glyphicon-duplicate">
			      		{ choixMenu }
		      	    </DropdownButton>
		      	</OverlayTrigger>

	      	    </div>
				)			
		}
	}

	/* Fonction de mise en forme des identifiants pour correspondre aux options Highmaps */
	codage(input, store) {
		input.map((obj) => store.push({ code: obj.id_car200 }))
	}

	render() {
		let scores = this.props.scores;
		let input = this.state.input;
		let nbcar = scores[0].length;
		console.log(nbcar);

		let codeScore = []; // stockage du résultat
		
		/* COMBINAISON DES SOURCES */


		/* Moyenne des sources sous forme d'arrays clé:valeur */
		if (input === "a") {

		/* Maximum des sources sous forme d'arrays clé:valeur */
		} else if (input === "b") {

		} else {
		/* Données complètes sous forme d'arrays clé:valeur */
		  scores[input].map((obj, idx) => (
		  	codeScore.push([obj.id_car200, obj.score_indicateur, obj.date_indicateur])
		  	));			
		};

		/* Attribution du titre */	
		let epci = this.props.epci;
		let acro = this.props.sources[this.state.input];
		let dates = [...new Set(codeScore[2])][2];

		let title = acro;
		let dbfiche = this.props.dbfiche;
		dbfiche.map((obj) => {
			if (acro === obj.acronyme_fiche) {	
				return(title = obj.description_fiche)
			} else { return(null) }
		});

		/* Tri des observations en fonction du score : */
		let discretisation = [1, 2, 3, 4, 5].map((score) => 
			this.props.scores[0].filter((obj) => 
				(obj.score_indicateur === score)));

		/* Tri des identifiants en fonction de la classe : */
		let classe1 = [];
		let classe2 = [];
		let classe3 = [];
		let classe4 = [];
		let classe5 = [];

		[classe1, classe2, classe3, classe4, classe5].map((classe, idx) =>
			this.codage(discretisation[idx], classe));



		let config = {
			chart: {
			  spacingBottom: 20,
			  plotBackgroundColor: null,
			},
			title: { 
			  text: epci
			},

			subtitle: {
			    text: title +' ('+dates+')'
			},

	        credits: {
	        	text: 'Données fictives (IUEM, 2017)'
	        },

			legend: {
            	title: {
	                text: 'Score'
            	},
            	borderColor: 'rgba(30,30,30,1)',
            	backgroundColor: 'white',
	            layout: 'vertical',
	            align: 'right',
	            floating: true,
	            valueDecimals: 0,
	            symbolRadius: 0,
	            symbolHeight: 14
	        },

	        mapNavigation: {
	            enabled: true,
	            buttonOptions: {
	                theme: {
	                    fill: 'white',
	                    'stroke-width': 1,
	                    stroke: 'silver',
	                },
	                align: 'right'
	            }
	        },

	        colorAxis: {
	            dataClasses: [{
	                name: "5",
	                from: 4.5,
	                to: 5.5,
	                color: "#bd0026"
	            }, {
	                name: "4",
	                from: 3.5,
	                to: 4.5,
	                color: "#f03b20"
	            }, {
	                name: "3",
	                from: 2.5,
	                to: 3.5,
	                color: "#fd8d3c"
	            }, {
	            	name: "2",
	            	from: 1.5,
	            	to: 2.5,
	            	color: "#fecc5c"
	            }, {
	                name: "1",
	                from: 0.5,
	                to: 1.5,
	                color: "rgba(255,255,178,1)"
	            }]
	        },

	        plotOptions: {
	            series: {
	                tooltip: {
	                    headerFormat: '{point.nom_COM}',
	                    pointFormat: '<b>{point.nom_COM}</b> ({point.id_COM})',
	                    footerFormat: ''
	                }
	            }
	        },

			series: 
				[{
					type: 'map',
					mapData: Geom_CAR200,
					data: codeScore,
					joinBy: ["id_car200", 0],
					keys: ["id_car200", 'value'],
		            borderWidth: 0.1,
		            borderColor: '#ffffb2'
	        	},{
		            mapData: Geom_EPCI,
		            type: 'map',
		            name: 'EPCI',
		            nullColor: 'rgba(255,255,178,0.2)',
		            borderWidth: 1,
		            borderColor: 'rgba(64,64,64,0.7)'
	        	},{
		            type: 'map',
		            mapData: Geom_COM,
		            data: [
		            	{'id_COM':'00037', 'nom_COM':'Trézalouest'},
						{'id_COM':'00085', 'nom_COM':'Plouvieux'},
						{'id_COM':'00135', 'nom_COM':'Lantourloup'},
						{'id_COM':'00165', 'nom_COM':'Locatom'},
						{'id_COM':'00220', 'nom_COM':'Plonévez-les-flots'},
						{'id_COM':'00284', 'nom_COM':'Keralain-sur-mer'},
						{'id_COM':'00296', 'nom_COM':'Sainte-Catherine-de-la-bonne-mer'}
		            ],
		            joinBy: ["id_COM", 0],
		            color: 'rgba(0,0,0,0.002)',
		            borderWidth: 0,
		            borderColor: 'white',
					name: 'nom_COM',
					tooltip: {
		                text: 'id_COM',
		                valueSuffix: 'pts'
		            },
		            states: {
		                hover: {
		                	enabled: true,
		                	borderWidth: 2.5,
		                	borderColor: 'rgba(100, 100, 100, 0.7)'
		                }
		            }
	        	}]

    	};


	    return(
	      <div>
	      	{ this.triSource(this.props.sources) }
	        <ReactHighmaps config={ config } ref="chart"></ReactHighmaps>
	      </div>
	    )
	}
}

