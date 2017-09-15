import React, { Component } from 'react';

import Boutons1 from "./Boutons1";
import Boutons21 from "./Boutons21";
import Boutons22 from "./Boutons22";


export default class Boutons extends Component {

    handleMethode(methode) {
        return (
            <div>
                {{
                    1: <Boutons1             
                        dbfiche = { this.props.dbfiche } 
                        dataSend = { this.props.dataSend } 
                        methode = { this.props.methode }
                        nomcomp = { this.props.nomcomp } 
                        idx = { this.props.idx }/>, 
                    21: <Boutons21                   
                        dbfiche = { this.props.dbfiche } 
                        dataSend = { this.props.dataSend } 
                        methode = { this.props.methode }
                        nomcomp = { this.props.nomcomp } 
                        idx = { this.props.idx }/>, 
                    22: <Boutons22                   
                        dbfiche = { this.props.dbfiche } 
                        dataSend = { this.props.dataSend } 
                        methode = { this.props.methode }
                        nomcomp = { this.props.nomcomp } 
                        idx = { this.props.idx }/>
                }[methode]}
            </div>
        );
    }

	render() {
		return (
	        <tr>{ this.handleMethode(this.props.methode) }</tr>
			)
	}
}