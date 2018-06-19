import React, { Component }  from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class MethodeBox extends Component {

render() {
	let {setRef, refIndic, territoire} = this.props;

	let ref;
	let code = "";
	let compo = {"AL":"Aléas", "EN":"Enjeux", "GE":"Gestion", "RE":"Représentation", "IT":"Indices composites"};

	if(setRef 
	&& territoire.comm
	&& refIndic[setRef].niveau > 1){

			
		ref = refIndic[setRef];
		let composition = [];
		ref.composition.map(c => {
			composition.push(<li>{refIndic[c].description}</li>)
		})

		let desc = (ref.niveau === 2) ? compo[ref.composante] + " " + ref.description : ref.description;
		return(
			<ListGroup>

				<ListGroupItem header="Méthode" tag="div">
					Description : <strong>{desc}</strong>
					<br/> 
					<br/> 
					Composition : <ul><li>{composition}</li></ul>
					<br/> 
					Formule : {ref.methode}
					<br/> 
					<br/> 
					Lien externe : <strong>{ref.service}</strong>
				</ListGroupItem>				
			</ListGroup>
		)
	} else if(setRef 
	&& territoire.comm
	&& refIndic[setRef].composante !== "IT"){

		ref = refIndic[setRef];
		
		code =  (ref.niveau === 3) ? ref.acronyme
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

	} else if(setRef 
	&& territoire.comm
	&& refIndic[setRef].composante === "IT"){

		ref = refIndic[setRef];
		let composition = [];
		ref.composition.map(c => {
			composition.push(<li>{refIndic[c].nom}</li>)
		})
		return(
			<ListGroup>

				<ListGroupItem header="Méthode" tag="div">
					Nom : <strong>{ref.nom}</strong> ({code})
					<br/> 
					Description : <strong>{ref.description}</strong>
					<br/> 
					<br/> 
					Composition : <ul><li>{composition}</li></ul>
					<br/> 
					<br/> 
					Formule : {ref.methode}
					<br/> 
					Lien externe : <strong>{ref.service}</strong>
				</ListGroupItem>				
			</ListGroup>
		)
	} else {
		return(null)		
	}
}
}
export default MethodeBox


