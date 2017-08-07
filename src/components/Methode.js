import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Tab from "./Tab"; 


export default class Methode extends Component {


	render() {
		return (
			<div>

				<Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
				  <NavItem eventKey="1">Indicateurs</NavItem>
				  <NavDropdown eventKey="2" title="Composites" id="nav-dropdown">
				    <MenuItem eventKey="2.1" className="btn-block">Thématiques</MenuItem>
				    <MenuItem eventKey="2.2"  className="btn-block">Composantes</MenuItem>
				  </NavDropdown>
				  <NavDropdown eventKey="3" title="Transverses" id="nav-dropdown">
				    <MenuItem eventKey="3.1" className="btn-block">Digue</MenuItem>
				    <MenuItem eventKey="3.2" className="btn-block">Information</MenuItem>
				    <MenuItem eventKey="3.2" className="btn-block">Etage</MenuItem>
				    <MenuItem eventKey="3.2" className="btn-block">Immobilier</MenuItem>
				  </NavDropdown>
				  <NavDropdown eventKey="4" title="Globales" id="nav-dropdown">
				    <MenuItem eventKey="4.1" className="btn-block">Modèle 1</MenuItem>
				    <MenuItem eventKey="4.2" className="btn-block">Modèle 2</MenuItem>
				  </NavDropdown>
				</Nav>

				<div id="metaMethode" className="tab-content">
				  <div className="tab-pane fade active in" id="indi">
				    <p className="text-muted text-center">Description de la méthode indicateurs</p>
				  </div>
				  <div className="tab-pane fade" id="thema">
				    <p className="text-muted text-center">Description de la méthode par thématiques</p>
				  </div>
				  <div className="tab-pane fade" id="compo">
				    <p className="text-muted text-center">Description de la méthode par composantes</p>
				  </div>
				  <div className="tab-pane fade" id="transdig">
				    <p className="text-muted text-center">Description des méthodes transverses</p>
				  </div>
				  <div className="tab-pane fade" id="transinfo">
				    <p className="text-muted text-center">Description des méthodes transverses</p>
				  </div>
				  <div className="tab-pane fade" id="transetage">
				    <p className="text-muted text-center">Description des méthodes transverses</p>
				  </div>
				  <div className="tab-pane fade" id="transimmo">
				    <p className="text-muted text-center">Description des méthodes transverses</p>
				  </div>					  
				  <div className="tab-pane fade" id="globe1">
				    <p className="text-muted text-center">Description des méthodes globales</p>
				  </div>
				  <div className="tab-pane fade" id="globe2">
				    <p className="text-muted text-center">Description des méthodes globales</p>
				  </div>				  
				</div>

				<Tab dbfiche = { this.props.dbfiche }/>

			</div>
			
			)
	}
 }