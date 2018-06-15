import React from 'react'
import {  } from 'react-bootstrap';

const TitreBox = ({ refIndic, setRef, territoire }) => {
	
	let c = territoire.comm
	let i = refIndic[setRef]

	let t = !c ? <h3 className="text-danger"><strong className="text-danger">Choisir un territoire </strong></h3>
				: !i ? <h3 className="text-info"> {c.nom} : <strong className="text-danger">Choisir un indicateur</strong></h3>
				: <h3 className="text-info"> {c.nom} : {i.description}</h3>

	return(
		<div id="mapTitre">
			{t}
		</div>
		)
}

export default TitreBox
