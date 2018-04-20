import React, { Component } from 'react';

export default class Jumbo extends Component {

	constructor(props) {
	  super(props);
	  this.close = this.close.bind(this);
	  this.open = this.open.bind(this);
	  this.state = {
		showModal: false
	  };
	}

	close() { this.setState({ showModal: false }) }
	open() { this.setState({ showModal: true }) }

	render() {
		let style = {
			height: '130px',
			padding : '10px'
		};

		return (
			<div className="jumbotron container-fluid " style={style}>
				<h3>Bienvenue sur Osi</h3>
				<p className="text-muted">L'Observatoire Intégré des Risques Côtiers.</p>
			</div>
		)
		
	}
}