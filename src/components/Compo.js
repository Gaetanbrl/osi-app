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
	if (!territoire.comm) return null;
	return (
		<nav className="indicators-menu">
		{filter(refIndic, (compo) => (compo.niveau === niveau && (composition === null || composition.includes(compo.id)))).map(compo => (
			<div key = {compo.id} className={bsCol[compo.id]}>
				<div>
					<Button
					block
					className={compo.id === setCompo && 'active'}
					onClick={() => onCompoClick(compo.id)}>
						<span>{ compo.description.toUpperCase()}</span>
						<i className="far fa-angle-right"></i>
					</Button>
					{(!setCompo || compo.id === setCompo) && (
						<Tableau />
					)}
					{niveau > 3 && Compo({ refIndic, setCompo, onCompoClick, territoire, niveau: niveau - 1, composition: compo.composition })}
				</div>
			</div>
		))}
		</nav>
	)
}

export default Compo;
