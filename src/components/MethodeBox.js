import React, { Component }  from 'react'
import { ListGroup, ListGroupItem , Button} from 'react-bootstrap';

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
			return composition.push(<li>{refIndic[c].description}</li>)
		})

		let desc = (ref.niveau === 2) ? compo[ref.composante] + " " + ref.description : ref.description;
		return(
			<div className="data-block" header="Méthode" tag="div">
				<div className="data-block-title">Méthode</div>
				<div className="data-block-container">
					<div className="data-value-name">{desc}</div>
          <div className="data-value">
  				  <div className="data-value-label">Composition</div>
						<div>{composition}</div>
					</div>
          <div className="data-value">
  				  <div className="data-value-label">Formule</div>
  				  <div>{ref.methode}</div>
  				</div>
					<Button
		        bsSize="xsmall"
		        bsStyle="danger"
		        className="glyphicon glyphicon-save-file"
		        disabled = {!ref.service}
		        href={ref.service}>
		        PDF</Button>


					<strong>{ref.service}</strong>
				</div>
			</div>
		)
	} else if(setRef
	&& territoire.comm
	&& refIndic[setRef].composante !== "IT"){

		ref = refIndic[setRef];

		code =  (ref.niveau === 3) ? ref.acronyme
				: !ref.thematique ? (ref.composante + "-" + ref.acronyme)
				: (ref.composante + "-" + ref.thematique + "-" + ref.acronyme);

		return(
			<div className="data-block" header="Méthode" tag="div">
				<div className="data-block-title">Méthode</div>
				<div className="data-block-container">
					<div className="data-value data-value-name">{ref.nom} ({code})</div>
					<div className="data-value data-value-desc">{ref.description}</div>
						<Button
			        className="btn-pdf"
			        disabled = {!ref.service}
			        href={ref.service}>
			        <i class="far fa-file-pdf"></i>
			        <span>Fiche méthodologique</span>
				    </Button>
				</div>
			</div>
		)

	} else if(setRef
	&& territoire.comm
	&& refIndic[setRef].composante === "IT"){

		ref = refIndic[setRef];
		let composition = [];
		ref.composition.map(c => {
			return composition.push(<li>{refIndic[c].nom}</li>)
		})
		return(
			<div className="data-block" header="Méthode" tag="div">
				<div className="data-block-title">Méthode</div>
				<div className="data-block-container">
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
					Fiche méthodologique :
						<Button
				        bsSize="xsmall"
				        bsStyle="danger"
				        className="glyphicon glyphicon-save-file"
				        disabled = {!ref.service}
				        href={ref.service}>
				        PDF</Button>
				</div>
			</div>
		)
	} else {
		return(null)
	}
}
}
export default MethodeBox


