import React from 'react'
import {  } from 'react-bootstrap';

const TitreBox = ({ isSidebar, refIndic, setRef, territoire }) => {

	let c = territoire.comm
	let i = refIndic[setRef]

	if (isSidebar) {
		let t = !c ? <div>Choisir un territoire</div>
			: !i ? <div>Choisir un indicateur</div>
			: <div><i className="fas fa-map-marked-alt"></i><span>Indicateurs</span></div>
		return(
			<div id="sidebar-title">
				{t}
			</div>
		);
	}

	return (
		<div id="comm-title">
			{c && c.nom}
		</div>
	);
}

export default TitreBox
