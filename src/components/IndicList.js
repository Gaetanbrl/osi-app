import React from 'react'
import Indic from './Indic'
import meta_com from '../data/meta_com.json';

const getKeys = ( obj ) => (
    Object.keys(obj).map(i => (obj[i]))
)
const mapKeys = ( obj ) => (
	getKeys(obj).map(i => ({...i}))
)


const IndicList = ({ refIndic, setCompo, onIndicClick, territoire }) => {
	// let id_meta = []
	// meta_com[this.props.comm.insee].map(i => (id_meta.push(i.id_meta)))
	// territoire.comm ? console.log(meta_com[territoire.comm.insee].length) : console.log('zobi')			

	if (setCompo && territoire.comm){

		let array_able = null
		meta_com.map(com => (
			com.id_com === String(territoire.comm.insee) ? array_able = com.stats : null 
		))
		
		let id_able = ["I102", "I105", "I106"]
		array_able.map(i => (
			id_able.push(i.id_meta)
			))

		return(

			<div>
			{mapKeys(refIndic).filter((i3) => (i3.niveau === 3 && i3.id === setCompo)).map(i3 => (
				<Indic
				key = {i3.nom}
				onClick={onIndicClick}
				{...i3}
				niveau2 = {mapKeys(refIndic).filter((i2) => (
					i2.niveau === 2 && i2.composante === i3.nom)).map(i2 => ({...i2}))
				}
				niveau1 = {mapKeys(refIndic).filter((i1) => (
					i1.niveau === 1 && i1.composante === i3.nom)).map(i1 => ({...i1}))
				}
				ableList = {id_able}
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
			<blockquote className="blockquote text-center">
				<p className="mb-0">Indicateurs disponibles : <strong>{nbIndic}</strong></p>
			</blockquote>
		)	
	} else {
		return( null )
	}
}

export default IndicList
