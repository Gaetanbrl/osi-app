import React, { Component } from 'react';
import { FormGroup, Radio } from 'react-bootstrap';

export default class Radiograph extends Component {

	render() {

		return(
			<FormGroup>
				<Radio name="radioGroup" value={1} onClick={ this.props.handleType } >
					<h6>Carte choroplèthe sur carroyage de 200m
					<small className="text-primary"><br/>> Observer la répartition du phénomène</small></h6>
				</Radio>
				<Radio name="radioGroup" value={2} onClick={ this.props.handleType }>
					<h6>Diagramme en aires empilées (par composantes)
					<small className="text-primary"><br/>> Suivre l'évolution du phénomène</small></h6>
				</Radio>
				<Radio name="radioGroup" value={3} onClick={ this.props.handleType }>
					<h6>Diagramme en bar empilées (par communes)
					<small className="text-primary"><br/>> Comparer des profils de vulnérabilité</small></h6>
				</Radio>
				<Radio name="radioGroup" value={4} disabled>
					<h6>Diagramme de dispersion en 3d
					<small className="text-primary"><br/>> Etablir des trajectoires de vulnérabilité</small></h6>
				</Radio>
			</FormGroup>
		)
	}
}
