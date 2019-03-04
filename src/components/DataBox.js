import React, { Component }  from 'react';

import meta_com from '../data/meta_com.json';

class DataBox extends Component {

render() {

	let {setRef, territoire} = this.props

	let yyyy = new Date().getFullYear()
	let sobso = 0
	// let recom = ""

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


		(s.dates.length === 0) ? (sobso = 0) : (sobso = s.date_obso - yyyy);

		if (sobso > 1) {
			// recom = "A jour pendant";
		} else if (sobso >= 0 && s.dates.length > 0) {
			// recom = "A remettre à jour dans";
		} else if (sobso < 0 && s.dates.length > 0) {
			// recom = "Donnée dépassée depuis";
		} else {
			// recom = "Donnée indisponible";
		}

		return(
			<div className="data-block data-block-metadonnees" header="Métadonnées" tag="div">
        <div className="data-block-container">
          <div className="grid">
            <div className="col-12">
    				  <div className="data-value-label">Auteur(s)</div>
              <div>{s.auteurs}</div>
            </div>
            <div className="col-12">
              <div className="data-value-label">Source(s)</div>
              <div>{s.sources}</div>
            </div>
            <div className="col-12">
    				  <div className="data-value-label">Données mises à jour en</div>
              <div>{s.dates.join(", ")}</div>
            </div>
            <div className="col-12">
              <div className="data-value-label">Mise à jour recommandée en</div>
              <div>{s.date_obso}</div>
            </div>
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


