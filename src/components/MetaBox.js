import React from 'react'
import { div } from 'react-bootstrap';

import MethodeBox from './MethodeBox'
import DataBox from './DataBox'


const MetaBox = ({ setRef, refIndic, territoire }) => {

if (refIndic[setRef]) {
	let ref = refIndic[setRef];

	if (ref.niveau > 1 || ref.composante === "IT") {
		return (
			<div className="data-container">
				<MethodeBox
				refIndic = {refIndic}
				setRef = {setRef}
				territoire = {territoire}/>
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
			</div>
		)
	}
} else {
	return null
}
}

export default MetaBox


