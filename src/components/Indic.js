import React, { Component } from 'react';
import { Panel, PanelGroup, ListGroup, ListGroupItem, Button, Glyphicon } from 'react-bootstrap';

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

		<div>
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

					<div>
						<Panel.Title toggle>
   						<div bsStyle={bsCol[i2.composante]}>
   							{ i2.description }
					        <Button
					        	onClick={() => this.props.onClick(i2.id)}
				        		className="pull-right"
					        	bsStyle={bsCol[i2.composante]}
								    disabled= {this.props.ableList.includes(i2.id)}
					        	>
						        <Glyphicon glyph="chevron-right"/>
					        </Button>
              </div>
						</Panel.Title>

					{this.props.niveau1.filter((i1) => (i1.thematique === i2.acronyme)).map(i1 => (
   						 <Panel.Body key={i1.nom} collapsible>
	   						<div
							bsStyle={bsCol[i1.composante]}
							onClick={() => this.props.onClick(i1.id)}
							disabled= {!this.props.ableList.includes(i1.id)}
							>

								{i1.nom}
								<small>{i1.description}</small>

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
