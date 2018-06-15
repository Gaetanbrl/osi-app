import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap';

const ListeBox = ({ territoire }) => {
	
	let comm = territoire.comm
	
	return(
		<div id="deroulant">
		<FormGroup controlId="formControlsSelect" inline-block>
		     <FormControl componentClass="select" placeholder="select">
		       <option value="select"><strong>Territoires partenaires</strong></option>
		       <option value="other">...</option>
		     </FormControl>
	   </FormGroup>
	   </div>
	)	
	
}

export default ListeBox
