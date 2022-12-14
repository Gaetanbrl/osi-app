import React, { Component } from 'react';
import { Panel, PanelGroup } from 'react-bootstrap';

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

componentWillUpdate (nextProps) {
  if (this.props.currentIndic !== nextProps.currentIndic && nextProps.currentIndic === nextProps.setCompo) {
    this.setState({ activeKey: null });
  }
}

render() {

	const bsCol = {"AL":"danger", "EN":"warning", "GE":"success", "RE":"info", "IC":"default"}

  return(
		<div className="submenu">
			{this.props.niveau2.map(i2 => (
			<PanelGroup
        id={i2.id}
        key={i2.id}
        activeKey={this.state.activeKey}
        accordion
        onSelect={this.handleSelect}>
				<Panel
  				eventKey={i2.nom}
  				key={i2.nom}
  				bsStyle={bsCol[i2.composante]}
        >
					<Panel.Title
            toggle
            onClick={() => this.props.onClick(i2.id)}
            className={(this.props.currentIndic === i2.id || this.state.activeKey === i2.nom) && 'active'}
          >
      			{ i2.description }
            <i className="far fa-angle-right"></i>
					</Panel.Title>
          <div className="panel-list">
  					{this.props.niveau1.filter((i1) => (i1.thematique === i2.acronyme)).map(i1 => (
              <Panel.Body key={i1.nom} collapsible>
                <div
                className={`submenu-link ${this.props.currentIndic === i1.id && 'active'}`}
                onClick={() => this.props.ableList.includes(i1.id) && this.props.onClick(i1.id)}
                disabled= {!this.props.ableList.includes(i1.id)}
                >
                  <span>{i1.nom}</span>
                </div>
              </Panel.Body>
  					))}
          </div>
				</Panel>
			</PanelGroup>
				))}
		</div>
	)
}
}
