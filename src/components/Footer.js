import React, { Component } from 'react';
import logo_dreal from '../data/img/dreal.png';
import logo_fondationfr from '../data/img/fondationfr.png';
import logo_logoCNRS from '../data/img/logoCNRS.jpg';
import logo_labexmer from '../data/img/labexmer.png';
import logo_iuem from '../data/img/iuem.png';
import logo_ubo from '../data/img/ubo.png';
import logo_isblue from '../data/img/logo-isblue.jpg';
import logo_cerema from '../data/img/logo-cerema.jpg';

export default class Footer extends Component {

  render() {
    return(
      <div id="Footer">
        <div className="footer-partners">
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.univ-brest.fr/">
              <img  height="70px" src={logo_ubo} alt="logo UBO" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www-iuem.univ-brest.fr/">
              <img  height="70px" src={logo_iuem} alt="logo IUEM" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cnrs.fr/">
              <img height="70px"  src={logo_logoCNRS} alt="logo CNRS" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.labexmer.eu">
              <img height="70px"  src={logo_labexmer} alt="logo Labex Mer" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.labexmer.eu/fr/isblue">
              <img height="70px"  src={logo_isblue} alt="logo ISblue" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cerema.fr/fr">
              <img height="70px"  src={logo_cerema} alt="logo Cerema" />
            </a>
          </div>
          <div>
            <span className="footer-terms">
              Réalisation co-financée par
            </span>
            <a target="_blank" rel="noopener noreferrer" href="http://www.bretagne.developpement-durable.gouv.fr/">
              <img height="70px" src={logo_dreal} alt="logo DREAL Bretagne" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.fondationdefrance.org/">
              <img height="70px" src={logo_fondationfr} alt="logo Fondation de France" />
            </a>
          </div>
        </div>
        <div className="footer-licence">
          <a rel="license" className="licence-logo" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
            <img alt="Licence Creative Commons" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
          </a>
          <div className="licence-text">Application conçue et développée à l'Institut Universitaire Européen de la Mer dans le cadre des projets
            <a href="https://www-iuem.univ-brest.fr/pops/projects/osirisc-vers-un-observatoire-integre-des-risques-cotiers-d-erosion-submersion"> OSIRISC et OSIRISC+</a>
            , avec le soutien de la Fondation de France et la DREAL Bretagne et mise à disposition selon les termes de la
            <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/"> Licence Creative Commons Attribution - Pas d’Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International.</a>
          </div>
        </div>
      </div>
    )
  }
}
