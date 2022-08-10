import React from 'react'
import Indic from './Indic'
import meta_com from '../data/meta_com.json';

const getKeys = ( obj ) => (
    Object.keys(obj).map(i => (obj[i]))
)
const mapKeys = ( obj ) => (
	getKeys(obj).map(i => ({...i}))
)


const IndicList = ({ refIndic, setCompo, currentIndic, onIndicClick, territoire }) => {

	if (setCompo){

		let array_able = [];
		meta_com.map(com => (
			com.id_com === String(territoire?.comm?.insee) ? array_able = com.stats : null
		));

		// let id_able = Object.keys(refIndic).filter(k => k.substring(0, 1) === "I");
		//let ableRef = ["I1","I211","I212","I213","I221","I231","I2","I"];
		let ableRef = ["I101","I102","I103","I104","I105","I106","I2","I"];
		array_able.map(i => (
			ableRef.push(i.id_meta)
		));

		return(

			<div>
			{mapKeys(refIndic).filter((indic) => (indic.niveau >= 3 && indic.id === setCompo)).map(indic => (
				<Indic
					key = {indic.nom}
					setCompo = {setCompo}
					currentIndic = {currentIndic}
					onClick={onIndicClick}
					{...indic}
					niveau2 = {mapKeys(refIndic).filter((i2) => (
						i2.niveau === 2 && i2.composante === indic.composante)).map(i2 => ({...i2}))
					}
					niveau1 = {mapKeys(refIndic).filter((i1) => (
						i1.niveau === 1 && i1.composante === indic.composante)).map(i1 => ({...i1}))
					}
					ableList={ableRef}
					territoire={territoire}
			    />
			))}
			</div>
		)
	} else if (!setCompo && territoire.comm){
		let nbIndic = 0
		meta_com.map(com => (
			com.id_com === String(territoire.comm.insee) ? nbIndic = com.stats.length : null
		))

		return(
			<blockquote className="number-indicator">
				<p className="mb-0">Indicateurs disponibles : <strong>{nbIndic}</strong></p>
			</blockquote>
		)
	} else {
		return( null )
	}
}

export default IndicList
