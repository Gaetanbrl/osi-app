import React, { Component } from "react";
import ol from "openlayers";
import proj4 from "proj4";

class Carlitto extends Component {

  	base = null
  	carLayer = null
  	carMap = null

	componentDidMount() {

		// ol.proj.setProj4(proj4);
		// let projCode = 'EPSG:3035';
		// proj4.defs(projCode, '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
		
		// let epsg3035 = new ol.proj.Projection({
		//     code: projCode,
		//     extent: [1896628.62, 1507846.05, 4656644.57, 6827128.02]
		//   });

		this.base = new ol.layer.Tile({ 
			name: 'base',
			opacity: 1,
			source: new ol.source.XYZ({ 
				name: 'base',
				url:'http://s.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
			}),
		})

		let carSource = new ol.source.ImageWMS({
			url: 'http://portail.indigeo.fr/geoserver/TEST/wms',
			attributions: 'CARLITTO (carroyage littoral - 200m - CRS 3035)',
			params: {
				LAYERS: 'ositest',
				STYLES: '',
			},
			serverType: 'geoserver',
			crossOrigin: 'anonymous',
			projection: "EPSG:3035",
		})

		this.carLayer = new ol.layer.Image({
			name: 'carLayer',
			source: carSource,
			opacity: 0.7,
		})

		let scaleLineControl = new ol.control.ScaleLine();

		this.carMap = new ol.Map({
			target: this.refs.map,
			layers: [this.base, this.carLayer],
			controls: ol.control.defaults({collapsible: false}).extend([
				scaleLineControl
			]),
			interactions: ol.interaction.defaults({mouseWheelZoom:false}),
			view: new ol.View({
			    // projection: epsg3035,
				// center: ol.proj.transform([-3, 48.15], 'EPSG:4326', 'EPSG:3035'),
				center: ol.proj.fromLonLat([-3, 48.15]),
				zoom: 8
			})
		});

		this.setState({ 
			carMap: this.carMap,
			carLayer: this.carLayer
		});

	}

	componentDidUpdate(prevProps, prevState) {
   		let layer = this.state.carLayer
		let {territoire, setRef} = this.props
		let wmsStyle = null
		let cqlFilter = null

		if (prevProps.setRef !== setRef) {
			wmsStyle = setRef.toLowerCase()
			layer.getSource().updateParams({
				STYLES: wmsStyle
			})
		} else { 
			wmsStyle = null
		}

		if (prevProps.territoire !== territoire && !!territoire) {
			cqlFilter = `id_com=${territoire.insee}`
			layer.getSource().updateParams({
				CQL_FILTER: cqlFilter
			})
			this.carMap.getView().fit(territoire.geom)

		} else { 
			cqlFilter = null
		}
	 }

	render() {
		let style = {
			height: '600px'
		};

		const { error, loading, infos } = this.props;
		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading...</div>;
		}
		return (
			
			<div>

				<section className="panel-map">
					<div className="map" ref="map" style={style}></div>
				</section>
				<div>
					{infos}
				</div>
			</div>
		)
	}
}

export default Carlitto