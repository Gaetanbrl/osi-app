import React, { Component } from "react";
import ol from "openlayers";


class Carlitto extends Component {

  	base = null
  	carLayer = null
  	carMap = null

	componentDidMount() {

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
				layers: 'ositest',
				styles: '',
			},
			serverType: 'geoserver',
			crossOrigin: 'anonymous',
			projection: "EPSG:3035",
		})

		this.carLayer = new ol.layer.Image({
			name: 'carLayer',
			source: carSource,
			// opacity: 0.7,
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
				styles: wmsStyle
			})
		} else { 
			wmsStyle = null
		}

		if (prevProps.territoire !== territoire && !!territoire) {
			cqlFilter = `id_com=${territoire.insee}`
			layer.getSource().updateParams({
				cql_filter: cqlFilter
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