import React from 'react'

import Feature from '../containers/Feature';

import MethodeBox from './MethodeBox'


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
				</div>
			)
		}
	} else {
		return null
	}
}

export default MetaBox


