import React, { Component } from "react";
import ol from "openlayers";


export default class Geoselect extends Component {


  componentDidMount() {

    new ol.Map({
      layers: [new ol.layer.Tile({ 
        name: 'layerCarto',
        opacity: 1,
        source: new ol.source.XYZ({ 
          url:'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
          attributions: "OSIRISC, Labex Mer/Fondation de France, 2017"
        })
    })],
      target: 'map',
      view: new ol.View({
      	center: ol.proj.fromLonLat([-2.9, 48]),
      	zoom: 6,
      	minZoom: 5,
      	maxZoom: 9
      })
    });

  }

  render() {
    return (
      <section className="panel-map">
        <div id="map" className="map" ref="olmap"></div>
      </section>
    );
  }

}

