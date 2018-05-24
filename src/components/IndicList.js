import React from 'react'
import Indic from './Indic'
import { Grid, Row } from 'react-bootstrap';
import meta_com from '../data/meta_com.json';


const getKeys = ( obj ) => (
    Object.keys(obj).map(i => (obj[i]))
)
const mapKeys = ( obj ) => (
	getKeys(obj).map(i => ({...i}))
)

const IndicList = ({ refIndic, onIndicClick, territoire }) => {

	console.log(meta_com[Object.keys(meta_com)[0]][0].id_com);
	territoire.comm ? console.log(meta_com[territoire.comm.insee][0].id_com) : console.log('zob')			

	if(!territoire.comm){
		return(null)	
	} else {
		return(
			<Grid fluid>
			<Row>
			{mapKeys(refIndic).filter((i3) => (i3.niveau === 3)).map(i3 => (
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
			    />
			))}
			</Row>
			</Grid>
		)
	}
}

export default IndicList
