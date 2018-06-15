import React from 'react';

import Carto from './containers/Carto'
import Footer from './components/Footer';
import Jumbo from './components/Jumbo';
import Liste from './containers/Liste';
import Meta from './containers/Meta';
import Slide from './containers/Slide';
import Systemic from './containers/Systemic';
import Tableau from './containers/Tableau';
import Territoire from './containers/Territoire';
import Titre from './containers/Titre';

import { Grid, Row, Col } from 'react-bootstrap';


const App = () => (
  <div>
    <Jumbo />
	<Grid fluid>
		<Row>
		    <Systemic />
		    <br/>
		</Row>

		<Row>
			<Col md={3}>
			    <Territoire /> 
				<Liste />
				<Tableau />
			</Col>
		
			<Col md={9}>
				<Titre />
				<Carto /> 
				<Slide />
				<Meta />
			</Col>
			
		</Row>
		
	</Grid>
    <Footer />
  </div>
)

export default App

