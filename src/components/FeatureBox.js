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
	onLoad = () => {},
	...props
}) {
	// on init and on url change
	useEffect(() => {
		if (url) {
			onLoad(url);
		}
	}, [url]);

	// Composante Bar chart colors
	// const col = {
	// 	A: "#c9302c",
	// 	E: "#ec971f",
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

	// create chart
	let series = Object.keys(infos)
		.filter(key => composition.includes(key.toUpperCase()))
		.map(k => ({
			values: infos[k],
			name: String(refIndic[k.toUpperCase()].nom)
		}));
	let data = series.map(s => ({
		type: "bar",
		orientation: 'h',
		x: series.map(z => z.values),
		y: series.map(z => z.name),
		// Récupération de la couleur de la composante
		// color: col[k.charAt(0).toUpperCase()],
		marker: {
			color: "#999999"
		}
	}));

	let layout = {
		title: '',
		xaxis: {
			range: [0, Math.max(...series.map(z => z.values)) + 2],
			domain: [0, 1],
			zeroline: true,
			showline: false,
			showticklabels: true,
			showgrid: true
		},
		autosize: true,
		responsive: true,
		showlegend: false,
		margin: {
			l: "auto",
			r: 20,
			b: 20,
			t: 0
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
