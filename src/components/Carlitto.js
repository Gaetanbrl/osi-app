import React, { Component } from "react";
import { View, Map, Overlay, Feature } from "ol";
import { Tile, Vector, Image } from "ol/layer";
import { Style , Stroke, Fill } from "ol/style";
import { fromLonLat, get as getProjection } from "ol/proj";
import { register } from "ol/proj/proj4";
import { XYZ, Vector as VectorSource, ImageWMS } from "ol/source";
import { GeoJSON, WKT } from "ol/format";
import { pointerMove } from "ol/events/condition";
import { ScaleLine, defaults as defaultControl } from "ol/control";
import { Select, defaults as defaultInteraction } from "ol/interaction";

import proj4 from "proj4";
import { keyBy } from 'lodash';

import meta_com from '../data/meta_com.json';

const zoomSizes = {
	min: 7.48,
	minComm: 59,
	maxComm: 200,
	max: 480,
	default: 400,
};

const styleBaseEpci = new Style({
	stroke: new Stroke({
		color: [50, 50, 50, 0.8],
		width: 1.5
	}),
	fill: new Fill({
		color: [100, 100, 100, 0.1]
	}),
});

const styleEpciCommPilote = new Style({
	stroke: new Stroke({
		color: [50, 50, 50, 0.8],
		width: 1
	}),
	fill: new Fill({
		color: [70, 70, 70, 0.8]
	}),
});

const styleEpciComm = new Style({
	stroke: new Stroke({
		color: [50, 50, 50, 0.8],
		width: 1
	}),
	fill: new Fill({
		color: [70, 70, 70, 0.3]
	}),
});

const styleEpciCommHover = new Style({
	stroke: new Stroke({
		color: [15, 15, 15, 0.8],
		width: 1
	}),
	fill: new Fill({
		color: [2, 149, 167, 0.8]
	}),
});

const styleSelectedComm = new Style({
	stroke: new Stroke({
		color: [50, 50, 50, 0.8],
		width: 1
	}),
	fill: new Fill({
		color: [0, 0, 0, 0], // Enable click handler on fill area
	}),
});

const defaultViewProps = {
	center: fromLonLat([-3, 48.15]),
	minResolution: zoomSizes.minComm,
	maxResolution: zoomSizes.max - 1,
};

class Carlitto extends Component {

  	carMap = null

  	commSource = null
  	commGeom = null

  	base = null
  	baseTopology = null
  	commLayer = null
  	carLayer = null
  	selectedLayer = null
  	baseEpci = null
  	epci = null
  	comm = null

  	selSource = null
  	selGeom = null

  	overlay = null

  	url = null

	moveHandler(event) {
		let feature = this.carMap.forEachFeatureAtPixel(event.pixel, (feature, layer) => {
			if (this.carMap.getView().getResolution() < zoomSizes.minComm) {
				return null;
			}
			let nom = feature.get('nom')
			let code = feature.get('insee')
			let sitePilote = feature.get('site_pilote')
			let insee = feature.get('insee')
			if (!nom && !code) {
				return null;
			}
			this.overlay.setPosition(event.coordinate);

			let overlayText = '<h6><strong>' + nom + '</strong>'
			if (code) {
				overlayText += ' (' + code + ')';
			}
			if (this.commNbIndic && insee && this.commNbIndic[insee] && this.commNbIndic[insee].nb_indic) {
				overlayText += '<br /><i>' + this.commNbIndic[insee].nb_indic +' indicateurs</i>';
			}
			if (sitePilote === true) {
				overlayText += '<br /><i>Territoire pilote des projets OSIRISC et OSIRISC+</i>';
			}
			overlayText += '</h6>'

			this.overlay.getElement().innerHTML = overlayText;
			return feature;
		});

		this.overlay.getElement().style.display = feature ? '' : 'none';
		document.body.style.cursor = feature ? 'pointer' : '';
	}

	clickHandler(event) {
		const { onEpciClick, onCommClick, onCarClick, territoire } = this.props;
		const viewResolution = this.carMap.getView().getResolution();
		let url;
		if (viewResolution < zoomSizes.minComm) {
			url = this.carSource.getGetFeatureInfoUrl(
				event.coordinate, viewResolution, 'EPSG:3857',
				{
					'INFO_FORMAT': 'application/json',
				},
			);
		}

		if (url) {
			this.url = url;
			onCarClick(this.url);
		}
		this.carMap.forEachFeatureAtPixel(event.pixel, (feature, layer) => {
			let nom = feature.get('nom')
			let insee = feature.get('insee')
			let siren = feature.get('siren_epci')
			let geom = feature.getGeometry()

			if ((viewResolution < zoomSizes.maxComm && !insee) || (territoire && territoire.insee === insee)) {
				return false;
			}
			let epci = {siren: siren, nom: nom}
			let comm = {insee: insee, nom: nom, geom: geom}
			insee ? onCommClick(comm) : onEpciClick(epci)
			const minResolution = insee ? zoomSizes.min : zoomSizes.minComm;

			this.carMap.getView().fit(feature.getGeometry(), {duration: 500, minResolution, constrainResolution: false, padding: [40, 40, 40, 40] })
			return true
	  }, {
		  layerFilter: (layer) => {
			return true;
		  },
		  hitTolerance: 1,
	  });
	  document.body.style.cursor = 'pointer';
	}

