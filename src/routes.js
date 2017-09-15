import React from 'react';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import { Provider } from 'react-redux';

import Footer from "./Footer"; 
import Geoselect from "./Geoselect"; 
import Meta from "./Meta"; 
import Navbar from "./Navbar"; 
import Osi from "./Osi"; 

const Routes = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div>
				<Navbar />
				<Switch>	
					<Route exact path="/" component={ Osi } />
					<Route path="/select" component={ Geoselect } />
					<Route path="/data" component={ Meta } />
					<Route render={function () {
						return <p className="lead pull-center"> Une bouteille à la mer... </p>
					}

					} />
				</Switch>
				<Footer />
			</div>
		</Router>
	</Provider>
);

export default Routes;