import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    return(

      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a href="http://www.risques-cotiers.fr" className="navbar-brand"><img src='http://localhost:3001/img/logo.png' alt="logo Osirisc"/></a>
            </div>
            
            <div className="navbar-header">
              <NavLink exact to="/" className="navbar-brand"><h3>Démonstrateur Osirisc</h3></NavLink>
            </div>

              <ul className="nav navbar-nav">

                <li><NavLink activeClassName="active" to="/select" >
                  <h5><span className="glyphicon glyphicon-globe" aria-hidden="true" />  Choisir un site</h5>
                </NavLink></li>

                <li><NavLink activeClassName="active" to="/data" >
                  <h5><span className="glyphicon glyphicon glyphicon-list-alt" aria-hidden="true"/>  Explorer la donnée</h5>
                </NavLink></li>
              </ul>
          </div>
        </nav>     
      </div>
    )
  }
}