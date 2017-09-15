import React, { Component } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import classNames from 'classnames';

export default class Boutons21 extends Component {

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
        let subtheme = [];
        let theme = null;

        dbliste.map((obj, idx) => {
            if (obj.theme === theme && obj.composante_fiche === this.props.nomcomp && obj.id_fiche < 100) { 
            /* < 100 pour ne garder que les indicateurs de 1er ordre */
                return(
                    subtheme.push(    
                            <button 
                            className={ btncompo } 
                            onClick={ this.props.dataSend } 
                            value={ obj.theme_fiche }>{ obj.acronyme_fiche }</button>
                    )
                );
            } else if (obj.composante_fiche === this.props.nomcomp && obj.id_fiche > 99 && obj.id_fiche < 199) {
                return(
                    theme = obj.theme_fiche,

                    popover = (
                        <Popover id="popover-trigger-hover-focus" title={ obj.id_fiche + " : " + obj.acronyme_fiche }>
                            <span className="lead">{ obj.description_fiche }</span> <br/><br/>
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
                            value={ obj.acronyme_fiche }>
                                { subtheme }
                            </button>
                        </OverlayTrigger>
                    )
                )
            } else { 
                return(null)
            }
                
        })

        return (
            <div>{ indicompo }</div>
            )
    }
}




