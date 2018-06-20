import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Carto from './containers/Carto';
import Feature from './containers/Feature';
import Liste from './containers/Liste';
import Meta from './containers/Meta';
import Slide from './containers/Slide';
import Systemic from './containers/Systemic';
import Tableau from './containers/Tableau';
import Territoire from './containers/Territoire';
import Titre from './containers/Titre';

import Footer from './components/Footer';
import Jumbo from './components/Jumbo';



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
				{/*<Feature /> */}
				<Slide />
				<Meta />
			</Col>
			
		</Row>
		
	</Grid>
    <Footer />
  </div>
)

export default App

