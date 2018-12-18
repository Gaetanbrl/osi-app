import React, { Component }  from 'react';
import { ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';

import meta_com from '../data/meta_com.json';

class DataBox extends Component {

render() {

	let {setRef, territoire} = this.props

	let yyyy = new Date().getFullYear()
	let obso = 0
	let sobso = 0
	let prog = 0
	let recom = ""

	let m = null
	let s = {
        "id_com": "",
        "id_meta": "",
        "sources": [],
        "auteurs": [],
        "dates": [],
        "date_obso": 0,
        "nbcar": 0,
        "min": 0,
        "max": 0,
        "avg": 0,
        "q1": 0,
        "q2": 0,
        "q3": 0,
        "d9": 0
		}
	if(setRef
	// && String(setRef).substring(0, 1) !== "I"
	&& territoire.comm){

		meta_com.map(c => (
			c.id_com === String(territoire.comm.insee) ? m = c.stats : null
		));

		m.map(i => (
			i.id_meta === String(setRef) ? s = i : null
		));

		obso = (Math.abs(s.date_obso - yyyy) * 20);

		(s.dates.length === 0) ? (sobso = 0) : (sobso = s.date_obso - yyyy);

		if (sobso > 1) {
			prog = "success";
			recom = "A jour pendant :";
		} else if (sobso >= 0 && s.dates.length > 0) {
			prog = "warning";
			recom = "A remettre à jour dans :";
		} else if (sobso < 0 && s.dates.length > 0) {
			prog = "danger";
			recom = "Donnée dépassée depuis :";
		} else {
			prog = "danger";
			recom = "Donnée indisponible";
			obso = 0;
		}

		return(
			<div className="data-block" header="Métadonnées" tag="div">
        <div className="data-block-title">Métadonnées</div>
        <div className="data-block-container">
          <div className="data-value">
  				  <div className="data-value-label">Auteur(s)</div>
            <div>{s.auteurs}</div>
          </div>
          <div className="data-value">
            <div className="data-value-label">Source(s)</div>
            <div>{s.sources}</div>
          </div>
          <div className="data-value">
  				  <div className="data-value-label">Livraison(s)</div>
            <div>{s.dates.join(", ")} {recom}</div>
          </div>
        </div>
			</div>
		)
	} else {
		return(null)
	}
}
}
export default DataBox


