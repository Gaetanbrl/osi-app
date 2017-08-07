import React, { Component } from 'react';


import Jumbo from "./components/Jumbo"; 
import Methode from "./components/Methode"; 

let epci = "Communauté de communes de Plonevez-les-Flots"
let dbfiche = null
let dbficheCount = null

export default class Meta extends Component {

  constructor(props){
    super(props);
    this.state = {
      meta: null,
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/fiche')
    .then(response => response.json())
    .then(jsonresponse => {
      dbfiche = jsonresponse.data;
      dbficheCount = Object.keys(dbfiche).length;
    })
    .then(dbfiche => {
      this.setState({meta: dbfiche});
    })
    .catch(error => console.error(error));
  }

  render() {
	return (
	<div>
		<Jumbo epci = {epci} dbficheCount = {dbficheCount}/>
		<Methode dbfiche = {dbfiche}/>
	</div> 
	)
  }
}

