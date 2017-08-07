import React, { Component } from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';

import classNames from 'classnames';

export default class Compo extends Component {
  
  render() {

	let btncolor = ["info", "danger", "warning", "success"];

	let btncompo = classNames({
		btn: true,
		[`btn-${ btncolor[this.props.idx] }`]: true,
		"btn-xs": true, 
		"btn-block": true, 
	});

    let dbliste = this.props.dbfiche;
    let indicompo = [];
 	let popoverHoverFocus = [];

    dbliste.forEach((obj, idx) => {
		if (obj.composante === this.props.comp) { 
	        return(

				popoverHoverFocus = (
					<Popover id="popover-trigger-hover-focus" title={ obj.description }>
				    	<strong>Composante : </strong> <span className="text-uppercase">{ obj.composante }</span> <br/>
				    	<strong>Thématique : </strong> <span className="text-uppercase">{ obj.theme }</span> <br/>
				    	<strong>Objet : </strong> <span className="text-uppercase">{ obj.objet }</span> <br/><br/>
				    	<strong>Mises à jour : </strong> ? 
				  	</Popover>
				),

	    		indicompo.push(
					<OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popoverHoverFocus}>
						<Button key={ idx } className={ btncompo }>{ obj.acronyme }</Button>
					</OverlayTrigger>
    			)
			) 	      
	   }
	})

	return (
        <tr>     	        
 	        { indicompo }
      	</tr>
		)
	}
}

