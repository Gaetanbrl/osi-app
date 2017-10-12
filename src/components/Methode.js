import React, { Component } from 'react';
import { Tab, Row, Col, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Tableau from "./Tableau"; 


export default class Methode extends Component {

	constructor(props) {
	  super(props);
	  this.handleSelect = this.handleSelect.bind(this);
	  this.state = {
		key : 1
	  };
	}

	handleSelect(e) {
		this.setState({ key: e });
	}


	render() {
		return (
			<div>

				<Tab.Container id="tabs-with-dropdown" defaultActiveKey={1}>
				  <Row className="clearfix">
				    <Col sm={12}>
				      <Nav bsStyle="tabs">

				        <NavItem eventKey={1} onSelect={this.handleSelect}>
				          Indicateurs
				        </NavItem>

				        <NavDropdown eventKey={2} onSelect={this.handleSelect} title="Composites">
				          <MenuItem eventKey={21} onSelect={this.handleSelect} className="btn-block">Thématiques</MenuItem>
				          <MenuItem eventKey={22} onSelect={this.handleSelect} className="btn-block">Composantes</MenuItem>
				        </NavDropdown>

				        <NavDropdown eventKey={3} onSelect={this.handleSelect} title="Transverses"  disabled>
				          <MenuItem eventKey={31} onSelect={this.handleSelect} className="btn-block">Digue</MenuItem>
				          <MenuItem eventKey={32} onSelect={this.handleSelect} className="btn-block">Information</MenuItem>
				          <MenuItem eventKey={33} onSelect={this.handleSelect} className="btn-block">Etage</MenuItem>
				          <MenuItem eventKey={34} onSelect={this.handleSelect} className="btn-block">Immobilier</MenuItem>
				        </NavDropdown>

				        <NavDropdown eventKey={4} onSelect={this.handleSelect} title="Globales"  disabled>
				          <MenuItem eventKey={41} onSelect={this.handleSelect} className="btn-block">Modèle 1</MenuItem>
				          <MenuItem eventKey={42} onSelect={this.handleSelect} className="btn-block">Modèle 2</MenuItem>

				        </NavDropdown>

				      </Nav>
				    </Col>

				    <Col sm={12}>
				      <Tab.Content animation>

				        <Tab.Pane eventKey={1}>
							<p className="text-muted text-center"> 
Un indicateur est une donnée dont la variation spatiale ou temporelle est corrélée au phénomène étudié : ici les côtes de la France métropolitaine. 
La liste présentée dans ce démonstrateur est un instantané au 6 juillet 2017 d'une procédure d'identification et de tri de variables, travail collectif au long cours. 
							</p>

			              <h3 className="text-primary"><span className="glyphicon glyphicon-shopping-cart" /> 3. Sélectionner</h3>
							<Tableau
							dbfiche = { this.props.dbfiche }
							dataSend = { this.props.dataSend }
							methode = { this.state.key }/>

				        </Tab.Pane>

				        <Tab.Pane eventKey={21}>
							<p className="text-muted text-center">
Les méthodes composites sont des indicateurs de second rang qui résultent de l'agrégation d'un ensemble d'indicateurs. 
La cohérence de ces ensembles se fonde sur une lecture systémique de la vulnérabilité.<br/>
Les thématiques listée ici sont des sous-ensembles des composantes.
							</p>

          	              <h3 className="text-primary"><span className="glyphicon glyphicon-shopping-cart" /> 3. Sélectionner</h3>

							<Tableau
							dbfiche = { this.props.dbfiche }
							dataSend = { this.props.dataSend }
							methode = { this.state.key }/>

				        </Tab.Pane>

				        <Tab.Pane eventKey={22}>
							<p className="text-muted text-center">
Les méthodes composites sont des indicateurs de second rang qui résultent de l'agrégation d'un ensemble d'indicateurs. 
La cohérence de ces ensembles se fonde sur une lecture systémique de la vulnérabilité.<br/>
Les 4 composantes sont les piliers de l'approche proposée par le projet Osirisc.
							</p>

			              <h3 className="text-primary"><span className="glyphicon glyphicon-shopping-cart" /> 3. Sélectionner</h3>

							<Tableau
							dbfiche = { this.props.dbfiche }
							dataSend = { this.props.dataSend }
							methode = { this.state.key }/>

				        </Tab.Pane>

				        <Tab.Pane eventKey={31}>
				          <p className="text-muted text-center">Description des méthodes transverses</p>

			              <h3 className="text-primary"><span className="glyphicon glyphicon-shopping-cart" /> 3. Sélectionner</h3>

				        </Tab.Pane>

				        <Tab.Pane eventKey={32}>
				          <p className="text-muted text-center">Description des méthodes transverses</p>

			              <h3 className="text-primary"><span className="glyphicon glyphicon-shopping-cart" /> 3. Sélectionner</h3>

				        </Tab.Pane>

				        <Tab.Pane eventKey={33}>
				          <p className="text-muted text-center">Description des méthodes transverses</p>

			              <h3 className="text-primary"><span className="glyphicon glyphicon-shopping-cart" /> 3. Sélectionner</h3>

				        </Tab.Pane>

				        <Tab.Pane eventKey={34}>
				          <p className="text-muted text-center">Description des méthodes transverses</p>

			              <h3 className="text-primary"><span className="glyphicon glyphicon-shopping-cart" /> 3. Sélectionner</h3>

				        </Tab.Pane>

				        <Tab.Pane eventKey={41}>
				          <p className="text-muted text-center">Description des méthodes globales</p>

			              <h3 className="text-primary"><span className="glyphicon glyphicon-shopping-cart" /> 3. Sélectionner</h3>

				        </Tab.Pane>

				        <Tab.Pane eventKey={42}>
				          <p className="text-muted text-center">Description des méthodes globales</p>

			              <h3 className="text-primary"><span className="glyphicon glyphicon-shopping-cart" /> 3. Sélectionner</h3>
				          
				        </Tab.Pane>

				      </Tab.Content>
				    </Col>
				  </Row>
				</Tab.Container>
			</div>
			
			)
	}
 }
