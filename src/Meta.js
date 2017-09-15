import React, { Component } from 'react';


import Jumbo from "./components/Jumbo"; 
import Methode from "./components/Methode"; 
import Valid from "./components/Valid";

const epci = "CC de Plonévez-les-Flots"; /* Il faudra rendre cette variable dynamique selon le choix d'epci */
let dbfiche = null; /* Variable de stockage du json */
let dbficheIndic = null; /* Variable de stockage des indicateurs de premiers rang */
let dbficheCount = null; /* Nombre d'indicateurs pour cette epci */

export default class Meta extends Component {

  constructor(props){
    super(props);
    this.dataSend = this.dataSend.bind(this);
    this.dataRemove = this.dataRemove.bind(this);
    this.dataReset = this.dataReset.bind(this);
    this.state = {
      dataSelect: [],
      meta: null,
    };
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
		<Jumbo 
    epci = { epci } 
    dbficheCount = { dbficheCount }/>

    <h3 className="text-primary"> 1. Choisir une méthode </h3>

		<Methode 
    dbfiche = { dbfiche } 
    dataSend = { this.dataSend }/>

    <br/>
    <h3 className="text-primary"> 3. Valider </h3>

    <Valid 
    dbfiche = { dbfiche } 
    dataSelect = { this.state.dataSelect } 
    dataRemove = { this.dataRemove }
    dataReset = { this.dataReset }
    epci = { epci }/>
	</div> 
	)
  }
}

