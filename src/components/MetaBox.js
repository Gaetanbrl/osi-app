import React from 'react'
import { div } from 'react-bootstrap';

import Feature from '../containers/Feature';

import MethodeBox from './MethodeBox'
import DataBox from './DataBox'


const MetaBox = ({ setRef, refIndic, territoire, navigationType }) => {

if (refIndic[setRef] && ["communes", "epci"].includes(navigationType)) {
	let ref = refIndic[setRef];

	if (ref.niveau > 1 || ref.composante === "IT") {
		return (
			<div className="data-container">
				<MethodeBox
				refIndic = {refIndic}
				setRef = {setRef}
				territoire = {territoire}/>
				<Feature />
			</div>
		)
	} else {
		return(
			<div className="data-container">
				<MethodeBox
				refIndic = {refIndic}
				setRef = {setRef}
				territoire = {territoire}/>
				<DataBox
				setRef = {setRef}
				territoire = {territoire}/>
				<Feature />
			</div>
		)
	}
} else {
	return null
}
}

export default MetaBox


