import React from "react";
import { ListGroupItem } from "react-bootstrap";
import Plot from 'react-plotly.js';
import { isEmpty, keys, pickBy } from "lodash";

export default function FeatureBox({
	error,
	loading,
	refIndic,
	setRef,
	infos,
	infosCompare,
	timeActivated
}) {
	const barData = (featureProps, color = "#078aa3") => {
		if (featureProps.data_discr) {
			return [{
				type: "bar",
				orientation: 'h',
				x: [featureProps.data_discr],
				y: [`${String(refIndic[featureCompo].nom)} - ${new Date(featureProps.date_data).getFullYear()}`],
				marker: {
					color: color
				}
			}]
		}
		let subIndic = pickBy(featureProps, (i, j) => keys(refIndic).includes(j.toUpperCase()));
		return keys(subIndic).map(indic => ({
			type: "bar",
			orientation: 'h',
			x: [featureProps[indic]],
			y: [`${String(refIndic[indic.toUpperCase()].description)} - ${new Date(featureProps.date_data).getFullYear()}`],
			marker: {
				color: indic && setRef === indic.toUpperCase() ? "grey" : color
				// Récupération de la couleur de la composante
				// color: refColor[.toUpperCase()[0]]
			}
		}))
	}
		

	// Composante Bar chart colors
	// const refColor = {
	// 	A: "#e03c3b",
	// 	E: "#f7b733",
	// 	G: "#449d44",
	// 	R: "#31b0d5",
	// 	I: "#dedede"
	// };

	if (loading) {
		return <div className="loader"></div>;
	}

	if (error || isEmpty(infos) || !setRef) {
		return null;
		// <div>Error! {error.message}</div>;
	}

	const propFeature = infos.properties;

	let composition = refIndic[setRef].composition || [refIndic[setRef].id];

	if (!composition || !composition.length) {
		return null;
	}
	const featureCompo = propFeature.id_meta.split("_")[0].toUpperCase();

	let data = barData(propFeature);
	if (!isEmpty(infosCompare) && timeActivated) {
		const propFeatureCompare = infosCompare?.properties;
		if (propFeatureCompare?.date_data !== propFeature?.date_data) {
			data = [...data, ...barData(propFeatureCompare, "#a23f97")];
		}
	}

	let layout = {
		title: '',
		xaxis: {
			range: [0, 5],
			domain: [0, 1],
			zeroline: true,
			showline: false,
			showticklabels: true,
			showgrid: true,
			dtick: 1
		},
		yaxis: {
			automargin: true,
			tickmode: "linear"
		},
		autosize: true,
		responsive: true,
		showlegend: false,
		margin: {
			r: 50,
			t: 5,
			b: 120,
			pad:5
		}
	}

	let config = {
		displayModeBar: false
	}

	return (
		<div className="charts-container">
			<ListGroupItem tag="div">
				<Plot
					data={data}
					layout={layout}
					useResizeHandler={true}
					style={{ width: "100%", height: "100%", maxHeight: 200 }}
					config={config}
				/>
			</ListGroupItem>
		</div>
	);
}
