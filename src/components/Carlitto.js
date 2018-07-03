import React, { Component } from "react";
import ol from "openlayers";
import proj4 from "proj4";
import meta_com from '../data/meta_com.json';

class Carlitto extends Component {

  	carMap = null

  	base = null
  	carLayer = null
  	baseTopo = null

  	commSource = null
	commGeom = null
  	commLayer = null

  	selSource = null
  	selGeom = null
  	selLayer = null

  	url = null

	componentDidMount() {

		this.base = new ol.layer.Tile({ 
			name: 'base',
			opacity: 1,
			source: new ol.source.XYZ({ 
				name: 'base',
				url:'http://s.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
				attributions: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
			}),
		})

		this.baseTopo = new ol.layer.Tile({
			name: 'baseTopo',
			opacity: 1,
			source: new ol.source.XYZ({
				name: 'baseTopo',
				url:'http://s.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png'
			})
		})

		let carSource = new ol.source.ImageWMS({
			url: 'http://portail.indigeo.fr/geoserver/TEST/wms',
			params: {
				LAYERS: 'osialltest',
				STYLE: 'default'
			},
			serverType: 'geoserver',
			crossOrigin: 'anonymous'
		})
		this.carLayer = new ol.layer.Image({
			name: 'carLayer',
			source: carSource,
			opacity: .8,
			minResolution: 0,
			maxResolution: 500
		})

		this.commSource = new ol.source.Vector({
		}) 

		this.commLayer = new ol.layer.Vector({
		source: this.commSource,
		style: new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: [50, 50, 50, 0.8],
					width: 2.5
				}),
				fill: new ol.style.Fill({
					color: [255, 255, 255, .5]
				}),
			})
		})

		this.selSource = new ol.source.Vector({
		})

		this.selLayer = new ol.layer.Vector({
			source: this.selSource,
			style: new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: [255, 255, 255, 1],
					width: 2.5
				})
			})
		})


		let scaleLineControl = new ol.control.ScaleLine();
		let view = new ol.View({
			center: ol.proj.fromLonLat([-3, 48.15]),
			zoom: 8,
			maxZoom: 16,
			minZoom: 6
			})

		this.carMap = new ol.Map({
			target: this.refs.map,
			layers: [
				this.base, 
				this.carLayer,
				this.commLayer,
				this.selLayer,
				this.baseTopo
			],
			controls: ol.control.defaults({collapsible: false}).extend([
				scaleLineControl
			]),
			interactions: ol.interaction.defaults({mouseWheelZoom:false}),
			view: view
		});

		this.carMap.on('precompose', function(evt) {
		  evt.context.globalCompositeOperation = 'multiply';
		});

		this.selLayer.on('precompose', function(evt) {
			evt.context.globalCompositeOperation = 'normal';
		});
		this.selLayer.on('precompose', function(evt) {
			evt.context.globalCompositeOperation = 'source-over';
		});

		let {onCarClick} = this.props
		this.carMap.on('singleclick', function(evt) {
			let viewResolution = /** @type {number} */ (view.getResolution());
			this.url = carSource.getGetFeatureInfoUrl(
				evt.coordinate, viewResolution, 'EPSG:3857',
				{
					'INFO_FORMAT': 'application/json',
					// 'propertyName': 'id_car'
				});

			if (this.url) onCarClick(this.url);
		});

		this.setState({ 
			carMap: this.carMap,
			carLayer: this.carLayer
		});

	}

	componentDidUpdate(prevProps, prevState) {
		let {territoire, setRef, infos, error} = this.props
   		let carLayer = this.state.carLayer
		
		let wmsStyle = null
		let cqlFilter = null

		// let ableRef = ["A1","A2","A3","A","E1","E2","E3","E","G1","G2","G3","G","I1","I211","I212","I213","I221","I231","I2","I","R1","R2","R3","R"];
		let ableRef = ["A1","A2","A3","A","E1","E2","E3","G1","G2","G3","I1","I211","I212","I213","I221","I231","I2","R1","R2","R3","R"];
		let allRef;

		if (prevProps.setRef !== setRef) {

			meta_com.map(c => (c.id_com === String(territoire.insee) ? allRef = c.stats : null));
			allRef.map(r => (ableRef.push(r.id_meta)));
			ableRef.includes(setRef) ? wmsStyle = setRef.toLowerCase() : wmsStyle = "";

			carLayer.getSource().updateParams({
				STYLES: wmsStyle
			})

		} else { 
			wmsStyle = null
		}

		if (prevProps.territoire !== territoire && !!territoire) {
			
			cqlFilter = `id_com=${territoire.insee}`
			carLayer.getSource().updateParams({
				CQL_FILTER: cqlFilter
			})

			this.carMap.getView().fit(territoire.geom, {duration: 500})

			this.commGeom = new ol.Feature({
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
			cqlFilter = null
		}

		if (infos) {
			let car = infos["id_car"];
			let E = Number(car.slice(5,12));
			let N = Number(car.slice(13,20));

			ol.proj.setProj4(proj4);
			let projCode = 'EPSG:3035';
			proj4.defs(projCode, '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');

			let epsg3035 = new ol.proj.Projection({
			    code: projCode,
			    extent: [1896628.62, 1507846.05, 4656644.57, 6827128.02]
			  });

			let wkt = `POLYGON((${E} ${N+200}, ${E+200} ${N+200}, ${E+200} ${N}, ${E} ${N}, ${E} ${N+200}))`
			let format = new ol.format.WKT();
	        let carGeom = format.readGeometry(wkt);

	        this.selGeom = new ol.Feature({
                geometry: carGeom,
                name: 'selCar'
            });

	        this.selGeom.getGeometry().transform(epsg3035, 'EPSG:3857');


			let oldSel = this.selLayer.getSource().getFeatures()
			if (oldSel.length > 0) { 
				this.selSource.removeFeature(oldSel[0]);
	   			this.selSource.addFeature(this.selGeom);
			} else {
				this.selSource.addFeature(this.selGeom);	
			} 

		}

		if (error || !infos) {
			let oldSel = this.selLayer.getSource().getFeatures()
			if (oldSel.length > 0) { 
				this.selSource.removeFeature(oldSel[0]);
			}
		}
	 }

	render() {
		let style = {
			height: '450px'
		};

		let refLow;
		let leg;
		let img = null;
		let {setRef} = this.props;

		if (setRef){

			refLow = setRef.toLowerCase();
			leg = `http://portail.indigeo.fr/geoserver/TEST/wms?Service=WMS&REQUEST=GetLegendGraphic
				&VERSION=1.0.0&FORMAT=image/png
				&WIDTH=12&HEIGHT=12
				&LAYER=osialltest
				&STYLE=${refLow}
				&legend_options=fontName:Helvetica;fontAntiAliasing:true;bgColor:0xFFFFFF;fontColor:0x707070;fontSize:7;dpi:220;
				&TRANSPARENT=true`;

			img = <div id="legende"><img src={leg} alt="Légende"></img></div>
		} 

		return (
				<section className="panel-map">
					<div className="map" ref="map" style={style}></div>
					{img}
				</section>
		)
	}
}

export default Carlitto