import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import meta_com from '../data/meta_com.json';

const MetaBox = ({ setRef, territoire }) => {
	
	let m = null
	let s = null

	if(setRef && String(setRef).substring(0, 1) !== "I" && territoire.comm){
		meta_com.map(c => (
			c.id_com === String(territoire.comm.insee) ? m = c.stats : null 
		))
		m.map(i => (
			i.id_meta === String(setRef) ? s = i : null
		))

		return(
		<div>

			<ListGroup>
				<ListGroupItem>{s.sources}
				</ListGroupItem>
			</ListGroup>

		</div>)	
	} else {
		return(null)		
	}
}

export default MetaBox


