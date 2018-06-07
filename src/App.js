import React from 'react';

import Carto from './containers/Carto'
import Footer from './components/Footer';
import Jumbo from './components/Jumbo';
import Liste from './containers/Liste';
import Meta from './containers/Meta';
import Systemic from './containers/Systemic';
import Tableau from './containers/Tableau';
import Territoire from './containers/Territoire';
import Titre from './containers/Titre';

import { Grid, Row, Col } from 'react-bootstrap';


const App = () => (
  <div>
    <Jumbo />
    <Territoire /> 
	<Grid fluid>
		<Row>
    	<br/>
		    <Systemic />
	    <br/>
		</Row>
		<Row>

			<Col md={3}>
				<Liste />
				<Tableau />
			</Col>
		
			<Col md={9}>
				<Titre />
				<Carto /> 
			</Col>
			
		</Row>
		<Row>
			<Col md={3}>
			</Col>
	
			<Col md={9}>
				<Meta />
			</Col>
		</Row>
	</Grid>
    <Footer />
  </div>
)

export default App

