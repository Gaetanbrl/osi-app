
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rapport from './Rapport';

export default class Osistory extends Component {
  
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
      {/*
        <NavLink 
        className="btn btn-primary btn-lg btn-block" 
        to="/select">Choisir un site d'observation</NavLink>
      */}

        <br/>

        <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>

          <Carousel.Item>
            <img width={900} height={500} src = "http://localhost:3001/img/rade.jpg" alt="La rade de Brest, vu de l'IUEM"/>
            <Carousel.Caption>
              <h3></h3>
              <p>La rade de Brest, vu du Technopôle Brest-Iroise</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        
        <br/>

        <Rapport/>


      </div>
    )
  }
}


