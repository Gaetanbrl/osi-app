import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import meta_com from '../data/meta_com.json';


					// {
					// 	!epci ? (<ListGroupItem bsStyle="warning" header="Choix de l'intercommunalité"></ListGroupItem>) 
					// 		: (<ListGroupItem bsStyle="success" header="Choix de l'intercommunalité">{epci.nom} ({epci.siren})</ListGroupItem>)
					// }
				
					// {
					// 	!epci ? (<ListGroupItem disabled header="Choix de la commune"></ListGroupItem>)
					// 		: !comm ? (<ListGroupItem bsStyle="warning" header="Choix de la commune"></ListGroupItem>)
					// 			: (<ListGroupItem bsStyle="success" header="Choix de la commune"> {comm.nom} ({comm.insee}) </ListGroupItem>)
					// }

					// {
					// 	!comm ? (<ListGroupItem disabled header="Choix de l'indice"></ListGroupItem>)
					// 		: !i ? (<ListGroupItem bsStyle="warning" header="Choix de l'indice"></ListGroupItem>)
					// 			: !i.composante ? (<ListGroupItem bsStyle="success" header="Choix de l'indice"> {i.acronyme + " : " + i.description} </ListGroupItem>)
					// 				: !i.thematique ? (<ListGroupItem bsStyle="success" header="Choix de l'indice"> {i.composante + "-" + i.acronyme + " : " + i.description} </ListGroupItem>)
					// 					: (<ListGroupItem bsStyle="success" header="Choix de l'indice"> {i.composante + "-" + i.thematique + "-" + i.acronyme + " : " + i.description} </ListGroupItem>)
					// }


const MetaBox = ({ setRef, territoire }) => {
	
	let meta = null
	let stats = null

	if(!setRef && !territoire.comm){
		return(null)	
	} else {
		meta_com.map(c => (
			c.id_com === String(territoire.comm.insee) ? meta = c.stats : null 
		))
		meta.map(i => (
			i.id_meta === String(setRef) ? stats = i : null
		))

		return(
		<div>

			<ListGroup>
				<ListGroupItem>{stats.description}
				</ListGroupItem>
			</ListGroup>

		</div>)	
	
	}
}

export default MetaBox


