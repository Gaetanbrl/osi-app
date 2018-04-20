import React, { Component } from 'react';
import dreal from '../data/img/dreal.png';
import fondationfr from '../data/img/fondationfr.png';
import logoCNRS from '../data/img/logoCNRS.jpg';
import labexmer from '../data/img/labexmer.png';
import iuem from '../data/img/iuem.png';

export default class Footer extends Component {

  render() {
    return(
        <div id="Footer"><br/>
        <div className="container-fluid well">
            <div className="row">
            <div className="col-md-6">
                <p><small className="text-muted"><i>Application conçue et développée à l'Institut Universitaire Européen de la Mer dans le cadre du projet <a href="https://www-iuem.univ-brest.fr/pops/projects/osirisc-vers-un-observatoire-integre-des-risques-cotiers-d-erosion-submersion"><strong>OSIRISC</strong></a>, avec le soutien de la Fondation de France et la DREAL Bretagne.</i>
                <br/> 
                <strong>Réalisation : </strong><a href="mailto:oliv.marcel@gmail.com"> Olivier Marcel</a>, 2018</small></p>
            </div>
            <div className="col-md-6 text-right">
                    <p><a href="http://www.bretagne.developpement-durable.gouv.fr/"> 
                        <img height="70px" src={dreal} alt="logo DREAL Bretagne" />
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://www.fondationdefrance.org/"> 
                        <img height="70px" src={fondationfr} alt="logo Fondation de France" />
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="http://www.cnrs.fr/"> 
                        <img height="70px"  src={logoCNRS} alt="logo CNRS" />
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <a href="https://www.labexmer.eu"> 
                        <img height="70px"  src={labexmer} alt="logo Labex Mer" />
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <a href="https://www-iuem.univ-brest.fr/"> 
                        <img  height="70px" src={iuem} alt="logo IUEM" />
                    </a>
                    </p>

            </div>
            </div>
        </div>
        </div>
    )
  }
}
