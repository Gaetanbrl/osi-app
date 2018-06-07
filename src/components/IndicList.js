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

	if(!setCompo){
		return(
			<blockquote className="blockquote text-center">
				<h3> Info ? </h3>
				<p className="mb-0">Présentation d'Osirisc <br/><br/> <strong>ou</strong> <br/><br/> Indication sur l'utilisation de l'appli ?</p>
				<footer className="blockquote-footer"> Source </footer>
			</blockquote>
		)	
	} else {

		let array_meta = null
		meta_com.map(com => (
			com.id_com === String(territoire.comm.insee) ? array_meta = com.stats : null 
		))
		
		let id_meta = []
		array_meta.map(i => (
			id_meta.push(i.id_meta)
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
				ableList = {id_meta}
			    />
			))}
			</div>
		)
	}
}

export default IndicList
