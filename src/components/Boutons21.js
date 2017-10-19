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
        
        // Les thèmes par composantes
        let themes = [...dbliste];
        themes = themes.filter((obj) => {
            return (obj.id_fiche > 99 && obj.id_fiche < 199)
        });

        let theme = [];

        themes.map((obj, idx) => {
        console.log(idx +' : '+obj.id_fiche);
            if (obj.composante_fiche === this.props.nomcomp && obj.id_fiche < 100) { 
                dbliste.map((o) => {
                    return(
                        indicompo.push(    
                            <button 
                            className={ btncompo } 
                            value={ o.acronyme_fiche }>{ o.acronyme_fiche }</button>
                        )
                    )
                });
            } else if (obj.composante_fiche === this.props.nomcomp && obj.id_fiche > 99 && obj.id_fiche < 199) {
                return(

                    popover = (
                        <Popover id="popover-trigger-hover-focus" title={ obj.id_fiche + " : " + obj.acronyme_fiche }>
                            <span className="lead">{ obj.description_fiche }</span>
                        </Popover>
                    ),

                    theme.push(
                        <OverlayTrigger 
                        key={ idx } 
                        trigger={['hover', 'focus']} 
                        placement="right" 
                        overlay={ popover }>
                            <button 
                            className={ btncompo } 
                            onClick={ this.props.dataSend } 
                            value={ obj.acronyme_fiche }>
                                { indicompo }
                            </button>
                        </OverlayTrigger>
                    )
                )
            } else { 
                return(null)
            }
                
        })

        return (
            <div>{ theme }</div>
            )
    }
}




