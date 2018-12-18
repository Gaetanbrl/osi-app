import React, { Component } from 'react';
import { Panel, Button, } from 'react-bootstrap';

export default class Indic extends Component{
constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey: null
    }
}

handleSelect(activeKey) {
	this.setState({ activeKey })
}

render(){

	const bsCol = {"AL":"danger", "EN":"warning", "GE":"success", "RE":"info", "IC":"default"}

    return(

		<div className="submenu">
			{this.props.niveau2.map(i2 => (
			<div
        id={i2.id}
        key={i2.id}
        activeKey={this.state.activeKey}
        accordion
        onSelect={this.handleSelect}>
				<Panel
  				eventKey={i2.nom}
  				key={i2.nom}
  				bsStyle={bsCol[i2.composante]}>
					<Panel.Title toggle>
      			{ i2.description }
            <i class="far fa-angle-right"></i>
            <Button
            	onClick={() => this.props.onClick(i2.id)}
          		className="pull-right"
            	bsStyle={bsCol[i2.composante]}
      		    disabled= {this.props.ableList.includes(i2.id)}
            	>
              <i class="far fa-angle-right"></i>
            </Button>
					</Panel.Title>
          <div className="panel-list">
  					{this.props.niveau1.filter((i1) => (i1.thematique === i2.acronyme)).map(i1 => (
              <Panel.Body key={i1.nom} collapsible>
                <div
                className="submenu-link"
                onClick={() => this.props.onClick(i1.id)}
                disabled= {!this.props.ableList.includes(i1.id)}
                >
                  {i1.nom}
                </div>
              </Panel.Body>
  					))}
          </div>
				</Panel>
			</div>
				))}
		</div>
	)
}
}
