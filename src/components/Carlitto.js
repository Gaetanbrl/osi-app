import React, { Component, createRef } from "react";
import { View, Map, Overlay } from "ol";
import { fromLonLat } from "ol/proj";
import { ScaleLine, defaults as defaultControl } from "ol/control";
import { defaults as defaultInteraction } from "ol/interaction";

import { keyBy, get, isEmpty, first, last } from 'lodash';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import {
	getLayersFromConfig,
	addFeatureFromInfos,
	getCapabilitiesDimension,
	getLayerByName,
	getAllRealVisibleLayers,
	getOverlayText
} from "../containers/utils/carto";

import BaseMapsSelector from "../components/BaseMapsSelector";

import meta_com from '../data/meta_com.json';

import InfosBox from "./InfosBox";

import { getBaseLayers } from "../containers/utils/basemaps";

import config from "../config";

const BASE_LAYERS = getBaseLayers(config.baselayers);
const TIME_BASE_LAYERS = getBaseLayers(config.baselayers);
const NAVIGATION_LAYERS = getLayersFromConfig(
	config?.navigation.filter(l => l.navigation && l.navigation.length)
);
const TIME_NAVIGATION_LAYERS = getLayersFromConfig(
	config?.navigation.filter(l => l.navigation && l.navigation.length)
);

const zoomSizes = config.zoomSizes;

const sliderStyle = {
	handleStyle: { borderColor: '#000' },
	railStyle: { backgroundColor: '#686f77' },
	dotStyle: { borderColor: '#686f77' },
};

const defaultViewProps = {
	center: fromLonLat([-3, 48.15])
};

const defaultView = new View({
	...defaultViewProps,
	projection: 'EPSG:3857',
	resolution: zoomSizes.default,
	constrainResolution: true
});

class Carlitto extends Component {

	constructor(props) {
		super(props)
		this.olMap = createRef()
		this.olTimeMap = createRef()
	}

	showLayer = null

	carMap = null

	timeMap = null

	overlay = null
	overlayFeatureNom = null

	clickedFeature = null
	
	clickedLayer = null

	clickedLayerUrl = ""

	state = {
		showBaseMapSelector: false,
		showLayer: "",
		selectedYear: "",
		selectedYearCompare: "",
		timeActivated: false,
		blCompare: [],
		fullTimeList: []
	};


