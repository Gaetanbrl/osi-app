import React, { Component, createRef } from "react";
import proj4 from "proj4";
import { register } from "ol/proj/proj4";
import { View, Map, Overlay, Feature } from "ol";
import { Vector, Image } from "ol/layer";
import { Style , Stroke, Fill } from "ol/style";
import { fromLonLat, get as getProjection } from "ol/proj";
import { Vector as VectorSource, ImageWMS } from "ol/source";
import { GeoJSON, WKT } from "ol/format";
import { pointerMove } from "ol/events/condition";
import { ScaleLine, defaults as defaultControl } from "ol/control";
import { Select, defaults as defaultInteraction } from "ol/interaction";

import { keyBy, get, isEmpty } from 'lodash';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const {XMLParser, XMLValidator} = require('fast-xml-parser');

import { getLayersFroMConfig, clearSource, addFeatureFromInfos, getCapabilitiesDimension, getLayerByName } from "../containers/utils/carto";

import BaseMapsSelector from "../components/BaseMapsSelector";

import meta_com from '../data/meta_com.json';

import { getBaseLayers } from "../containers/utils/basemaps";

import config from "../config";

import {
	styleEpciCommHover,
	styleSelectedComm
} from "../osiStyles";

const BASE_LAYERS = getBaseLayers(config.baselayers);
const GLOBALE_LAYERS = getLayersFroMConfig(config?.navigation.filter(l => l.navigation && l.navigation.includes("globale")));

const ORIGINAL_LAYERS = getLayersFroMConfig(config?.navigation.filter(l => l.navigation && l.navigation.includes("epci")));

const zoomSizes = {
	min: 7.48,
	minComm: 59,
	maxComm: 200,
	max: 480,
	default: 400,
};

const sliderStyle = {
	handleStyle: { borderColor: '#000' },
	railStyle: { backgroundColor: '#686f77' },
	dotStyle: { borderColor: '#686f77' },
};

const defaultViewProps = {
	center: fromLonLat([-3, 48.15]),
	minResolution: zoomSizes.minComm,
	maxResolution: zoomSizes.max - 1,
};

class Carlitto extends Component {

	constructor(props) {
		super(props)
		this.olMap = createRef()
	}

	carMap = null

	commGeom = null

	base = null
	baseTopology = null
	commLayer = null
	baseEpci = null
	epci = null
	comm = null

	selGeom = null

	overlay = null
	overlayFeatureNom = null

  	clickedFeature = null

	state = {
		showBaseMapSelector : false
	};

	getOverlayText(nom, code, nbIndic, sitePilote) {
		let overlayText = '<h6><strong>' + nom + '</strong>'
		if (code) {
			overlayText += ' (' + code + ')';
		}
		if (nbIndic) {
			overlayText += '<br /><i>' + nbIndic +' indicateurs</i>';
		}
		if (sitePilote === true || sitePilote === 'true') {
			overlayText += '<br /><i>Territoire pilote des projets OSIRISC et OSIRISC+</i>';
		}
		overlayText += '</h6>'

		return overlayText;
	}

	moveHandler(event) {
		let displayOverlay = false;
		let overlayText = null;
		const feature = this.carMap.forEachFeatureAtPixel(event.pixel, (feature, layer) => {
			if (this.carMap.getView().getResolution() < zoomSizes.minComm) {
				return feature;
			}

			displayOverlay = true;
			const nom = feature.get('nom');
			const code = feature.get('insee');
			if ((!nom && !code) || this.overlayFeatureNom === nom) {
				return feature;
			}
			const sitePilote = feature.get('site_pilote');
			const insee = feature.get('insee');
			overlayText = this.getOverlayText(nom, code, get(this.commNbIndic, `${insee}.nb_indic`), sitePilote);
			this.overlayFeatureNom = nom;
			return feature;
		});

		if (displayOverlay) {
			this.overlay.getElement().style.display = '';
			this.overlay.setPosition(event.coordinate);
			if (overlayText) {
				this.overlay.getElement().innerHTML = overlayText;
			}
		} else {
			this.overlay.getElement().style.display = 'none';
		}
		document.body.style.cursor = feature ? 'pointer' : '';
	}

