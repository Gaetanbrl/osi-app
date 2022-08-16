import React, { Component } from "react";
import { Button } from "react-bootstrap";
import MethodeBoxNiveau2 from "./MethodeBoxNiveau2";
import config from "../config.json";

const compoToLinkWithMaddog = config.maddogCompoLink;
const maddogUrl = config.maddogUrl;

class MethodeBox extends Component {
    render() {
		let { setRef, refIndic, territoire } = this.props

		const refAndTerritory = setRef && territoire.comm
        const isITcompo = refAndTerritory && refIndic[setRef].composante === "IT"
		let ref = refIndic[setRef]
		if (refAndTerritory && refIndic[setRef].niveau > 1) {
			return (
				<MethodeBoxNiveau2
					setRef={setRef}
					refIndic={refIndic}
					territoire={territoire}
				/>
			)
		} else if (refAndTerritory && refIndic[setRef].composante) {
			// code =
			// 	ref.niveau === 3
			// 		? ref.acronyme
			// 		: !ref.thematique
			// 		? ref.composante + "-" + ref.acronyme
			// 		: ref.composante + "-" + ref.thematique + "-" + ref.acronyme;

			return (
				<div className={`data-block ${isITcompo ? "" : "data-block-methode"}`} header="Méthode" tag="div">
					<div className="data-block-title">
						{
							isITcompo ?
								(<><i className="far fa-chart-bar"></i>Indice</>)
								:
								(<><i className="fas fa-map-marked-alt"></i>Indicateur</>)
						}
					</div>
					<div className="data-block-container">
						<div className="data-value data-value-name">
							{ref.nom}
						</div>
						<div className="data-value data-value-desc">
							{ref.description}
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
								<span>{"Visualiser dans Maddog"}</span>
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
					</div>
					{isITcompo && (
						<div className="data-block-container">
							<div className="grid">
								<div className="col-12">
									<div className="data-value-label">
										Composition
									</div>
									<div>
										<ul>{ref.composition.map(c => <li key={refIndic[c].nom}>{refIndic[c].nom}</li>)}</ul>
									</div>
								</div>
								<div className="col-12">
									<div className="data-value-label">Formule</div>
									<div>{ref.methode}</div>
								</div>
							</div>
						</div>
					)}

				</div>
			)
		} else if (territoire.legendUrl) {
			return (<div className="data-block" header="Méthode" tag="div">
				<div className="data-block-title">
					<i className="far fa-chart-bar"></i>Indice
				</div>
				<div className="data-block-container">
					<div className="data-value data-value-name">
						{ref.nom}
					</div>
					<div className="data-value data-value-desc">
						{ref.description}
					</div>
					<div className="legendImg">
						<img src={territoire.legendUrl} alt="Légende"></img>
					</div>
					{compoToLinkWithMaddog.includes(setRef) && (
						<Button
							target="_blank"
							className="btn-pdf"
							href={`${maddogUrl}&${territoire.navigationView}`}
						>
							<i className="far fa-external-link"></i>
							<span>{"Visualiser dans Maddog"}</span>
						</Button>
					)}
				</div>
			</div>)
		}
		else {
            return null
        }
    }
}
export default MethodeBox
