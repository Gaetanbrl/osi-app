
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

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
          
        <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>

          <Carousel.Item>
            <img width={900} height={500} src = "http://localhost:3001/img/carousel1.jpg" alt="Technopole"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
        <NavLink className="btn btn-info btn-lg btn-block" to="/select">Choisir un site</NavLink>
      </div>
    )
  }
}


