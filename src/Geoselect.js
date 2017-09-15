import React, { Component } from "react";
import ol from "openlayers";

export default class Geoselect extends Component {

  componentDidMount() {
    
    let style = new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'rgba(0, 0, 0, 0)',
          width: 0
        }),
        fill: new ol.style.Fill({
          color: 'rgba(91, 192, 222, 0.8)'
        }),
        text: new ol.style.Text({
          font: '12px Calibri,sans-serif',
          fill: new ol.style.Fill({
            color: 'rgba(17, 69, 85, 1)'
          })
        })
      });

    let base = new ol.layer.Tile({ 
        name: 'base',
        opacity: 1,
        source: new ol.source.XYZ({ 
          url:'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
          attributions: "<h6>OSIRISC, Labex Mer / Fondation de France, 2017</h6>",
        })
    });

    let epci = new ol.layer.Vector({
      source: new ol.source.Vector({
        url: 'http://localhost:3001/json/OSI_EPCI.geojson',
        format: new ol.format.GeoJSON()
      }),
      style: style
    });



    let map = new ol.Map({
      target: 'map',
      layers: [base, epci],
      controls: ol.control.defaults().extend([
        new ol.control.ScaleLine()
      ]),
      view: new ol.View({
        center: ol.proj.fromLonLat([-2.9, 48]),
      	zoom: 6,
      	minZoom: 5,
      	maxZoom: 9
      })
    });

    let tooltip = document.getElementById('tooltip');
    let overlay = new ol.Overlay({
      element: tooltip,
      offset: [10, 0],
      positioning: 'bottom-left'
    });
    map.addOverlay(overlay);

    function displayTooltip(evt) {
      var pixel = evt.pixel;
      var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
        return feature;
      });
      tooltip.style.display = feature ? '' : 'none';
      if (feature) {
        overlay.setPosition(evt.coordinates);
        tooltip.innerHTML = feature.get('nom_epci');
      }
    };

    map.on('pointermove', displayTooltip);
  }

  render() {
    return (
      <div>
        <h3 className="text-primary"> Les territoires ciblés par l'observatoire</h3>
        <section className="panel-map">
          <div id="map" className="map" ref="olmap">
            <div id="tooltip" className="tooltip"></div>
          </div>
        </section>
        <div className="alert alert-info">
          <strong>Avertissement : </strong> Osi est actuellement au stade de prototype. 
          Si les territoires cartographiés ci-dessus ont d'ores et déjà manifesté leur intérêt pour cet outil expérimental, 
          les données ne sont pas encore produites. Les liens renvoient donc systématiquement à un même territoire fictif qui a servi au développement de cette application.
        </div>
      </div>
    );
  }

}



// http://jsfiddle.net/uarf1888/