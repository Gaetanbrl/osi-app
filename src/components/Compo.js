import React from 'react'
import { Button } from 'react-bootstrap';

import Tableau from '../containers/Tableau';

const getKeys = ( obj ) => (
    Object.keys(obj).map(i => (obj[i]))
)
const mapKeys = ( obj ) => (
	getKeys(obj).map(i => ({...i}))
)

const bsCol = {"A":"indicator-menu aleas", "E":"indicator-menu enjeux", "G":"indicator-menu gestion", "R":"indicator-menu reprensation", "I":"default"}


const Compo = ({ refIndic, setCompo, onCompoClick, territoire}) => {

	return(
		<nav className="indicators-menu">
		{mapKeys(refIndic).filter((i3) => (i3.niveau === 3)).map(i3 => (
			<div key = {i3.id} className={bsCol[i3.id]}>
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
			</div>
		))}
		</nav>
	)
}

export default Compo
