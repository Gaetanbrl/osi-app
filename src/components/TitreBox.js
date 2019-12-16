import React from 'react'
import {  } from 'react-bootstrap';

const TitreBox = ({ isSidebar, refIndic, setRef, territoire }) => {

	let c = territoire.comm

	if (isSidebar) {
		let t;
		if (!c) {
			t = 'Choisir un territoire';
		} else if (territoire && territoire.showAllComm === true) {
			t = 'AFFICHAGE COMPLET';
		} else if (c && c.nom) {
			t = c.nom;
		}
		return(
			<div id="sidebar-title">
				<div>{t}</div>
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
