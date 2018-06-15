import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';

const getKeys = ( obj ) => (
    Object.keys(obj).map(i => (obj[i]))
)
const mapKeys = ( obj ) => (
	getKeys(obj).map(i => ({...i}))
)

const bsCol = {"AL":"danger", "EN":"warning", "GE":"success", "RE":"info", "IC":"default"}


const Compo = ({refIndic, onCompoClick, territoire}) => {

	return(
		<Row>
		{mapKeys(refIndic).filter((i3) => (i3.niveau === 3)).map(i3 => (
			<Col key = {i3.nom} className="col-md-5ths">
			<Button 
			key = {i3.nom}
			bsSize="large" 
			bsStyle={bsCol[i3.nom]}
			disabled={!territoire.comm}
			block
			onClick={() => onCompoClick(i3.id)}>
				<strong>{ i3.description.toUpperCase()}</strong>
			</Button>
			</Col>
		))}
		</Row>
	)
}

export default Compo
