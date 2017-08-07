import React, { Component } from "react";
import Compo from "./Compo";
import Valid from "./Valid";

export default class Tab extends Component {

  render() {
    const comp = ["alea", "enjeu", "gestion", "representation"]

    if (!this.props.dbfiche) {
      return <div className="lead text-center">La marée monte ...</div>
    }
    
      return (
        <div className="container-fluid">

         {comp.map((nomcomp, idx) => (
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

                <Compo dbfiche = { this.props.dbfiche } comp = { nomcomp } idx = { idx }/>

              </tbody>
            </table>
          </div>
        ))}

        <Valid />

        </div> 
      )
  }
}