	componentDidMount() {

		window.onresize =
			function() {
				this.carMap && this.carMap.updateSize();
			}
		;
		this.commNbIndic = keyBy(meta_com, c => c.id_com);

		this.base = new Tile({
			name: 'base',
			opacity: 1,
			source: new XYZ({
				name: 'base',
				url:'https://s.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
				attributions: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
			}),
		})

		this.baseTopology = new Tile({
			name: 'baseTopology',
			opacity: 1,
			source: new XYZ({
				name: 'baseTopology',
				url:'https://s.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png'
			})
		})

		this.commSource = new VectorSource({
		})
		this.commLayer = new Vector({
			name: "commLayer",
			source: this.commSource,
			style: new Style({
				stroke: new Stroke({
					color: [50, 50, 50, 0.8],
					width: 2.5
				}),
				fill: new Fill({
					color: [255, 255, 255, .5]
				}),
			}),
			minResolution: zoomSizes.min,
			maxResolution: zoomSizes.minComm,
		})

		this.carSource = new ImageWMS({
			url: 'https://portail.indigeo.fr/geoserver/LETG-BREST/wms',
			params: {
				LAYERS: 'osi',
				STYLE: 'default'
			},
			serverType: 'geoserver',
			crossOrigin: 'anonymous'
		})
		this.carLayer = new Image({
			name: 'carLayer',
			source: this.carSource,
			opacity: .8,
			minResolution: zoomSizes.min,
			maxResolution: zoomSizes.minComm,
			zIndex: 20,
		})

		this.selSource = new VectorSource({
		});
		this.selectedLayer = new Vector({
			name: 'selectedLayer',
			source: this.selSource,
			style: new Style({
				stroke: new Stroke({
					color: [255, 255, 255, 1],
					width: 2.5
				})
			}),
			zIndex: 20,
		})

		const sourceEpci = new VectorSource({
			format: new GeoJSON(),
			url: 'epci3857.json'
		})
		this.baseEpci = new Vector({
			name: 'baseepci',
			source: sourceEpci,
			style: styleBaseEpci,
			minResolution: zoomSizes.min,
			maxResolution: zoomSizes.maxComm,
			zIndex: 0
		});

		this.epci = new Vector({
			source: sourceEpci,
			style: (feature, resolution) => {
				if (feature.get('site_pilote') === true) {
					return styleEpciCommPilote;
				}
				return styleEpciComm;
			},
			minResolution: zoomSizes.maxComm,
			maxResolution: zoomSizes.max,
			zIndex: 1,
		})

		this.comm = new Vector({
			source: new VectorSource({
				format: new GeoJSON(),
				url: 'comm3857.json'
			}),
			style: styleEpciComm,
			minResolution: zoomSizes.minComm,
			maxResolution: zoomSizes.maxComm,
			zIndex: 10,
		})

		this.commIsSelected = new Vector({
			source: new VectorSource({
				format: new GeoJSON(),
				url: 'comm3857.json'
			}),
			style: styleSelectedComm,
			minResolution: zoomSizes.min,
			maxResolution: zoomSizes.minComm,
			zIndex: 10,
		})

		const scaleLineControl = new ScaleLine();
		let view = new View({
			...defaultViewProps,
			projection: 'EPSG:3857',
			resolution: zoomSizes.default
		});

		this.carMap = new Map({
			target: this.refs.map,
			layers: [
				this.base,
				this.baseTopology,
				this.commLayer,
				this.carLayer,
				this.selectedLayer,
				this.baseEpci,
				this.epci,
				this.comm,
				this.commIsSelected,
			],
			controls: defaultControl({collapsible: false}).extend([
				scaleLineControl,
			]),
			interactions: defaultInteraction({mouseWheelZoom:true}),
			view: view
		});

		this.carMap.on('precompose', function(evt) {
		  evt.context.globalCompositeOperation = 'multiply';
		});

		this.selectedLayer.on('precompose', function(evt) {
			evt.context.globalCompositeOperation = 'normal';
		});
		this.selectedLayer.on('precompose', function(evt) {
			evt.context.globalCompositeOperation = 'source-over';
		});

		// Add hover style interaction
		let epciHover = new Select({
			condition: pointerMove,
			style: styleEpciCommHover,
			layers: [this.epci],
		})
		this.carMap.addInteraction(epciHover);

		let commHover = new Select({
			condition: pointerMove,
			style:  styleEpciCommHover,
			layers: [this.comm]
		})
		this.carMap.addInteraction(commHover);

		// Add Local Name overlay
		this.overlay = new Overlay({
			element: this.refs.olTool,
			offset: [10, -5],
			positioning: 'bottom-left',
		})
		this.carMap.addOverlay(this.overlay)
		this.carMap.on('pointermove', (evt) => this.moveHandler(evt));

		this.carMap.on('click', (evt) => this.clickHandler(evt));

		this.setState({
			carMap: this.carMap,
			carLayer: this.carLayer
		});

	}

