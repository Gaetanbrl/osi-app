import React from 'react'
import { Button } from 'react-bootstrap';
import { filter } from 'lodash';

import Tableau from '../containers/Tableau';

const bsCol = {
	"VS":"indicator-menu vulnerabilite-systemique",
	"RI":"indicator-menu risque",
	"A":"indicator-menu aleas",
	"E":"indicator-menu enjeux",
	"G":"indicator-menu gestion",
	"R":"indicator-menu reprensation",
}


const Compo = ({ refIndic, setCompo, onCompoClick, territoire, niveau = 5, composition = null }) => {
	return(
		<nav className="indicators-menu">
		{filter(refIndic, (i3) => (i3.niveau === niveau && (composition === null || composition.includes(i3.id)))).map(i3 => (
			<div key = {i3.id} className={bsCol[i3.id]}>
				<div>
					<Button
					disabled={!territoire.comm}
					block
					onClick={() => onCompoClick(i3.id)}>
						<span>{ i3.description.toUpperCase()}</span>
						<i className="far fa-angle-right"></i>
					</Button>
					{(!setCompo || i3.id === setCompo) && (
						<Tableau />
					)}
					{niveau > 3 && Compo({ refIndic, setCompo, onCompoClick, territoire, niveau: niveau - 1, composition: i3.composition })}
				</div>
			</div>
		))}
		</nav>
	)
}

export default Compo;
