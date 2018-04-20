import React, { Component } from "react";
import ol from "openlayers";

export default class Local extends Component {


	componentDidMount() {
		let onMapClick = this.props.onMapClick;

		let styleDefault = new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: '#008CBA',
					width: 0
				}),
				fill: new ol.style.Fill({
					color: 'rgba(0, 140, 186, 0.8)'
				})
			});

		let styleHover = new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: 'white',
					width: 0
				}),
				fill: new ol.style.Fill({
					color: 'rgba(91, 192, 222, 0.8)'
				})
			});

		let base = new ol.layer.Tile({ 
				name: 'base',
				opacity: 1,
				source: new ol.source.XYZ({ 
					url:'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
					attributions: '<h4 style="color:rgba(0, 140, 186, 0.8)"><strong>Territoires partenaires d\'OSIRISC</strong></h4>'
				}),
		});

		let epci = new ol.layer.Vector({
			source: new ol.source.Vector({
				url: '/geom/epci3857.geojson',
				format: new ol.format.GeoJSON()
			}),
			style: styleDefault,
			minResolution: 500,
			maxResolution: 20000
		});

		let comm = new ol.layer.Vector({
			source: new ol.source.Vector({
				url: '/geom/comm3857.geojson',
				format: new ol.format.GeoJSON()
			}),
			style: styleDefault,
			minResolution: 0,
			maxResolution: 500
		});

		let map = new ol.Map({
			target: this.refs.map,
			layers: [base, epci, comm],
			controls: ol.control.defaults({collapsible: false}).extend(new ol.control.ScaleLine()),
			interactions: ol.interaction.defaults({mouseWheelZoom:true}),
			view: new ol.View({
				center: ol.proj.fromLonLat([-3, 48.15]),
				zoom: 7,
				maxZoom: 10,
				minZoom: 5
			})
		});

		let overlay = new ol.Overlay({
			element: this.refs.olTool,
			offset: [10, -5],
			positioning: 'bottom-left'
		});
		overlay.setMap(map);

		let hover = new ol.interaction.Select({
			condition: ol.events.condition.pointerMove,    
			style: styleHover
		});

		let zoomToExtentControl = new ol.control.ZoomToExtent({
		  extent: ol.proj.fromLonLat([-3, 48.15])
		});


		map.addInteraction(hover);
		map.addControl(zoomToExtentControl);

		map.on('pointermove', function(e) {
			let feature = map.forEachFeatureAtPixel(e.pixel, function(feature) {
				// Propriétés du tooltip
				let nom_epci = feature.get('nom');

				overlay.setPosition(e.coordinate);
				overlay.getElement().innerHTML = '<p>' + nom_epci + '</p>';
				return feature;
			});
			overlay.getElement().style.display = feature ? '' : 'none';
			document.body.style.cursor = feature ? 'pointer' : '';
		});

		map.on('click', function(e) {
			map.forEachFeatureAtPixel(e.pixel, function(feature) {
				onMapClick(feature.get('siren_epci'));
				map.getView().fit(feature.getGeometry(), {duration: 500}) 
					});
		});
	}

	render() {
		let style = {
			height: '450px'
		};

		return (
			<div className="map" ref="map" style={style}>
				<div className="olTool" ref="olTool"></div>
			</div>
		);
	}

}