	clickHandler(event) {
		const { onEpciClick, onCommClick, onCarClick, territoire } = this.props;
		this.setState({showBaseMapSelector: false});
		const viewResolution = this.carMap.getView().getResolution();
		if (viewResolution < zoomSizes.minComm) {
			let carSource = getLayerByName(this.carMap, "carLayer").getSource();
			const url = carSource.getFeatureInfoUrl(
				event.coordinate, viewResolution, 'EPSG:3857',
				{
					'INFO_FORMAT': 'application/json',
				},
			);
			if (url) {
				this.clickedFeature = {
					coordinate: event.coordinate,
					viewResolution,
				};
				onCarClick(url);
			}
		}

		this.carMap.forEachFeatureAtPixel(event.pixel, (feature, layer) => {
			let nom = feature.get('nom')
			let insee = feature.get('insee')
			let siren = feature.get('siren_epci')
			let nomEpci = feature.get('nom_comple')
			let geom = feature.getGeometry()

			if ((viewResolution < zoomSizes.maxComm && !insee) || (territoire && territoire.insee === insee)) {
				return;
			}
			let epci = {siren: siren, nom: nom}
			let comm = {insee: insee, nom: nom, geom: geom, epci: { siren: siren, nom: nomEpci } }
			insee ? onCommClick(comm) : onEpciClick(epci)

			this.carMap.getView().fit(feature.getGeometry(), {constrainResolution: false, padding: [40, 40, 40, 40] })
	  }, { hitTolerance: 1});
	  document.body.style.cursor = 'pointer';
	}

	onSelectYear(year) {
		this.setState({
			selectedYear: year,
		});
	}

	componentDidMount() {
		window.onresize =
			function() {
				this.carMap && this.carMap.updateSize();
			}
		;
		this.commNbIndic = keyBy(meta_com, c => c.id_com);

		// Get list of years data available
		getCapabilitiesDimension('https://portail.indigeo.fr/geoserver/LETG-BREST/osi_all_date/wms?REQUEST=GetCapabilities')
			.then((r) => {
				console.log(r);
				if (!isEmpty(r)) {
					this.setState(r);
				}
			})

		let view = new View({
			...defaultViewProps,
			projection: 'EPSG:3857',
			resolution: zoomSizes.default
		});

		this.carMap = new Map({
			target: this.olMap.current,
			layers: [
				...BASE_LAYERS,
				...GLOBALE_LAYERS,
				...ORIGINAL_LAYERS
			],
			controls: defaultControl({collapsible: false}).extend([
				new ScaleLine(),
			]),
			interactions: defaultInteraction({mouseWheelZoom:true}),
			view: view
		});

		this.comm = this.carMap.getLayers().getArray().filter(e => e.get("name") === "communes")[0]

		this.carMap.on('precompose', function(evt) {
			if(evt.context){
				evt.context.globalCompositeOperation = 'multiply';
			}
		});

		const selectedLayer = getLayerByName(this.carMap, "selectedLayer");

		selectedLayer.on('precompose', function(evt) {
			if(evt.context){
				evt.context.globalCompositeOperation = 'normal';
			}
		});
		selectedLayer.on('precompose', function(evt) {
			if(evt.context){
				evt.context.globalCompositeOperation = 'source-over';
			}
		});

		// Add hover style interaction
		let epciHover = new Select({
			condition: pointerMove,
			style: styleEpciCommHover,
			layers: [this.carMap.getLayers().getArray().filter(e => e.get("name") === "epci")[0]],
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
			carLayer: getLayerByName(this.carMap, "carLayer")
		});
	}

