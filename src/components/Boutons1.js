import React, { Component } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import classNames from 'classnames';

export default class Boutons1 extends Component {

  render() {

    let dbliste = this.props.dbfiche;
    let btncolor = ["info", "danger", "warning", "success", "default disabled"];
    let btncompo = classNames({
      btn: true,
      [`btn-${ btncolor[this.props.idx] }`]: true,
      "btn-xs": true, 
      "btn-block": true, 
    });

        let indicompo = [];
      let popover = [];

        dbliste.map((obj, idx) => {
        if (obj.composante_fiche === this.props.nomcomp && obj.id_fiche < 100) { 
            /* < 100 pour ne garder que les indicateurs de 1er ordre */
            return(
            popover = (
              <Popover id="popover-trigger-hover-focus" title={ obj.id_fiche + " : " + obj.acronyme_fiche }>
                  <span className="lead">{ obj.description_fiche }</span> <br/><br/>
                  <strong>Composante : </strong> <span className="text-uppercase">{ obj.composante_fiche }</span> <br/>
                  <strong>Thématique : </strong> <span className="text-uppercase">{ obj.theme_fiche }</span> <br/>
                  <strong>Objet : </strong> <span className="text-uppercase">{ obj.objet_fiche }</span>
                </Popover>
            ),

              indicompo.push(
              <OverlayTrigger 
              key={ idx } 
              trigger={['hover', 'focus']} 
              placement="right" 
              overlay={ popover }>
                <button 
                className={ btncompo } 
                onClick={ this.props.dataSend } 
                value={ obj.acronyme_fiche }>{ obj.acronyme_fiche }</button>
              </OverlayTrigger>
            )
        )
      } return null
    })

    return (
          <div>{ indicompo }</div>
      )
  }
}