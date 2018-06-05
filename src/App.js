import React from 'react';
import Carto from './containers/Carto'
import Systemic from './containers/Systemic';
import Tableau from './containers/Tableau';
import Meta from './containers/Meta';
import Territoire from './containers/Territoire';
import Jumbo from './components/Jumbo';
import Footer from './components/Footer';

import { Grid, Row, Col } from 'react-bootstrap';


const App = () => (
  <div>
    <Jumbo />
    <Territoire /> 
    <br/>
    <Grid fluid>
	    <Systemic />
    </Grid>
    <br/>
	<Grid fluid>
		<Row>

			<Col md={3}>
				<Tableau />
			</Col>
		
			<Col md={9}>
				<Carto/> 
			</Col>
			
		</Row>
		<Row>
			<Col md={3}>
			</Col>
	
			<Col md={9}>
				<Meta/>
			</Col>
		</Row>
	</Grid>
    <Footer />
  </div>
)

export default App