	componentDidUpdate(prevProps, prevState) {
		let { territoire, epci, showEPCI, setRef, infos, error, onCarClick, navigationType } = this.props

		this.carMap.getLayers().getArray().forEach(layer => {
			const propsLayer = layer.getProperties();
			if (propsLayer.isBaseLayer || !propsLayer.navigation) return;
			const isVisible = (!propsLayer.compo || propsLayer?.compo === setRef) && propsLayer.navigation.includes(navigationType);
			layer.setVisible(isVisible);
		})
		
		// save new SRS
		let projCode = 'EPSG:3035';
		proj4.defs(projCode, '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
		register(proj4);
		let epsg3035 = getProjection('EPSG:3035');
		epsg3035.setExtent([1896628.62, 1507846.05, 4656644.57, 6827128.02]);

		let carLayer = getLayerByName(this.carMap, "carLayer");
		let carSource = getLayerByName(this.carMap, "carLayer").getSource();
		let commSource = getLayerByName(this.carMap, "commLayer").getSource();
		let selSource = getLayerByName(this.carMap, "selectedLayer").getSource();

		let cqlFilter = null
		clearSource(commSource);
		clearSource(selSource);

		if (prevProps.setRef !== setRef) {
			carLayer.getSource().updateParams({
				STYLES: setRef.toLowerCase()
			})
		}

		const isOtherEPCI = prevProps?.showEPCI !== showEPCI;
		const isOtherYear = prevState?.selectedYear !== this.state.selectedYear;
		const isOtherTerritoire = prevProps?.territoire !== territoire;

		const needChange = !!territoire && (isOtherEPCI || isOtherYear || isOtherTerritoire);

		const viewProps = {
			...defaultViewProps,
			...this.carMap.getView().getProperties(),
			minResolution: zoomSizes.min
		};

		if (needChange && ["commune", "epci"].includes(navigationType)) {
			console.log("LOAD ALL OSI LAYERS");
			cqlFilter = showEPCI ? `id_epci=${epci.siren}` : `id_com=${territoire.insee}`;
			console.log(cqlFilter);
			carLayer.getSource().updateParams({
				CQL_FILTER: cqlFilter,
				TIME: `${this.state.selectedYear}-01-01T00:00:00.000Z`,
			})
			this.commGeom = new Feature({
				geometry: territoire.geom,
				name: 'commName'
			})
			commSource.addFeature(this.commGeom);

			if (this.clickedFeature && prevState && prevState.selectedYear !== this.state.selectedYear) {
				const url = carSource.getFeatureInfoUrl(
					this.clickedFeature.coordinate, this.clickedFeature.viewResolution, 'EPSG:3857',
					{
						'INFO_FORMAT': 'application/json',
					},
				);
				if (url) {
					onCarClick(url);
				}
			}

		}

		this.carMap.setView(new View(viewProps));

		if (isOtherEPCI && navigationType === "commune" && territoire) {
			this.carMap.getView().fit(territoire.geom, {duration: 500})
		}

		if (infos) {
			// create polygon too zoom to extent click infos
			addFeatureFromInfos(infos, selSource);
		}

		if (error || !infos) {
			clearSource(selSource);
		}

		this.carMap && this.carMap.updateSize();
	 }

	render() {
		/**
		 * TODO: DON't DISPLAY THIS MAP CAPTION WITH GLOBAL VIEW
		 * OR DISPLAY VISIBLE LAYERS LEGEND
		 */
		let { setRef, navigationType } = this.props;

		const leg = setRef && `https://portail.indigeo.fr/geoserver/LETG-BREST/wms?Service=WMS&REQUEST=GetLegendGraphic
			&VERSION=1.0.0&FORMAT=image/png
			&WIDTH=10&HEIGHT=10
			&LAYER=osi_all_date
			&STYLE=${setRef.toLowerCase()}
			&STYLES=${setRef.toLowerCase()}
			&legend_options=fontName:Helvetica;fontAntiAliasing:true;bgColor:0xFFFFFF;fontColor:0x707070;fontSize:6;dpi:220;
			&TRANSPARENT=true`;

		return (
			<div className="map-wrapper">
				<div className="map" ref={this.olMap} id="map">
					<div className="olTool" ref="olTool"></div>
				</div>
				{setRef && navigationType !== "globale" && (
					<div id="map-caption"><div><img src={leg} alt="Légende"></img></div></div>
				)}
				<BaseMapsSelector
					map={this.carMap}
					layers={BASE_LAYERS}
					updateShow={(v) => {
						this.setState({showBaseMapSelector: v})
					}}
					show={this.state.showBaseMapSelector}
				/>
				{setRef && this.state.yearsListAvailable && this.state.yearsListAvailable.length > 0 && (
					<div className="select-year-slider-container">
						<div className="select-year-slider">
							<Slider
								min={parseInt(this.state.yearsListAvailable[0], 10)}
								max={parseInt(this.state.yearsListAvailable[this.state.yearsListAvailable.length - 1], 10)}
								defaultValue={this.state.selectedYear}
								marks={keyBy(this.state.yearsListAvailable, v => v)}
								included={false}
								onChange={y => this.onSelectYear(y)}
								{...sliderStyle}
							/>
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default Carlitto
