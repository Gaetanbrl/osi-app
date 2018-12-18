import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';

const getKeys = ( obj ) => (
    Object.keys(obj).map(i => (obj[i]))
)
const mapKeys = ( obj ) => (
	getKeys(obj).map(i => ({...i}))
)

const bsCol = {"A":"danger", "E":"warning", "G":"success", "R":"info", "I":"default"}


const Compo = ({refIndic, onCompoClick, territoire}) => {

	return(
		<nav class="indicators-menu">
		{mapKeys(refIndic).filter((i3) => (i3.niveau === 3)).map(i3 => (
			<Button
			key = {i3.id}
			bsSize="large"
			bsStyle={bsCol[i3.id]}
			disabled={!territoire.comm}
			block
			onClick={() => onCompoClick(i3.id)}>
				<strong>{ i3.description.toUpperCase()}</strong>
			</Button>
		))}
		</nav>
	)
}

export default Compo
