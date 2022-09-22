import { Fill, Stroke, Style } from "ol/style";

export const styleBaseEpci = new Style({
	stroke: new Stroke({
		color: [50, 50, 50, 0.8],
		width: 1
	}),
	fill: new Fill({
		color: [100, 100, 100, 0.1]
	}),
})

export const styleEpciCommPilote = new Style({
	stroke: new Stroke({
		color: [50, 50, 50, 0.8],
		width: 1
	}),
	fill: new Fill({
		color: [70, 70, 70, 0.8]
	}),
})

export const styleEpciComm = new Style({
	stroke: new Stroke({
		color: [50, 50, 50, 0.8],
		width: 1
	}),
	fill: new Fill({
		color: [70, 70, 70, 0.0]
	}),
})

export const styleEpciCommHover = new Style({
	stroke: new Stroke({
		color: [15, 15, 15, 0.8],
		width: 1
	}),
	fill: new Fill({
		color: [2, 149, 167, 0.0]
	}),
})

export const styleSelectedComm = new Style({
	stroke: new Stroke({
		color: [50, 50, 50, 0.8],
		width: 1
	}),
	fill: new Fill({
		color: [0, 0, 0, 0], // Enable click handler on fill area
	}),
});

export const styleEpci = (feature, resolution) => {
	const sitePilote = feature.get('site_pilote')
	if (sitePilote === true || sitePilote === 'true') {
		return styleEpciCommPilote;
	}
	return styleEpciComm;
}

export const styleCommLayer = new Style({
	stroke: new Stroke({
		color: [50, 50, 50, 0.8],
		width: 2.5
	}),
	fill: new Fill({
		color: [255, 255, 255, 0]
	}),
});

export const styleSelectLayer = new Style({
	stroke: new Stroke({
		color: "#673ab7",
		width: 4
	})
});

export const styleEpciGlobal = new Style({
	stroke: new Stroke({
		color: [50, 50, 50, 0.8],
		width: 1
	})
})


export const osiStyles = {
    styleEpciCommHover: styleEpciCommHover,
    styleEpciComm: styleEpciComm,
    styleEpciCommPilote: styleEpciCommPilote,
	styleBaseEpci: styleBaseEpci,
	styleSelectedComm: styleSelectedComm,
	styleEpci: styleEpci,
	styleCommLayer: styleCommLayer,
	styleSelectLayer: styleSelectLayer
}