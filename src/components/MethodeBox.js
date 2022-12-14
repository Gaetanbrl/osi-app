import React, { Component } from "react";
import { Button } from "react-bootstrap";

class MethodeBox extends Component {
	render() {
		let { setRef, refIndic, territoire } = this.props;

		let ref;
		// let code = "";
		let compo = {
			AL: "Aléas",
			EN: "Enjeux",
			GE: "Gestion",
			RE: "Représentation",
			IT: "Indices composites"
		};

		if (setRef && territoire.comm && refIndic[setRef].niveau > 1) {
			ref = refIndic[setRef];
			let composition = [];
			ref.composition.map(c => {
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
						<Button
							target="_blank"
							className="btn-pdf"
							disabled={!ref.lien1}
							href={ref.lien1}
						>
							<i className="far fa-external-link"></i>
							<span>{ref.texteLien1 || "Lien"}</span>
						</Button>
						<Button
							target="_blank"
							className="btn-pdf"
							disabled={!ref.lien2}
							href={ref.lien2}
						>
							<i className="far fa-external-link"></i>
							<span>{ref.texteLien2 || "Lien"}</span>
						</Button>
						<strong>{ref.service}</strong>
					</div>
				</div>
			);
		} else if (
			setRef &&
			territoire.comm &&
			refIndic[setRef].composante !== "IT"
		) {
			ref = refIndic[setRef];

			// code =
			// 	ref.niveau === 3
			// 		? ref.acronyme
			// 		: !ref.thematique
			// 		? ref.composante + "-" + ref.acronyme
			// 		: ref.composante + "-" + ref.thematique + "-" + ref.acronyme;

			return (
				<div
					className="data-block data-block-methode"
					header="Méthode"
					tag="div"
				>
					<div className="data-block-title">
						<i className="fas fa-map-marked-alt"></i>Indicateur
					</div>
					<div className="data-block-container">
						<div className="data-value data-value-name">{ref.nom}</div>
						<div className="data-value data-value-desc">{ref.description}</div>
						<Button
							target="_blank"
							className="btn-pdf"
							disabled={!ref.lien1}
							href={ref.lien1}
						>
							<i className="far fa-external-link"></i>
							<span>{ref.texteLien1 || "Lien"}</span>
						</Button>
						<Button
							target="_blank"
							className="btn-pdf"
							disabled={!ref.lien2}
							href={ref.lien2}
						>
							<i className="far fa-external-link"></i>
							<span>{ref.texteLien2 || "Lien"}</span>
						</Button>
					</div>
				</div>
			);
		} else if (
			setRef &&
			territoire.comm &&
			refIndic[setRef].composante === "IT"
		) {
			ref = refIndic[setRef];
			let composition = [];
			ref.composition.map(c => {
				return composition.push(
					<li key={refIndic[c].nom}>{refIndic[c].nom}</li>
				);
			});
			return (
				<div className="data-block" header="Méthode" tag="div">
					<div className="data-block-title">
						<i className="far fa-chart-bar"></i>Indice
					</div>
					<div className="data-block-container">
						<div className="data-value data-value-name">{ref.nom}</div>
						<div className="data-value data-value-desc">{ref.description}</div>
						<Button
							target="_blank"
							className="btn-pdf"
							disabled={!ref.lien1}
							href={ref.lien1}
						>
							<i className="far fa-external-link"></i>
							<span>{ref.texteLien1 || "Lien"}</span>
						</Button>
						<Button
							target="_blank"
							className="btn-pdf"
							disabled={!ref.lien2}
							href={ref.lien2}
						>
							<i className="far fa-external-link"></i>
							<span>{ref.texteLien2 || "Lien"}</span>
						</Button>
					</div>
					<div className="data-block-container">
						<div className="grid">
							<div className="col-12">
								<div className="data-value-label">Composition</div>
								<div>
									<ul>{composition}</ul>
								</div>
							</div>
							<div className="col-12">
								<div className="data-value-label">Formule</div>
								<div>{ref.methode}</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}
export default MethodeBox;
