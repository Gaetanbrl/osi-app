import React, { Component, createRef } from "react";
import proj4 from "proj4";
import { register } from "ol/proj/proj4";
import { View, Map, Overlay, Feature } from "ol";
import { fromLonLat, get as getProjection } from "ol/proj";
import { ScaleLine, defaults as defaultControl } from "ol/control";
import { defaults as defaultInteraction } from "ol/interaction";

import { keyBy, get, isEmpty } from 'lodash';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import {
	getLayersFromConfig,
	addFeatureFromInfos,
	getCapabilitiesDimension,
	getLayerByName,
	getAllRealVisibleLayers
} from "../containers/utils/carto";

import BaseMapsSelector from "../components/BaseMapsSelector";

import meta_com from '../data/meta_com.json';

import InfosBox from "./InfosBox";

import { getBaseLayers } from "../containers/utils/basemaps";

import config from "../config";

const BASE_LAYERS = getBaseLayers(config.baselayers);
const NAVIGATION_LAYERS = getLayersFromConfig(
	config?.navigation.filter(l => l.navigation && l.navigation.length)
);

const zoomSizes = config.zoomSizes;

const sliderStyle = {
	handleStyle: { borderColor: '#000' },
	railStyle: { backgroundColor: '#686f77' },
	dotStyle: { borderColor: '#686f77' },
};

const defaultViewProps = {
	center: fromLonLat([-3, 48.15]),
	// minResolution: zoomSizes.minComm,
	// maxResolution: zoomSizes.max - 1,
};

class Carlitto extends Component {

	constructor(props) {
		super(props)
		this.olMap = createRef()
	}

	carMap = null

	commGeom = null

	selGeom = null

	overlay = null
	overlayFeatureNom = null

	clickedFeature = null
	
	clickedLayer = null

	clickedLayerUrl = ""

	state = {
		showBaseMapSelector: false
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
	}

	updateClick(event) {
		const viewResolution = this.carMap.getView().getResolution();
		let clickedLayer = null;
		// will only return visible layer as layerFilter option
		const visibleLayers = getAllRealVisibleLayers(this.carMap);	
		const isResolutionVisible = visibleLayers.map(l => l.getProperties().name);
		const isClickable = visibleLayers.filter(l => l.getProperties().clickable);
		// will return only one layer because we can only display one layer by navigation mode
		clickedLayer = isClickable.filter(x => isResolutionVisible.includes(x.getProperties().name))[0];
		if (!clickedLayer) return;
		// will calcul GetFeatureInfo URL usefull to get info by map pixel clicked
		const clickedParams = clickedLayer.getSource().getParams();
		this.clickedLayerUrl = clickedLayer.getSource().getFeatureInfoUrl(
			event.coordinate, viewResolution, 'EPSG:3857',
			{
				'INFO_FORMAT': 'application/json',
				'QUERY_LAYERS': clickedParams.layers || clickedParams.LAYERS
			},
		);
		if (this.clickedLayerUrl) {
			this.clickedFeature = {
				coordinate: event.coordinate,
				pixel: event.pixel,
				viewResolution,
			};
			// update store to refresh FeatureBox, MetaBox panels with correct info
			this.props.onCarClick(this.clickedLayerUrl);
		}
	}

