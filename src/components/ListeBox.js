import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap';

const ListeBox = ({ refIndic, setRef, territoire }) => {
	
	let i = refIndic[setRef]
	let epci = territoire.epci
	let comm = territoire.comm
	
	return(

		<FormGroup controlId="formControlsSelect">
		     <FormControl componentClass="select" placeholder="select">
		       <option value="select">Territoires partenaires</option>
		       <option value="other">...</option>
		     </FormControl>
	   </FormGroup>

	)	
	
}

export default ListeBox
