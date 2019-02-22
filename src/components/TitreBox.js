import React from 'react'
import {  } from 'react-bootstrap';

const TitreBox = ({ isSidebar, refIndic, setRef, territoire }) => {

	let c = territoire.comm
	let i = refIndic[setRef]

	if (isSidebar) {
		let t = !c ? <div>Choisir un territoire</div>
			: !i ? <div>{c && c.nom}</div>
			: <div>{c && c.nom}</div>
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