	clickHandler(event) {
		const { navigationType } = this.props;
		this.setState({showBaseMapSelector: false});
		const viewResolution = this.carMap.getView().getResolution();
		if ( navigationType === "globale" || viewResolution < zoomSizes.minComm) {
			this.updateClick(event)
		}
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
				if (!isEmpty(r)) {
					this.setState(r);
				}
			})

		let view = new View({
			...defaultViewProps,
			projection: 'EPSG:3857',
			resolution: zoomSizes.default,
			constrainResolution: true
		});

		this.carMap = new Map({
			target: this.olMap.current,
			layers: [
				...BASE_LAYERS,
				...NAVIGATION_LAYERS
			],
			controls: defaultControl({collapsible: false}).extend([
				new ScaleLine(),
			]),
			interactions: defaultInteraction({mouseWheelZoom:true}),
			view: view
		});

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
		});
	}

	componentDidUpdate(prevProps, prevState) {
		let { setRef, infos, navigationType, onSetNavigationView } = this.props;

		const isOtherYear = prevState?.selectedYear !== this.state.selectedYear;

		this.carMap.getLayers().getArray().forEach(layer => {
			const propsLayer = layer.getProperties();
			if (propsLayer.isBaseLayer || !propsLayer.navigation) return;
			const isVisible = (!propsLayer.compo || propsLayer?.compo.toUpperCase() == setRef) && (propsLayer.navigation.includes(navigationType) || !propsLayer.navigation);
			layer.setVisible(isVisible);
		});

		let selLayer = getLayerByName(this.carMap, "selectedLayer");
		let selSource = selLayer.getSource();
		selSource.clear();

		this.carMap.setView(new View({
			...defaultViewProps,
			...this.carMap.getView().getProperties(),
			// min scrollable value (0 - n)
			minResolution: zoomSizes.minResView
		}));

		if (this.clickedFeature) {
			// simulate new click from same previous coordinates clicked
			// will display chart for any navigation mode at same coordinate
			this.updateClick(this.clickedFeature);
		}
		if (infos) {
			// create polygon too zoom to extent click infos
			// TODO : remplace infos by clicked GFI feature
			selLayer.setVisible(true);
			addFeatureFromInfos(infos, selSource, this.carMap);
		}

		this.carMap && this.carMap.updateSize();

		this.carMap.on("moveend", (v) => {
			let view = v.map.getView();
			console.log("resolution >>> " + view.getResolution().toString());
			console.log("zoom >>> " + view.getZoom().toString());
			onSetNavigationView(`x=${view.getCenter()[0]}&y=${view.getCenter()[1]}&z=${view.getZoom()}`);
		})
	 }

	render() {
		/**
		 * TODO: DON't DISPLAY THIS MAP CAPTION WITH GLOBAL VIEW
		 * OR DISPLAY VISIBLE LAYERS LEGEND
		 */
		let { setRef, navigationType, onSetLegendUrl, infos, onCarClick, url } = this.props;

		let leg = "";
		
		if (setRef && ["epci", "commune"].includes(navigationType)) {
			leg = `https://portail.indigeo.fr/geoserver/LETG-BREST/wms?Service=WMS&REQUEST=GetLegendGraphic
				&VERSION=1.0.0&FORMAT=image/png
				&WIDTH=10&HEIGHT=10
				&LAYER=osi_all_date
				&STYLE=${setRef.toLowerCase()}
				&STYLES=${setRef.toLowerCase()}
				&legend_options=fontName:Helvetica;fontAntiAliasing:true;bgColor:0xFFFFFF;fontColor:0x707070;fontSize:6;dpi:220;
				&TRANSPARENT=true`;
		}
		
		if (this.carMap && navigationType === "globale") {
			const legendLayer = this.carMap.getLayers().getArray().
				filter(layer => layer.getProperties().compo === setRef)
			const layerSource = legendLayer[0]?.getSource();
			/**
			 * TODO : selectionner l'URL de la couche selon le niveau de vue (actuellement seul GS gère la visibilité, donc par défaut OL considère que les couches sont visibles)
			 */
			const legendUrl = layerSource?.getLegendUrl();
			leg = legendUrl && layerSource?.getParams().layers ? `
				${legendUrl}
				&LAYER=${layerSource?.getParams().layers}
				&WIDTH=8
				&HEIGHT=10
				&legend_options=fontName:Helvetica;fontAntiAliasing:true;bgColor:0xFFFFFF;fontColor:0x707070;fontSize:6;dpi:220;
				&TRANSPARENT=true
				&FORMAT=image/png
			` : "";
		}

		onSetLegendUrl(leg);

		const closeInfoPanel = () => {
			this.clickedFeature = null;
			onCarClick("");
		}

		return (
			<div className="map-wrapper">
				<div className="map" ref={this.olMap} id="map">
					<div className="olTool" ref="olTool"></div>
				</div>
				<InfosBox
					onLoad={this.props.onLoad}
					onClose={closeInfoPanel}
					url={url}
					isVisible={!isEmpty(infos)}
					tpl={config.templates?.infos}
					infos={infos} />
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
