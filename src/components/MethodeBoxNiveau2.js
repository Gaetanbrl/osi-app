import React, { Component } from "react";
import { Button } from "react-bootstrap";
import config from "../config.json";

const compoToLinkWithMaddog = config.maddogCompoLink;
const maddogUrl = config.maddogUrl;
const MethodeBoxNiveau2 = ({
    setRef,
    refIndic,
    territoire
}) => {
    // let code = "";
    let compo = {
        AL: "Aléas",
        EN: "Enjeux",
        GE: "Gestion",
        RE: "Représentation",
        IT: "Indices composites",
    }
    let ref = refIndic[setRef];
    let composition = [];
    ref.composition.forEach(c => {
        if (refIndic[c]) {
            return composition.push(
                <li key={refIndic[c].nom}>{refIndic[c].description}</li>
            );
        } else {
            return console.error(
                `[${c}] is not in the 'composition' array of [${setRef}]...`
            );
        }
    });

    let desc =
        ref.niveau === 2
            ? compo[ref.composante] + " > " + ref.description
            : ref.description;
    return (
        <div
            className="data-block data-block-methode"
            header="Méthode"
            tag="div"
        >
            <div className="data-block-title">
                <i className="far fa-chart-bar"></i>Indice
            </div>
            <div className="data-block-container">
                <div className="data-value-name">{desc}</div>
                <div className="data-value">
                    <div className="data-value-label">Composition</div>
                    <ul>{composition}</ul>
                </div>
                <div className="data-value min">
                    <div className="data-value-label">Formule</div>
                    <div>{ref.methode}</div>
                </div>
                {territoire.legendUrl && (
                    <div className="legendImg">
                        <img src={territoire.legendUrl} alt="Légende"></img>
                    </div>
                )}
                <Button
                    target="_blank"
                    className="btn-pdf"
                    disabled={!ref.lien1}
                    href={ref.lien1}
                >
                    <i className="far fa-external-link"></i>
                    <span>{ref.texteLien1 || "Lien"}</span>
                </Button>
                {compoToLinkWithMaddog.includes(setRef) ? (
                    <Button
                        target="_blank"
                        className="btn-pdf"
                        href={`${maddogUrl}&${territoire.navigationView}`}
                    >
                        <i className="far fa-external-link"></i>
                        <span>{"Voir dans Maddog"}</span>
                    </Button>
                ) : (
                    <Button
                        target="_blank"
                        className="btn-pdf"
                        disabled={!ref.lien2}
                        href={ref.lien2}
                    >
                        <i className="far fa-external-link"></i>
                        <span>{ref.texteLien2 || "Lien"}</span>
                    </Button>
                )}
                <strong>{ref.service}</strong>
            </div>
        </div>
    );
};

export default MethodeBoxNiveau2;
