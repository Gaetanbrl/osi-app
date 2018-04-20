import React, { Component } from "react";
import ol from "openlayers";

export default class Carlitto extends Component {

	componentDidMount() {


		let joinData = new ol.layer.Image({
			source: new ol.source.ImageWMS({
				url: 'http://localhost:8080/geoserver/__temp/wms',
				params: {LAYERS: 'F14472180_INDICALL_530087'},
				serverType: 'geoserver',
				crossOrigin: 'anonymous',
				attributions: ''
			})
		});

		let setQuery = ({ territoire }) => {
				let insee = territoire.comm.insee
				if (!insee)
					 return '';
				return (`id_com=56116`)
		}

		let carlitto = new ol.layer.Image({
			source: new ol.source.ImageWMS({
				url: 'http://portail.indigeo.fr/geoserver/LETG-BREST/wms',
				params: {
					layers: 'carlitto',
					cql_filter: setQuery,
					// cql_filter: !comm ? '' : `id_com=${ comm.comm }`,
					styles: '',
				},
				serverType: 'geoserver',
				crossOrigin: 'anonymous',
				projection: ol.proj.get('EPSG:3035'),
				attributions: 'CARLITTO (carroyage littoral - 200m - CRS 3035)'
			})
		})

// http://portail.indigeo.fr/geoserver/LETG-BREST/wms?service=wms&version=1.0.0&
// request=getfeature&typename=carlitto&
// PROPERTYNAME=STATE_NAME&CQL_FILTER=siren_epci LIKE '242900793'
// id_com 56116

		let scaleLineControl = new ol.control.ScaleLine();

		let map = new ol.Map({
			target: this.refs.map,
			layers: [carlitto],
			controls: ol.control.defaults({collapsible: false}).extend([
				scaleLineControl
			]),
			interactions: ol.interaction.defaults({mouseWheelZoom:false}),
			view: new ol.View({
				center: ol.proj.fromLonLat([-3, 48.15]),
				zoom: 8
			})
		});

	}

	render() {
		let style = {
			height: '600px'
		};

		const { error, loading, infos } = this.props;
		console.log(loading);
		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<section className="panel-map">
					<div className="map" ref="map" style={style}>
					</div>
				</section>
				<div>
					{infos}
				</div>
			</div>
		)
	}
}