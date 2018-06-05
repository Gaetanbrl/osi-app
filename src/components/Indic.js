import React, { Component } from 'react';
import { Panel, PanelGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
//import meta_com from '../data/meta_com.json';

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

//	let id_meta = []
//	meta_com[this.props.comm.insee].map(i => (id_meta.push(i.id_meta)))
	//territoire.comm ? console.log(meta_com[territoire.comm.insee].length) : console.log('zobi')			

	const bsCol = {"AL":"danger", "EN":"warning", "GE":"success", "RE":"info", "IC":""}

    return(

		<div>
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
				bsStyle={bsCol[i2.composante]}>

					<ListGroup>
						<Panel.Title toggle>
   						<ListGroupItem
   						bsStyle={bsCol[i2.composante]}
   						//onClick={() => this.props.onClick(i2.id)}
   						>

   							<p className="text-center"><strong >{ i2.description }</strong></p>
						
                        </ListGroupItem>
						</Panel.Title>

					{this.props.niveau1.filter((i1) => (i1.thematique === i2.nom)).map(i1 => (
   						 <Panel.Body key={i1.nom} collapsible>
	   						<ListGroupItem
							bsStyle={bsCol[i1.composante]}
							onClick={() => this.props.onClick(i1.id)}
							disabled= {!this.props.ableList.includes(i1.id)}
							>

								<strong>{i1.nom}</strong><br/>
								<small>{i1.description}</small>
							
                            </ListGroupItem>
						</Panel.Body>
					))}
					</ListGroup>
				</Panel>
			</PanelGroup>
				))}
		</div>
	)
}
}