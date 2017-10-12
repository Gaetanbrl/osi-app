import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import Module from "./Module";

export default class Valid extends Component {
	
	constructor(props) {
	  super(props);
	  this.addModule = this.addModule.bind(this);
	  this.delModule = this.delModule.bind(this);
	  this.click = this.click.bind(this)
	  this.state = {
	    moduleData: []
	  };
	}

	addModule() {
		let dataSelect = this.props.dataSelect;	
		let moduleData = this.state.moduleData;

		/* Changer la condition <4 pour changer le nombre de modules de visualisation permis  */
		if (dataSelect.length > 0 && this.state.moduleData.length < 4) { 
			this.setState({ 
				moduleData: moduleData.concat([dataSelect]) 
			})
		}
	}

	delModule(e) {
		let moduleReduced = this.state.moduleData;
		let index = moduleReduced.indexOf(e.target.key);
		moduleReduced.splice(index, 1);
		this.setState({
			moduleData: moduleReduced
		});
	}

	click(){
	  this.addModule();
	  this.props.dataReset();
	}

	render() {
		let modules = this.state.moduleData;

		return (
			<div>
				<div className="container-fluid well well-sm">
					<div className="input-group">
						<span className="input-group-addon">Source(s) : </span>
						<span className=""> 
						{ this.props.dataSelect.map((sel, idx) => {
							return(
								<button 
								key={ idx } 
								className="btn btn-xs btn-primary glyphicon glyphicon-remove" 
								onClick={ this.props.dataRemove } 
								value={ sel }> { sel } 
								</button>
								)
						 })
						}
						</span>
						<span className="input-group-btn btn-group">
		   
							<OverlayTrigger 
							trigger={['hover', 'focus']} 
							placement="top" 
							overlay={(<Tooltip id="tooltip">Ajouter un module de visualisation</Tooltip>)}>
								<div>
									<button 
									className="btn btn-lg btn-primary glyphicon glyphicon-eye-open"
									onClick={ this.click }>
									</button>
								</div>
							</OverlayTrigger>

						</span>
					</div>
					</div>

					<h3 className="text-primary"><span className="glyphicon glyphicon-eye-open" /> 5. Visualiser</h3>

					{/* L'élément suivant permet d'ajouter plusieurs modules de visualisation */}
					<div id="Visu" className="container-fluid well well-sm">		
						{ modules.map((data, idx) => (
							<Module 
							dbfiche = { this.props.dbfiche } 
							delModule = { this.delModule }
							epci = { this.props.epci }
							key = { idx } 
							sources = { data } 
							/>
							))}
					</div>

			</div>
		)
	}
}