	componentDidUpdate(prevProps, prevState) {
		let { territoire, setRef, infos, error } = this.props
		let carLayer = this.state.carLayer

		let cqlFilter = null

		if (prevProps.setRef !== setRef) {
			carLayer.getSource().updateParams({
				STYLES: setRef.toLowerCase()
			})
		}

		const viewProps = { ...defaultViewProps, ...this.carMap.getView().getProperties() };
		if (prevProps.territoire !== territoire && !!territoire) {
			viewProps["minResolution"] = zoomSizes.min;

			cqlFilter = `id_com=${territoire.insee}`
			carLayer.getSource().updateParams({
				CQL_FILTER: cqlFilter
			})

			this.carMap.getView().fit(territoire.geom, {duration: 500})

			this.commGeom = new Feature({
				geometry: territoire.geom,
				name: 'commName'
				})

			let feat = this.commLayer.getSource().getFeatures()

			if (feat.length > 0) {
   				this.commSource.removeFeature(feat[0]);
	   			this.commSource.addFeature(this.commGeom);
			} else {
				this.commSource.addFeature(this.commGeom);
			}

		} else {
			viewProps["minResolution"] = zoomSizes.min;
			cqlFilter = null
		}
		this.carMap.setView(new View(viewProps));

		if (infos) {
			let car = infos["id_car"];
			let E = Number(car.slice(5,12));
			let N = Number(car.slice(13,20));

			let projCode = 'EPSG:3035';
			proj4.defs(projCode, '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
			register(proj4);

			/* let epsg3035 = new Projection({
			    code: projCode,
			    extent: [1896628.62, 1507846.05, 4656644.57, 6827128.02]
			  }); */
			let epsg3035 = getProjection('EPSG:3035');
			epsg3035.setExtent([1896628.62, 1507846.05, 4656644.57, 6827128.02]);

			let wkt = `POLYGON((${E} ${N+200}, ${E+200} ${N+200}, ${E+200} ${N}, ${E} ${N}, ${E} ${N+200}))`
			let format = new WKT();
	        let carGeom = format.readGeometry(wkt);

	        this.selGeom = new Feature({
                geometry: carGeom,
                name: 'selCar'
            });

	        this.selGeom.getGeometry().transform(epsg3035, 'EPSG:3857');


			let oldSel = this.selectedLayer.getSource().getFeatures()
			if (oldSel.length > 0) {
				this.selSource.removeFeature(oldSel[0]);
	   			this.selSource.addFeature(this.selGeom);
			} else {
				this.selSource.addFeature(this.selGeom);
			}

		}

		if (error || !infos) {
			let oldSel = this.selectedLayer.getSource().getFeatures()
			if (oldSel.length > 0) {
				this.selSource.removeFeature(oldSel[0]);
			}
		}
	 }

	render() {
		let style = {
		};

		let refLow;
		let leg;
		let img = null;
		let {setRef} = this.props;

		if (setRef){

			refLow = setRef.toLowerCase();
			leg = `https://portail.indigeo.fr/geoserver/LETG-BREST/wms?Service=WMS&REQUEST=GetLegendGraphic
				&VERSION=1.0.0&FORMAT=image/png
				&WIDTH=10&HEIGHT=10
				&LAYER=osi
				&STYLE=${refLow}
				&STYLES=${refLow}
				&legend_options=fontName:Helvetica;fontAntiAliasing:true;bgColor:0xFFFFFF;fontColor:0x707070;fontSize:6;dpi:220;
				&TRANSPARENT=true`;

			img = <div id="map-caption"><div><img src={leg} alt="Légende"></img></div></div>
		}

		return (
				<div className="map-wrapper">
					<div className="map" ref="map" style={style}>
						<div className="olTool" ref="olTool"></div>
					</div>
					{img}
				</div>
		)
	}
}

export default Carlitto
