import React, { Component } from 'react';

export default class Jumbo extends Component {
  
	render() {
		var style = {
			height: '200px',
			padding : '20px'
		};

		return (
			<div className="jumbotron container-fluid " style={style}>
				<h2>{this.props.epci}</h2>
				<p> Explorez ce territoire fictif à travers {this.props.dbficheCount} indicateurs systémiques.</p>
				<p><a href="http://www.risques-cotiers.fr/fr/boite-a-outils/etude-sur-un-territoire-fictif" className="btn btn-default btn-mg pull-right">A propos</a></p>
			</div>
		)
		
	}
}