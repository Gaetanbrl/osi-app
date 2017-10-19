import React, { Component } from "react";
import Boutons from "./Boutons";

export default class Tableau extends Component {

  render() {
    const comp = ["alea", "enjeu", "gestion", "representation"];
    if (!this.props.dbfiche) {
      return <div className="lead text-center">La marée monte ...</div>
    }
    
      return (
        <div className="container-fluid">
         { comp.map((nomcomp, idx) => (
            <div key = { idx } className="well col-xs-4 col-xs-height">
              <table className="Tab table table-condensed table-responsive table-hover">
                <thead>
                  <tr>      
                    <th>
                      <p className="lead text-uppercase text-center btn-block">{ nomcomp }</p>
                    </th>
                  </tr>
                </thead>
                <tbody>

                  <Boutons
                  dbfiche = { this.props.dbfiche } 
                  dataSend = { this.props.dataSend } 
                  methode = { this.props.methode }
                  nomcomp = { nomcomp } 
                  idx = { idx }/>

                </tbody>
              </table>
            </div>
        )) }


        </div> 
      )
  }
}