	moveHandler(event) {
		let displayOverlay = false;
		let overlayText = null;
		this.carMap.forEachFeatureAtPixel(event.pixel, (feature) => {
			displayOverlay = true;
			const nom = feature.get('nom');
			const code = feature.get('insee');
			if ((!nom && !code) || this.overlayFeatureNom === nom) {
				return feature;
			}
			const sitePilote = feature.get('site_pilote');
			const insee = feature.get('insee');
			overlayText = getOverlayText(nom, code, get(this.commNbIndic, `${insee}.nb_indic`), sitePilote);
			this.overlayFeatureNom = nom;
			return feature;
		}, {
			layerFilter: (l) => {
				return l.get("name") !== "selectedLayer" && l.get("visible") && !l.get("isBaseLayer");
			}
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
		document.body.style.cursor = displayOverlay ? 'pointer' : '';
	}

	getSelectedLayer(targetMap) {
		// will only return visible layer as layerFilter option
		const visibleLayers = getAllRealVisibleLayers(targetMap);	
		const isResolutionVisible = visibleLayers.map(l => l.getProperties().name);
		const clickableLayersName = visibleLayers.filter(l => l.getProperties().clickable);
		// will return only one layer because we can only display one layer by navigation mode
		return clickableLayersName.filter(x => isResolutionVisible.includes(x.getProperties().name))[0];
	}

	getUrlFromLayer = (targetMap, event) => {
		const viewResolution = targetMap.getView().getResolution();
		let clickedLayer = this.getSelectedLayer(targetMap);
		if (!clickedLayer) return;
		// will calcul GetFeatureInfo URL usefull to get info by map pixel clicked
		const clickedParams = clickedLayer.getSource().getParams();
		let clickedLayerUrl = clickedLayer.getSource().getFeatureInfoUrl(
			event.coordinate, viewResolution, 'EPSG:3857',
			{
				INFO_FORMAT: 'application/json',
				QUERY_LAYERS: clickedParams.layers || clickedParams.LAYERS
			}
		);
		return {
			clickedLayer: clickedLayer,
			clickedLayerUrl: clickedLayerUrl
		}
	}

	updateClick(event) {
		// get layer URL for first map
		let infosClickedLayer = this.getUrlFromLayer(this.carMap, event);

		if (infosClickedLayer?.clickedLayer) {
			// get layer URL for second compare map
			let layerUrlCompare = this.getUrlFromLayer(this.timeMap, event).clickedLayerUrl;
			this.clickedLayerUrl = infosClickedLayer.clickedLayerUrl;
			this.clickedLayer = infosClickedLayer.clickedLayer;
			this.clickedFeature = {
				coordinate: event.coordinate,
				pixel: event.pixel
			};
			// update store to refresh FeatureBox, MetaBox panels with correct info
			if (this.state.yearsListAvailable && this.state.yearsListAvailable.length > 1) {
				this.props.onCarClick(this.clickedLayerUrl, layerUrlCompare);
			} else {
				// if only one year, just load one chart data
				this.props.onCarClick(this.clickedLayerUrl, "");
			}
		}
	}

	clickHandler(event) {
		let selLayer = getLayerByName(this.carMap, "selectedLayer");
		selLayer.getSource().clear();
		this.setState({ showBaseMapSelector: false });
		if (!isEmpty(event)) {
			this.updateClick(event);
		}

	}

	onSelectYear(year, key) {
		this.setState({
			[key]: year || this.state[key],
		});
	}

	closeInfoPanel(props) {
		this.clickedFeature = null;
		props.onCarClick("");
		this.clickHandler();
	}

	componentDidMount() {
		window.onresize =
			function() {
				this.carMap && this.carMap.updateSize();
				this.timeMap && this.timeMap.updateSize();
			}
		;
		this.commNbIndic = keyBy(meta_com, c => c.id_com);

		this.state.view = new View({
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
			view: defaultView
		});
		this.timeMap = new Map({
			target: this.olTimeMap.current,
			layers: [
				...TIME_BASE_LAYERS,
				...TIME_NAVIGATION_LAYERS
			],
			controls: defaultControl({
				collapsible: false,
				zoom: false
			}).extend([
				new ScaleLine(),
			]),
			interactions: defaultInteraction({
				mouseWheelZoom: true,
				doubleClickZoom: false,
				dragAndDrop: false,
				dragPan: false,
				keyBoardPan: false,
				keyBoardZoom: false,
				mouseWheelZoom: false
			}),
			view: defaultView
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
			timeMap: this.timeMap
		});
	}

	componentDidUpdate(prevProps, prevState) {
		let { setRef, infos, onSetNavigationView, onEnableTimeCompare } = this.props;
		// display selected layer by setRef value
		const visibleLayers = getAllRealVisibleLayers(this.carMap);
		let clickableLayer = visibleLayers.filter(x => x.get("clickable"))[0];
		if (clickableLayer && config.getCapabilitiesUrl) {
			if (this.showLayer !== clickableLayer) {
				this.closeInfoPanel(this.props);
				this.setState({
					yearsListAvailable: []
				});
				onEnableTimeCompare(false);
				const layerGsName = clickableLayer.getSource().getParams().layers;
				// Get list of years data available
				getCapabilitiesDimension(
					`${config.getCapabilitiesUrl}/${layerGsName}/wms?REQUEST=GetCapabilities`,
					{
						field: "Title",
						value:  clickableLayer.get("name")
					}
				).then((r) => {
					onEnableTimeCompare(r.yearsListAvailable.length > 1);
					this.setState({
						...r,
						selectedYear: last(r.yearsListAvailable),
						selectedYearCompare: last(r.yearsListAvailable)
					});
				})
				this.showLayer = clickableLayer;
			}
		}

		this.carMap.getLayers().getArray().forEach(layer => {
			const propsLayer = layer.getProperties();
			if (propsLayer.isBaseLayer) return;
			const isVisible = (!propsLayer.compo || propsLayer?.compo.toUpperCase() == setRef);
			layer.setVisible(isVisible);
			if (layer.getSource().updateParams && this.state.selectedYear) {
				const fullTimeValue = this.state.fullTimeList.filter(x => x.includes(this.state.selectedYear))[0];
				if (fullTimeValue) {
					layer.getSource().updateParams({
						time: fullTimeValue
					})	
				}
			}
		});

		if (this.timeMap) {
			this.timeMap.getLayers().getArray().forEach(layer => {
				const propsLayer = layer.getProperties();
				if (propsLayer.isBaseLayer) return;
				const isVisible = (!propsLayer.compo || propsLayer?.compo.toUpperCase() == setRef);
				layer.setVisible(isVisible);
				if (layer.getSource().updateParams && this.state.selectedYearCompare) {
					const fullTimeValue = this.state.fullTimeList.filter(x => x.includes(this.state.selectedYearCompare))[0];
					if (fullTimeValue) {
						layer.getSource().updateParams({
							time: fullTimeValue
						})	
					}
				}
			});	
		}

		let selLayer = getLayerByName(this.carMap, "selectedLayer");
		let selSource = selLayer.getSource();
		selSource.clear();

		this.carMap.setView(new View({
			...defaultViewProps,
			...this.carMap.getView().getProperties(),
			// min scrollable value (0 - n)
			minResolution: zoomSizes.minResView
		}));

		if (this.timeMap) {
			this.timeMap.setView(new View({
				...defaultViewProps,
				...this.carMap.getView().getProperties(),
				// min scrollable value (0 - n)
				minResolution: zoomSizes.minResView
			}));	
		}

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
		if (this.timeMap) {
			this.timeMap && this.timeMap.updateSize();
		}

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
		let { changeModal, responsiveModal, setRef, onSetLegendUrl, infos, infosCompare, url, urlCompare, timeActivated } = this.props;



		let leg = "";

		let legendLayer = null;
		if (this.carMap) {
			legendLayer = this.carMap.getLayers().getArray().
				filter(layer => layer.getProperties().compo ? layer.getProperties().compo.toUpperCase() === setRef : false)
			const layerSource = legendLayer[0]?.getSource();

			// get legend URL
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

		let showCompareMap = false;
		if (
			!isEmpty(this.state.yearsListAvailable)
			&& this.state.yearsListAvailable.length > 1
			&& this.carMap
			&& timeActivated
		) {
			showCompareMap = true;
		}

		this.timeMap && this.timeMap.updateSize();

		return (
			<div className="map-wrapper">
				<div className="mapDiv">
					<div className="map" ref={this.olMap} id="map" style={{
						position: "relative",
						width: showCompareMap && timeActivated ? "50%" : "100%"
					}}>
						<div className="olTool" ref="olTool"></div>
						{setRef && !isEmpty(this.state.yearsListAvailable) ? (
						<div className="select-year-slider-container">
								<div className="select-year-slider">
								{
									<Slider
										min={first(this.state.yearsListAvailable)}
										max={last(this.state.yearsListAvailable)}
										defaultValue={this.state.selectedYear}
										marks={keyBy(this.state.yearsListAvailable)}
										step={null}
										included={false}
										onChange={y => this.onSelectYear(y, "selectedYear")}
										{...sliderStyle}
									/>
								}

							</div>
						</div>
						
					) : null}
					</div>
					<div
						className={`map ${showCompareMap ? "" : "d-none"}`}
						ref={this.olTimeMap}
						id="map-time"
						style={{ width: "50%" }}
					>
						<div className="select-year-slider-container">
								<div className="select-year-slider">
								{
									<Slider
										min={first(this.state.yearsListAvailable)}
										max={last(this.state.yearsListAvailable)}
										value={this.state.selectedYearCompare}
										marks={keyBy(this.state.yearsListAvailable)}
										step={null}
										included={false}
										onChange={y => this.onSelectYear(y, "selectedYearCompare")}
										{...sliderStyle}
									/>
								}
							</div>
						</div>
					</div>

				</div>
				<InfosBox
					onLoad={this.props.onLoad}
					onClose={() => this.closeInfoPanel(this.props)}
					url={url}
					urlCompare={urlCompare}
					isVisible={!isEmpty(infos)}
					tpl={config.templates?.infos}
					infos={infos}
					infosCompare={infosCompare}
				/>
				<BaseMapsSelector
					responsiveModal={responsiveModal}
					changeModal={changeModal}
					map={this.carMap}
					timeMap={this.timeMap}
					layers={BASE_LAYERS}
					layersCompare={TIME_BASE_LAYERS}
					updateShow={(v) => {
						this.setState({showBaseMapSelector: v})
					}}
					show={this.state.showBaseMapSelector}
				/>
			</div>
		)
	}
}

export default Carlitto
