import React, { Component } from 'react'
import ol from 'openlayers'

class Local extends Component {

	map = null;
	overlay = null;

	moveHandler(event) {
		let feature = this.map.forEachFeatureAtPixel(event.pixel, (feature) => {
			let nom = feature.get('nom')
			let code = feature.get('insee')

			this.overlay.setPosition(event.coordinate);

			this.overlay.getElement().innerHTML = code ? '<h6><strong>' + nom + '</strong> (' + code + ')</h6>' 
														: '<h4 style="color:rgba(0, 140, 186, 0.8)"><strong>' + nom + '</strong></h4>';			
			return feature;
		});

		this.overlay.getElement().style.display = feature ? '' : 'none';
		document.body.style.cursor = feature ? 'pointer' : '';
	}

	clickHandler(event) {
		let {onEpciClick} = this.props
		let {onCommClick} = this.props

		this.map.forEachFeatureAtPixel(event.pixel, (feature) => {
			let nom = feature.get('nom')
			let insee = feature.get('insee')
			let siren = feature.get('siren_epci')

			let epci = {siren: siren, nom: nom}
			let comm = {insee: insee, nom: nom}

			insee ? onCommClick(comm) : onEpciClick(epci) 
			
			this.map.getView().fit(feature.getGeometry(), {duration: 500})
			return true
	  })
	}


	componentDidMount() {

		// STYLES
		function setStyle(feature, resolution) {
		    const prop = feature.getProperties()
		    if (prop.siren_epci !== this.props.territoire.epci.siren)
		       return;

		    return styleComm
		}

		let styleBaseEpci = new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: [255, 255, 255, 0.3],
					width: 3
				}),
				fill: new ol.style.Fill({
					color: [100, 100, 100, 0.1]
				}),
			});

		let styleEpci = new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: [100, 100, 100, 0.8],
					width: 0.8
				}),
				fill: new ol.style.Fill({
					color: [100, 100, 100, 0.4]
				}),
			});

		let styleEpciHover = new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: [50, 50, 50, 0.8],
					width: 0.8
				}),
				fill: new ol.style.Fill({
					color: [80, 200, 255, 0.6]
				}),
			});

		let styleComm = new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: [50, 50, 50, 0.8],
					width: 1
				}),
				fill: new ol.style.Fill({
					color: [70, 70, 70, 0.4]
				}),
			});

		let styleCommHover = new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: [15, 15, 15, 0.8],
					width: 1
				}),
				fill: new ol.style.Fill({
					color: [80, 200, 255, 0.6]					
				}),
			});

		let styleCommSelect = new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: [15, 15, 15, 0.8],
					width: 2
				}),
				fill: new ol.style.Fill({
					color: [80, 200, 255, 1]	
				}),
			});


		// LAYERS
		let base = new ol.layer.Tile({ 
				name: 'base',
				opacity: 1,
				source: new ol.source.XYZ({ 
					url:'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
					attributions: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ </br> <h6 style="color:rgba(0, 140, 186, 0.8)"><strong>Territoires partenaires d\'OSIRISC</strong></h6>'
				}),
		});

		let baseepci = new ol.layer.Vector({
			name: 'baseepci',
			source: new ol.source.Vector({
				format: new ol.format.GeoJSON(),
				url: 'epci3857.json'
			}),
			style: styleBaseEpci,
			minResolution: 0,
			maxResolution: 20000,
			zIndex: 0
		});

		let epci = new ol.layer.Vector({
			source: new ol.source.Vector({
				format: new ol.format.GeoJSON(),
				url: 'epci3857.json'
			}),
			style: styleEpci,
			minResolution: 500,
			maxResolution: 20000,
			zIndex: 1
		});

		let comm = new ol.layer.Vector({
			source: new ol.source.Vector({
				format: new ol.format.GeoJSON(),
				url: 'comm3857.json'
			}),
			style: setStyle.bind(this),
			minResolution: 0,
			maxResolution: 500,
			zIndex: 10
		});

		// MAP
		this.map = new ol.Map({
			target: this.refs.map,
			layers: [base, baseepci, epci, comm],
			controls: ol.control.defaults({collapsible: false}).extend([
				new ol.control.ScaleLine()
			]),
			interactions: ol.interaction.defaults({mouseWheelZoom:false}),
			view: new ol.View({
				center: ol.proj.fromLonLat([-3, 48.15]),
				zoom: 7,
				maxZoom: 10,
				minZoom: 5
			})
		});



		// INTERACTIONS
		let zoomToExtentControl = new ol.control.ZoomToExtent({
		  extent: this.map.getView().calculateExtent(this.map.getSize())
		})
		this.map.addControl(zoomToExtentControl);

		let epciHover = new ol.interaction.Select({
			condition: ol.events.condition.pointerMove,
			style: styleEpciHover,
			layers: [epci],
		})
		this.map.addInteraction(epciHover);

		let commHover = new ol.interaction.Select({
			condition: ol.events.condition.pointerMove,
			style: styleCommHover,
			layers: [comm]
		})
		this.map.addInteraction(commHover);

		let commSelect = new ol.interaction.Select({
			condition: ol.events.condition.click,
			style: styleCommSelect,
			layers: [comm]
		})
		this.map.addInteraction(commSelect)

		this.overlay = new ol.Overlay({
			element: this.refs.olTool,
			offset: [10, -5],
			positioning: 'bottom-left',
		})
		this.map.addOverlay(this.overlay)

		this.map.on('pointermove', this.moveHandler, this) 

		this.map.on('click', this.clickHandler, this)

	}

	render() {
		let style = {
			height: '300px',
		};

		return (
			<div className="map col-md-8" ref="map" style={style}>
				<div className="olTool" ref="olTool"></div>
			</div>
		);
	}

}

export default Local