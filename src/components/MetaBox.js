import React from 'react'
import { Row, Col } from 'react-bootstrap';

import MethodeBox from './MethodeBox'
import DataBox from './DataBox'


const MetaBox = ({ setRef, refIndic, territoire }) => {
	return(
		<Row>

			<Col md={6}>
				<MethodeBox 
				refIndic = {refIndic}
				setRef = {setRef}
				territoire = {territoire}/>
			</Col>

			<Col md={6}>
				<DataBox
				setRef = {setRef}
				territoire = {territoire}/>
			</Col>

		</Row>
	)
}

export default MetaBox


