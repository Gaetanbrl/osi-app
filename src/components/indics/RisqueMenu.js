import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { filter } from 'lodash';

import Tableau from '../../containers/Tableau';

import Compo from "../Compo";

import Accordion from 'react-bootstrap/Accordion';

const RisqueMenu = ({
    refIndic,
	setCompo,
	onCompoClick,
	territoire,
	niveau = 5,
	composition = null,
    bsCol
}) => { 

    const refIndicRisque = filter(
        refIndic,
        compo => compo.niveau === niveau && (composition === null || composition.includes(compo.id)) && compo.id !== "I"
    );

    return (
        <nav className="indicators-menu">
            {
                refIndicRisque.map(compo => {
                    return (
                        <div key = {compo.id} className={bsCol[compo.id]}>
                            <div>
                                {
                                    compo.id === "VS" && (
                                        <span style={{color: "white"}}>{compo.description.toUpperCase()}</span>
                                    )
                                }
                                {
                                    compo.id !== "VS" && (
                                        <Accordion activeKey={setCompo}>
                                            <Accordion.Item eventKey={compo.id} style={{ border: "none", backgroundColor: "transparent"}}>
                                                <Accordion.Header onClick={() => {
                                                        onCompoClick(compo.id)
                                                    }}>
                                                    <span>{compo.description.toUpperCase()}</span>
                                                </Accordion.Header>
                                                <Accordion.Body style={{padding: 0}}>
                                                    {
                                                        !setCompo || compo.id === setCompo && (<Tableau />)
                                                    }
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    )
                                }
                                {
                                    niveau > 3 && (
                                    <Compo
                                        refIndic={refIndic}
                                        setCompo={setCompo}
                                        onCompoClick={onCompoClick}
                                        territoire={territoire}
                                        niveau={niveau - 1}
                                        composition={compo.composition}
                                    />)
                                }
                            </div>
                        </div>
                    )
                
            })
            }
        </nav>
    )
}

export default RisqueMenu;