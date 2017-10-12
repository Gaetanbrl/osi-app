import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
    return(
        <div id="Footer"><br/>
        <div className="container-fluid well">
            <div className="row">
            <div className="col-md-6 ">
                <p><small className="text-muted"><strong>Réalisation : <a href="mailto:oliv.marcel@gmail.com"> Olivier Marcel</a>, 2017</strong>
                <br/> <i>Prototype conçu et développé à l'Institut Universitaire Européen de la Mer lors d'un stage dans le cadre du Master2 Carthagéo et du projet Osirisc, financé par la Fondation de France.</i>
                <br/><br/><strong>Supervision : </strong>
                <br/>Iwan Le Berre (Maître de conférence en géographie, UMR LETG) 
                <br/>et Manuelle Philippe (Ingénieure d'Etude en économie, UMR AMURE)</small></p>
            </div>
            <div className="col-md-6 text-right">
                    <p><a href="http://www.ensg.eu/Master-2-Carthageo"> 
                        <img height="70px" src='/img/carthageo.png' alt="logo Carthagéo" />
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <a href="https://www.fondationdefrance.org/"> 
                        <img height="70px" src="/img/fondationfr.png" alt="logo Fondation de France" />
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="http://www.cnrs.fr/"> 
                        <img height="70px"  src="/img/logoCNRS.jpg" alt="logo CNRS" />
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

                    <br/>

                    <p><a href="https://www.labexmer.eu"> 
                        <img height="70px"  src="/img/labexmer.png" alt="logo Labex Mer" />
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <a href="https://www-iuem.univ-brest.fr/"> 
                        <img  height="70px" src="/img/iuem.png" alt="logo IUEM" />
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
            </div>
        </div>
        </div>
    )
  }
}
