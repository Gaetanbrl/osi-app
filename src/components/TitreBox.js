import React from 'react'
import Toggle from 'react-bootstrap-toggle';

const TitreBox = ({ isSidebar, setRef, territoire, onShowEPCIClick }) => {

	const c = territoire.comm;
	const e = territoire.epci;

	if (isSidebar) {
		let t;
		if (!c) {
			t = 'Choisir un territoire';
		} else if (territoire && territoire.showEPCI === true && e && e.nom) {
			t = e.nom;
		} else if (c && c.nom) {
			t = c.nom;
		}
		return(
			<div id="sidebar-title">
				<div>{t}</div>
				{setRef && (
					<div id="bt-show-epci">
						<div>
							Affichage EPCI
						</div>
						<Toggle
		          onClick={() => onShowEPCIClick(!territoire.showEPCI)}
		          on="ON"
		          off="OFF"
		          size="xs"
		          onstyle="default"
		          offstyle="danger"
		          active={territoire.showEPCI}
		        />
					</div>
				)}
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
