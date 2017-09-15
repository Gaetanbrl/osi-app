import React, { Component } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import classNames from 'classnames';

export default class Boutons22 extends Component {

	render() {

        let dbliste = this.props.dbfiche;
        let compoliste = ["CO-AL", "CO-EN", "CO-GE", "CO-RE"];
        let compocode = compoliste[this.props.idx];
        let btncolor = ["info", "danger", "warning", "success", "default disabled"];
        let btncompo = classNames({
            btn: true,
            [`btn-${ btncolor[this.props.idx] }`]: true,
            "btn-xs": true, 
            "btn-block": true, 
        });

        let indicompo = [];
        let popover = [];
        
        let compoid = null;
        let compoacro = null;
        let compodesc = null;

        dbliste.map((obj, idx) => {
            if (obj.acronyme_fiche === compocode) {
                return(
                    compodesc = obj.description_fiche,
                    compoid = obj.id_fiche,
                    compoacro = obj.acronyme_fiche
                    )
            }
            else if (obj.composante_fiche === this.props.nomcomp && obj.id_fiche < 100) { 
            /* < 100 pour ne garder que les indicateurs de 1er ordre */
                return(
                    popover = (
                        <Popover id="popover-trigger-hover-focus" title={ compoid + " : " + compoacro }>
                            <span className="lead text-uppercase">{ compodesc }</span> <br/><br/>
                        </Popover>
                    ),

                    indicompo.push(
                            <button 
                            className={ btncompo } 
                            onClick={ this.props.dataSend } 
                            value={ obj.acronyme_fiche }>{ obj.acronyme_fiche }</button>
                    )
                )
            } else {
                return(null)
            }
        })

        return (
            <OverlayTrigger 
            trigger={['hover', 'focus']} 
            placement="right" 
            overlay={ popover }>
                <button 
                key={ this.props.idx }
                className={ btncompo } 
                value={ compocode }
                onClick={ this.props.dataSend }>{ indicompo }</button>
            </OverlayTrigger>
            )
    }
}