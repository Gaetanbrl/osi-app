import React, { Component } from 'react';
import { Panel, PanelGroup, Popover, OverlayTrigger } from 'react-bootstrap';

export default class Emploi extends Component {

	render() {

		const titre = (
			<h3 className="text-center">Mode d'emploi
				<span className="glyphicon glyphicon-question-sign pull-right" />
		    </h3>
		  )

		const localiser = (
		  <Popover id="popover-trigger-hover-focus" title="1. Localiser">

		  </Popover>
		)

		const classer = (
		  <Popover id="popover-trigger-hover-focus" title="2. Classer">
		  
		  </Popover>
		)

		const selectionner = (
		  <Popover id="popover-trigger-hover-focus" title="3. Sélectionner">
		  
		  </Popover>
		)

		const composer = (
		  <Popover id="popover-trigger-hover-focus" title="4. Composer">
			<h4 className="text-primary glyphicon glyphicon-send">&nbsp;</h4>
		  </Popover>
		)

		const visualiser = (
		  <Popover id="popover-trigger-hover-focus" title="6. Visualiser">
		  	<h4 className="text-primary glyphicon glyphicon-duplicate">&nbsp;</h4>
		  </Popover>
		)

		return (
			<div>
				<PanelGroup defaultActiveKey="1" accordion>
					<Panel 
					header={ titre } 
					bsStyle="info" 
					eventKey="0">

						<h2 className="text-muted text-center">
							<OverlayTrigger 
							trigger={['hover', 'focus']} 
							placement="left" 
							overlay={localiser}>
							  <h2 className="text-primary glyphicon glyphicon-map-marker">&nbsp;</h2>
							</OverlayTrigger>

							&nbsp; > &nbsp; &nbsp; &nbsp;

							<OverlayTrigger 
							trigger={['hover', 'focus']} 
							placement="top" 
							overlay={classer}>
							  <h2 className="text-primary glyphicon glyphicon-equalizer">&nbsp;</h2>
							</OverlayTrigger>

							&nbsp; > &nbsp; &nbsp; &nbsp;

							<OverlayTrigger 
							trigger={['hover', 'focus']} 
							placement="bottom" 
							overlay={selectionner}>
							  <h2 className="text-primary glyphicon glyphicon-shopping-cart">&nbsp;</h2>
							</OverlayTrigger>

							&nbsp; > &nbsp; &nbsp; &nbsp;

							<OverlayTrigger 
							trigger={['hover', 'focus']} 
							placement="top" 
							overlay={composer}>
							  <h2 className="text-primary glyphicon glyphicon-filter">&nbsp;</h2>
							</OverlayTrigger>

							&nbsp; > &nbsp; &nbsp; &nbsp;

							<OverlayTrigger 
							trigger={['hover', 'focus']} 
							placement="right" 
							overlay={visualiser}>
							  <h2 className="text-primary glyphicon glyphicon-eye-open">&nbsp;</h2>
							</OverlayTrigger>

						</h2>

					</Panel>
				</PanelGroup>
			</div>

		)
		
	}
}


