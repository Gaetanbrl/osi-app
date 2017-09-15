import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

import Radiograph from "./Radiograph";
import Cartograph from "./Cartograph";
import Stackgraph from "./Stackgraph";
import Bargraph from "./Bargraph";


export default class Module extends Component {
	
	constructor(props) {
		super(props);
		this.handleType = this.handleType.bind(this);
		this.handleSource = this.handleSource.bind(this);
		this.state = {
			type: 0,
			source: 0,
			scores: null
		};
	}

	handleType(e) {
		let selectionRadio = e.target.value;
		this.setState({ type: selectionRadio });
	}

	handleSource(e) {
		let selectionSource = e.target.value;
		this.setState({ source: selectionSource });
	}

	handleGraph(type) {
	    return (
	        <div>
	            {{
					0: <Radiograph handleType = { this.handleType }/>, 
					1: <Cartograph 
						dbfiche = { this.props.dbfiche } 
						epci = { this.props.epci }
						handleSource = { this.handleSource } 
						sources = { this.props.sources } 
						scores = { this.state.scores }/>, 
					2: <Stackgraph 
						dbfiche = { this.props.dbfiche } 
						epci = { this.props.epci }
						handleSource = { this.handleSource } 
						sources = { this.props.sources } 
						scores = { this.state.scores }/>,
					3: <Bargraph 
						dbfiche = { this.props.dbfiche } 
						epci = { this.props.epci }
						handleSource = { this.handleSource } 
						sources = { this.props.sources } 
						scores = { this.state.scores }/>
	            }[type]}
	        </div>
	    );
	}

	componentDidMount() {
		let api = "http://localhost:3001/score";
		let sources = this.props.sources;
		let datastore = [];

		sources.map((obj) => {
			if (sources != null) {
				fetch(`${ api }/${ obj }`)
				.then(response => response.json())
				.then(jsonresponse => {
				datastore.push(jsonresponse.data);
				this.setState({ scores: datastore });
				})
				.catch(error => console.error(error));
			} return null
		});
	}

	render() {

		let contenu = this.props.sources;
		let titrecontenu = contenu.join(" | ");
		let contenant = ["", "Choro-carroyage", "Aires empilées", "Bars empilées"]

		if (!this.state.scores) {
		  return (<div id="Module" className="container-fluid">
					<div className="panel panel-default">
						<div className="panel-heading clearfix">
							<button 
							className="btn btn-xs btn-default glyphicon glyphicon-remove pull-right" 
							onClick={ this.props.delModule }> 
							</button>

							<h3 className="panel-title"><strong className="text-muted"> Chargement de la donnée en cours ... </strong></h3>

						</div>
					</div>
				</div>
			)

		}
		return (
			<div id="Module" className="container-fluid col-xs-6">
				<div className="panel panel-default">

					<button 
					className="btn btn-xs btn-default glyphicon glyphicon-remove pull-right" 
					onClick={ this.props.delModule }> 
					</button>

					<Breadcrumb className="panel-title">
						<Breadcrumb.Item active>
							Donnée : <strong className="text-muted">{ titrecontenu } </strong>
						</Breadcrumb.Item>
						<Breadcrumb.Item active>
							Type de graphique : <strong className="text-muted">{ contenant[this.state.type] }</strong>
						</Breadcrumb.Item>
					</Breadcrumb>

					{ this.handleGraph(this.state.type) }

				</div>
			</div>
		)
	}
}