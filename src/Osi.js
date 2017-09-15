import React, { Component } from 'react';

import Osistory from './components/Osistory';

export default class Osi extends Component {

  render() {
    return(
        <div>
            <div className="jumbotron container-fluid text-center">
              <h1>Bienvenue sur Osi</h1>
              <p>Prototype destiné aux chercheurs et aux gestionnaires du projet Osirisc, 
              l'Observatoire Intégré des Risques Côtiers.</p>
            </div>
            
            <Osistory />

        </div>
    )
  }
}
