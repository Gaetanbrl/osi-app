import React, { Component } from 'react';


import Emploi from "./components/Emploi"; 
import Local from "./components/Local"; 
import Jumbo from "./components/Jumbo"; 
import Methode from "./components/Methode"; 
import Valid from "./components/Valid";

let dbfiche = null; /* Variable de stockage du json */
let dbficheIndic = null; /* Variable de stockage des indicateurs de premiers rang */
let dbficheCount = null; /* Nombre d'indicateurs pour cette epci */

export default class Meta extends Component {

  constructor(props){
    super(props);
    this.epciSend = this.epciSend.bind(this);
    this.dataSend = this.dataSend.bind(this);
    this.dataRemove = this.dataRemove.bind(this);
    this.dataReset = this.dataReset.bind(this);
    this.state = {
      id_epci: null,
      nom_epci: "CC de Plonévez-les-Flots",
      dataSelect: [],
      meta: null,
    };
  }

  epciSend(e) {
    e.preventDefault();
    this.setState({ nom_epci: e.target.nom_epci });
  }

  dataSend(e) {
    e.preventDefault();
    let sel = this.state.dataSelect.concat(e.target.value);
    let uniSel = [...new Set(sel)];
    this.setState({ dataSelect: uniSel });
  }
  /* dataSend est la sélection de sources de l'utilisateur */

  dataRemove(e) {
    let dataReduced = this.state.dataSelect;
    let index = dataReduced.indexOf(e.target.value)
    dataReduced.splice(index, 1);
    this.setState({ dataSelect: dataReduced });
  }

  dataReset() {
    this.setState({ dataSelect : []});
  }

  componentDidMount() {
    fetch('http://localhost:3001/fiche') /* Prend toutes les fiches de la base */
    .then(response => response.json()) 
    .then(jsonresponse => {
      dbfiche = jsonresponse.data;
      dbficheIndic = dbfiche.filter((obj) => {
        return (obj.id_fiche < 100)
      });
      dbficheCount = Object.keys(dbficheIndic).length;
    })
    .then(dbfiche => {
      this.setState({ meta: dbfiche });
    })
    .catch(error => console.error(error));
  }

  render() {
	return (
	<div>
    <Emploi />

    <h4 className="text-primary"><span className="glyphicon glyphicon-map-marker" /> Choisir un site d'observation</h4>

    <Local 
    epciSend = { this.epciSend }/>

    <Jumbo 
    epci = { this.state.nom_epci } 
    dbficheCount = { dbficheCount }/>

    <h4 className="text-primary"><span className="glyphicon glyphicon-equalizer" /> Classer </h4>

		<Methode 
    dbfiche = { dbfiche } 
    dataSend = { this.dataSend }/>

    <br/>
    <h4 className="text-primary"><span className="glyphicon glyphicon-filter" /> Composer </h4>

    <Valid 
    dbfiche = { dbfiche } 
    dataSelect = { this.state.dataSelect } 
    dataRemove = { this.dataRemove }
    dataReset = { this.dataReset }
    epci = { this.state.id_epci }/>
	</div> 
	)
  }
}

