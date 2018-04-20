import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const MetaBox = ({ refIndic, setRef, territoire }) => {
	
	let style = {
		height: '300px',
	}

	let i = refIndic[setRef]
	let epci = territoire.epci
	let comm = territoire.comm
				
		return(
		<div className="col-md-4" style={style}>

			<ListGroup>
				
					{
						!epci ? (<ListGroupItem bsStyle="warning" header="Choix de l'intercommunalité"></ListGroupItem>) 
							: (<ListGroupItem bsStyle="success" header="Choix de l'intercommunalité">{epci.nom} ({epci.siren})</ListGroupItem>)
					}
				
					{
						!epci ? (<ListGroupItem disabled header="Choix de la commune"></ListGroupItem>)
							: !comm ? (<ListGroupItem bsStyle="warning" header="Choix de la commune"></ListGroupItem>)
								: (<ListGroupItem bsStyle="success" header="Choix de la commune"> {comm.nom} ({comm.insee}) </ListGroupItem>)
					}

					{
						!comm ? (<ListGroupItem disabled header="Choix de l'indice"></ListGroupItem>)
							: !i ? (<ListGroupItem bsStyle="warning" header="Choix de l'indice"></ListGroupItem>)
								: !i.composante ? (<ListGroupItem bsStyle="success" header="Choix de l'indice"> {i.acronyme + " : " + i.description} </ListGroupItem>)
									: !i.thematique ? (<ListGroupItem bsStyle="success" header="Choix de l'indice"> {i.composante + "-" + i.acronyme + " : " + i.description} </ListGroupItem>)
										: (<ListGroupItem bsStyle="success" header="Choix de l'indice"> {i.composante + "-" + i.thematique + "-" + i.acronyme + " : " + i.description} </ListGroupItem>)
					}
				
			</ListGroup>

		</div>)	
	
}

export default MetaBox
