import React, { Component } from "react";
import ol from "openlayers";

export default class Local extends Component {

  componentDidMount() {
    let styleDefault = new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: '#008CBA',
          width: 0
        }),
        fill: new ol.style.Fill({
          color: '#008CBA'
        })
      });

    let styleHover = new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'white',
          width: 0
        }),
        fill: new ol.style.Fill({
          color: 'rgba(91, 192, 222, 1)'
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
      style: styleDefault
    });

    let map = new ol.Map({
      target: this.refs.map,
      layers: [base, epci],
      controls: ol.control.defaults().extend([
        new ol.control.ScaleLine()
      ]),
      view: new ol.View({
        center: ol.proj.fromLonLat([-1, 49]),
        zoom: 6,
        minZoom: 5,
        maxZoom: 9
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

    map.addInteraction(hover);

    map.on('pointermove', function(e) {
      let feature = map.forEachFeatureAtPixel(e.pixel, function(feature) {
        // Propriétés du tooltip
        let nom_epci = feature.get('nom_epci');
        let ptot_epci = feature.get('ptot_epci');
        let surf = feature.get('surf_km2');

        overlay.setPosition(e.coordinate);
        overlay.getElement().innerHTML = '<h3>' + nom_epci + '</h3>' +
          '<strong>Population : </strong>' + ptot_epci + '</br>' +
          '<strong>Superficie : </strong>' + surf + ' km2' ;
        return feature;
      });
      overlay.getElement().style.display = feature ? '' : 'none';
      document.body.style.cursor = feature ? 'pointer' : '';
    });



    map.on('click', function(e) {
      let feature = map.forEachFeatureAtPixel(e.pixel, function(feature) {
        let id_epci = feature.get('siren_epci');
        let nom_epci = feature.get('nom_epci');
        console.log(id_epci + " : " + nom_epci)
          })
    });

  }

  render() {
    let style = {
      height: '350px'
    };

    return (
      <div>
        <section className="panel-map">
          <div className="map" ref="map" style={style}>
            <div className="olTool" ref="olTool"></div>
          </div>
        </section>

        <div className="alert alert-info">
          <strong>Avertissement : </strong> Osi est actuellement au stade de prototype. 
          Les territoires cartographiés ci-dessus sont les partenaires potentiels de l'observatoire. 
          Les données n'étant pas encore produites, les liens renvoient donc systématiquement à un même territoire fictif qui a servi au développement de cette application.
        </div>
      </div>
    );
  }

}