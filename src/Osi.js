import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import Rapport from './components/Rapport';

export default class Osi extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    return(
      <div>
        <div className="jumbotron container-fluid text-center">
          <h1>Bienvenue sur Osi</h1>
          <p className="text-muted">Prototype destiné aux chercheurs et aux gestionnaires du projet Osirisc, 
          l'Observatoire Intégré des Risques Côtiers.</p>
        </div>

        <Carousel 
        activeIndex={this.state.index} 
        direction={this.state.direction} 
        onSelect={this.handleSelect}>

          <Carousel.Item>
            <img className="carouselImg" alt="La rade de Brest" src = "/img/rade.jpg" />
            <Carousel.Caption>
              <p className="text-muted"><h3>La rade de Brest vu du Technopôle</h3></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carouselImg"  alt="" src="/md/birkmann.png"/>
            <Carousel.Caption>
              <p className="text-muted"><h3>Les sphères de vulnérabilité (J. Birkmann, 2007)</h3></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carouselImg" alt="" src="/md/cocorisco.png"/>
            <Carousel.Caption>
              <p className="text-muted"><h3>Les composantes de la vulnérabilité (A. Hénaff et al., 2014)</h3></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carouselImg" alt="" src="/md/gantt.png"/>
            <Carousel.Caption>
              <p className="text-muted"><h3>Diagramme de GANTT à l'issue du premier mois</h3></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carouselImg" alt="" src="/md/car.png"/>
            <Carousel.Caption>
              <p className="text-muted"><h3>Le principe d'une tessellation de la donnée</h3></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carouselImg" alt="" src="/md/mcd.png"/>
            <Carousel.Caption>
              <p className="text-muted"><h3>Modèle Conceptuel de Données</h3></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carouselImg" alt="" src="/md/semantique.png"/>
            <Carousel.Caption>
              <p className="text-muted"><h3>Tentative de cadrage sémantique</h3></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carouselImg" alt="" src="/md/agreg.png"/>
            <Carousel.Caption>
              <p className="text-muted"><h3>Méthodes d'agrégation des indicateurs</h3></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carouselImg" alt="" src="/md/maq2.png"/>
            <Carousel.Caption>
              <p className="text-muted"><h3>Maquette d'application version 2</h3></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carouselImg" alt="" src="/md/maq5.png"/>
            <Carousel.Caption>
              <p className="text-muted"><h3>Maquette d'application version 5</h3></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carouselImg" alt="" src="/md/stack.png"/>
            <Carousel.Caption>
              <p className="text-muted"><h3>Les technologies utilisées (la taille donne l'ordre d'importance)</h3></p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        
        <br/>

        <Rapport/>


      </div>
    )
  }
}


