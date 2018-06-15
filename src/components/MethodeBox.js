import React, { Component }  from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class MethodeBox extends Component {

render() {
	let {setRef, refIndic, territoire} = this.props;

	let ref;
	let refLow;
	let leg = "";
	let code = "";
	let compo = {"AL":"Aléas", "EN":"Enjeux", "GE":"Gestion", "RE":"Représentation", "IC":"Indices composites"};
	if(setRef 
	// && String(setRef).substring(0, 1) !== "I" 
	&& territoire.comm){
		
		ref = refIndic[setRef];
		code = !ref.composante ? ref.acronyme
				: !ref.thematique ? (ref.composante + "-" + ref.acronyme)
				: (ref.composante + "-" + ref.thematique + "-" + ref.acronyme);
		return(
			<ListGroup>

				<ListGroupItem header="Méthode" tag="div">
					Nom : <strong>{ref.nom}</strong> ({code})
					<br/> Composante : <strong>{compo[ref.composante]}</strong>
					<br/> Description : <strong>{ref.description}</strong>
					<br/> Lien externe : <strong>{ref.service}</strong>
				</ListGroupItem>				
			</ListGroup>
		)
	} else {
		return(null)		
	}
}
}
export default MethodeBox


