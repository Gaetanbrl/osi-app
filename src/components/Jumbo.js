import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

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
			height: '150px',
			padding : '20px'
		};

		return (
			<div className="jumbotron container-fluid " style={style}>
				<h2>{this.props.epci}</h2>
				<Button
				  bsStyle="primary"
				  bsSize="sm"
				  className="pull-right"
				  onClick={this.open}
				>
				  A propos
				</Button>
				<p> Explorez ses {this.props.dbficheCount} indicateurs</p>
				


				<Modal show={this.state.showModal} onHide={this.close}>
				  <Modal.Header closeButton>
				    <Modal.Title>Plonévez-les-quoi ?</Modal.Title>
				  </Modal.Header>
				  <Modal.Body>
					<p> Pour les besoins de ce démonstrateur, des données fictives - mais crédibles - ont été produites sur un territoire imaginaire. 
					L'idée est d'abord de "souligner les dilemmes des élus face à la gestion des risques côtiers" *, puis d'encourager la production de données réelles en montrant ce qu'il est possible de faire
					sur des communes archétypales. 
					<br/><br/>
					Ce principe méthodologique prolonge la géographie imaginaire initiée par <strong>Catherine Meur-Ferec</strong> et <strong>Yann Rabuteau</strong>, étendu à l'échelle d'une communauté de commune.
					<br/><br/>
					<em>* Meur-Férec C., Rabuteau Y., 
					« Plonevez-les-Flots : un territoire fictif pour souligner 
					les dilemmes des élus locaux face à la gestion des risques côtiers », 
					L’Espace géographique, 2014/1 : 18-34 </em>
					<br/>
					<br/>
					<p className="pull-right"><a href="http://www.risques-cotiers.fr/fr/boite-a-outils/etude-sur-un-territoire-fictif">
					<strong>Cliquer pour plus d'informations</strong></a></p>
					</p>

				  </Modal.Body>
				  <Modal.Footer>
				    <Button onClick={this.close}>Close</Button>
				  </Modal.Footer>
				</Modal>


			</div>
		)
		
	}
}