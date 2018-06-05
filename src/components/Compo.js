import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap';

const getKeys = ( obj ) => (
    Object.keys(obj).map(i => (obj[i]))
)
const mapKeys = ( obj ) => (
	getKeys(obj).map(i => ({...i}))
)

const bsCol = {"AL":"danger", "EN":"warning", "GE":"success", "RE":"info", "IC":""}


const Compo = ({refIndic, onCompoClick, territoire}) => {

	if(!territoire.comm){
		return(null)	
	} else {

		return(
			<Row>
			{mapKeys(refIndic).filter((i3) => (i3.niveau === 3)).map(i3 => (
				<Col className="col-md-5ths">
				<Button 
				key = {i3.nom}
				bsSize="large" 
				bsStyle={bsCol[i3.nom]}
				block
				onClick={() => onCompoClick(i3.id)}>
					<strong>{ i3.description.toUpperCase()}</strong>
				</Button>
				</Col>
			))}
			</Row>
		)
	}
}

export default Compo
