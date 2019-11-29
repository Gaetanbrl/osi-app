import React, { Component } from 'react'
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
	"I":"indicator-menu indices",
}
export default class Compo extends Component{
	constructor(props){
		super(props);
		this.state = {
			expanded: props.expanded || true
		}
	}

	render() {
		const { refIndic, setCompo, onCompoClick, territoire, niveau = 5, composition = null } = this.props;
		const { expanded } = this.state;
		if (!territoire.comm) return null;
		return (
			<div>
				<nav className="indicators-menu">
					{filter(refIndic, (compo) => (compo.niveau === niveau && (composition === null || composition.includes(compo.id)))).map(compo => {
					if (compo.id !== "I") return (
						<div key = {compo.id} className={bsCol[compo.id]}>
							<div>
								<Button
								block
								className={compo.id === setCompo ? expanded ? 'active expanded' : 'active' : null}
								onClick={() => { this.setState({ expanded: !expanded}); onCompoClick(compo.id)}}>
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
					return null;}
					)}
				</nav>
				{ niveau === 5 ?
					<nav className="indicators-menu">
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
					</nav>
				: null }
			</div>
		)
	}
}

