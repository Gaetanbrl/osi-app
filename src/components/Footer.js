import React, { Component } from 'react';
import dreal from '../data/img/dreal.png';
import fondationfr from '../data/img/fondationfr.png';
import logoCNRS from '../data/img/logoCNRS.jpg';
import labexmer from '../data/img/labexmer.png';
import iuem from '../data/img/iuem.png';
import ubo from '../data/img/ubo.png';

export default class Footer extends Component {

  render() {
    return(
        <div id="Footer">

          <div className="">
            <div className="">
                <p><small className="text-muted"><i>Application conçue et développée à l'Institut Universitaire Européen de la Mer dans le cadre d'
                    <a href="https://www-iuem.univ-brest.fr/pops/projects/osirisc-vers-un-observatoire-integre-des-risques-cotiers-d-erosion-submersion"><strong>OSIRISC</strong></a>
                    , avec le soutien de la Fondation de France et la DREAL Bretagne et mise à disposition selon les termes de la
                    <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/"> Licence Creative Commons Attribution - Pas d’Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International.</a></i>
                <br/>
                <br/>
                <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                    <img alt="Licence Creative Commons" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
                <br/>
                <strong>Réalisation : </strong><a href="mailto:oliv.marcel@gmail.com"> Olivier Marcel</a>, 2018.
                </small></p>
            </div>
            <div className="text-right">
                <p><a href="https://www.bretagne.developpement-durable.gouv.fr/">
                    <img height="70px" src={dreal} alt="logo DREAL Bretagne" />
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.fondationdefrance.org/">
                    <img height="70px" src={fondationfr} alt="logo Fondation de France" />
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.cnrs.fr/">
                    <img height="70px"  src={logoCNRS} alt="logo CNRS" />
                </a>

                <br/>
                <br/>

                <a href="https://www.labexmer.eu">
                    <img height="70px"  src={labexmer} alt="logo Labex Mer" />
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <a href="https://www-iuem.univ-brest.fr/">
                    <img  height="70px" src={iuem} alt="logo IUEM" />
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.univ-brest.fr/">
                    <img  height="70px" src={ubo} alt="logo UBO" />
                </a>
                </p>

            </div>
            </div>
        </div>
    )
  }
}
