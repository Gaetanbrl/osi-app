import React from 'react'

import IndicesMenu from "./indics/IndicesMenu";
import RisqueMenu from "./indics/RisqueMenu";

const bsCol = {
	"VS":"indicator-menu vulnerabilite-systemique",
	"RI":"indicator-menu risque",
	"A":"indicator-menu aleas",
	"E":"indicator-menu enjeux",
	"G":"indicator-menu gestion",
	"R":"indicator-menu reprensation",
	"I":"indicator-menu indices",
}

const Compo = (props) => {
	const { niveau = 5 } = props;
	const onCompoClick = (v) => {
		props.onCompoClick(props.setCompo === v ? null : v);
	}
	let commonProps = {
		bsCol: bsCol,
		...props,
		onCompoClick: onCompoClick
	}
	return (
		<div>
			<RisqueMenu {...commonProps}/>
			{niveau === 5 && <IndicesMenu {...commonProps} />}
		</div>
	)
}
export default Compo;
