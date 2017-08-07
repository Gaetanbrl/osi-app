import React, { Component } from 'react';
import carta from './components/carthageo.png'

export default class Footer extends Component {

  render() {
    return(
        <div id="Footer"><br/>
        <div className="container-fluid well">
            <div className="row">
            <div className="col-md-6 ">
                <p><small>Réalisation : <a href="mailto:oliv.marcel@gmail.com"> Olivier Marcel</a>, 2017<br/> sous la direction de Iwan Le Berre et Manuelle Philippe</small> </p>
            </div>
            <div className="col-md-6 text-right">
                    <a href="https://www.fondationdefrance.org/"> 
                        <img height="70px" src={carta} alt="logo Carthagéo" />
                    </a>

                    <a href="https://www.fondationdefrance.org/"> 
                        <img height="70px" src="https://www.fondationdefrance.org/sites/all/themes/custom/fdf_website_theme/dist/images/logo.png" alt="logo Fondation de France" />
                    </a>

                    <a href="http://www.cnrs.fr/"> 
                        <img height="70px"  src="http://www.cnrs.fr/aquitaine/IMG/jpg/logoCNRS.jpg" alt="logo CNRS" />
                    </a>

                    <a href="https://www.labexmer.eu"> 
                        <img height="70px"  src="https://www.labexmer.eu/logo.png" alt="logo Labex Mer" />
                    </a>

                    <a href="https://www-iuem.univ-brest.fr/logo.png"> 
                        <img  height="70px" src="https://www-iuem.univ-brest.fr/logo.png" alt="logo IUEM" />
                    </a>
            </div>
            </div>
        </div>
        </div>
    )
  }
}
