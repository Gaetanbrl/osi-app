import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { filter } from 'lodash';

import Tableau from '../../containers/Tableau';

import Compo from "../Compo";
const IndicesMenu = ({
	refIndic,
	setCompo,
	onCompoClick,
	territoire,
	niveau = 5,
	composition = null,
	expanded,
	bsCol
}) => {
	return (<nav className="indicators-menu">
		{filter(refIndic, (compo) => (compo.niveau === niveau && (composition === null || composition.includes(compo.id)))).map(compo => {
			if (compo.id === "I") return (
				<div key = {compo.id} className={bsCol[compo.id]}>
					<div>
						<Button
						block
						className={compo.id === setCompo ? expanded ? 'active expanded' : 'active' : null}
						onClick={() => onCompoClick(compo.id)}>
							<span>{ compo.description.toUpperCase()}</span>
							<i className="far fa-angle-right"></i>
						</Button>
						{(!setCompo || compo.id === setCompo) && (
							<Tableau />
						)}
						{niveau > 3 && (
							<Compo
								refIndic={refIndic}
								setCompo={setCompo}
								onCompoClick={onCompoClick}
								territoire={territoire}
								niveau={niveau - 1}
								composition={compo.composition}
							/>
						)}
					</div>
				</div>
			);
			return null;
		})}
	</nav>)
}

export default IndicesMenu;