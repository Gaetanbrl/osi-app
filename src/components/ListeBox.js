import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap';

const ListeBox = ({ territoire }) => {
	
	let partenaires = [
		{ "insee": 56233, "nom": "Saint-Philibert", "siren_epci": 200043123 },
		{ "insee": 56116, "nom": "Locmariaquer", "siren_epci": 200043123 },
		{ "insee": 56176, "nom": "Pluneret", "siren_epci": 200043123 },
		{ "insee": 56046, "nom": "Crac'h", "siren_epci": 200043123 },
		{ "insee": 56007, "nom": "Auray", "siren_epci": 200043123 }
	];
	

	// let comm = territoire.comm

	let val;
	let liste = [];
	
	partenaires.map(com => {
		val = `${com["insee"]}`;
		liste.push(<option key={val} value={val}>{com["nom"]}</option>);
		return null;
	})
	
	return(
		<div id="deroulant">
		<FormGroup controlId="formControlsSelect">
		    <FormControl componentClass="select" placeholder="select">
				<option value="select">Territoires partenaires</option>
				{liste}
		    </FormControl>
	   </FormGroup>
	   </div>
	)	
	
}

export default ListeBox