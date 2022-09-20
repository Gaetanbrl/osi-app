import React, {useEffect} from "react";
import { ListGroupItem } from "react-bootstrap";
import Plot from 'react-plotly.js';;

export default function FeatureBox({
	error,
	loading,
	refIndic,
	setRef,
	infos,
	url,
	onLoad = () => {}
}) {
	// on init and on url change
	useEffect(() => {
		if (url) {
			onLoad(url);
		}
	}, [url]);

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

	if (error || !infos || !setRef) {
		return null;
		// <div>Error! {error.message}</div>;
	}

	let composition = refIndic[setRef].composition || [refIndic[setRef].id];

	if (!composition || !composition.length) {
		return null;
	}

	let data = [{
		type: "bar",
		orientation: 'h',
		x: [infos.data_discr],
		y: [String(refIndic[infos.id_meta.toUpperCase()].nom)],
		marker: {
			color: "#999999"
			// Récupération de la couleur de la composante
			// color: refColor[infos.id_meta.toUpperCase()[0]]
		}
	}];
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
		autosize: true,
		responsive: true,
		showlegend: false,
		margin: {
			l: 100,
			r: 50,
			b: 120,
			t: 20,
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
