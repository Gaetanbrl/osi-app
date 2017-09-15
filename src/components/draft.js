import React, { Component } from 'react';
import car200 from '../database/json/CCPLON_CAR200.geojson'; /* Rendre dynamique selon le choix d'epci */

import Highcharts from 'react-highcharts';
import ReactHighmaps from 'react-highcharts/ReactHighmaps';

import carmap from './Carmap_CCPLON';

export default class Cartograph extends Component {

  /* Fonction de mise en forme des identifiants pour correspondre aux options Highmaps */
  codage(input, store) {
    input.map((obj) => store.push({ code: obj.id_car200 }))
  }

  render() {
    /* Tri des observations en fonction du score : */
    let discretisation = [1, 2, 3, 4, 5].map((score) => 
      this.props.scores[0].filter((obj) => 
        (obj.score_indicateur === score)));

    /* Tri des identifiants en fonction de la classe : */
    let classe1 = [];
    let classe2 = [];
    let classe3 = [];
    let classe4 = [];
    let classe5 = [];

    [classe1, classe2, classe3, classe4, classe5].map((classe, idx) =>
      this.codage(discretisation[idx], classe));

    let codeScore = [];
    this.props.scores[0].map((obj, idx) => (
      codeScore.push([obj.id_car200, obj.score_indicateur])
      ));

    let config = {
      chart: {
        spacingBottom: 20
      },
      title: {
        text: 'Carte de vulnérabilité'
      },

      legend: {
              title: {
                  text: 'Score',
                  style: {
                      color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                  }
              },
              layout: 'vertical',
              align: 'right',
              floating: true,
              valueDecimals: 0,
              valueSuffix: '%',
              backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.85)',
              symbolRadius: 0,
              symbolHeight: 14
          },

          mapNavigation: {
              enabled: false
          },

          colorAxis: {
              dataClasses: [{
                  name: "5",
                  color: "#bd0026"
              }, {
                  name: "4",
                  color: "#f03b20"
              }, {
                  name: "3",
                  color: "#fd8d3c"
              }, {
                name: "2",
                color: "#fecc5c"
              }, {
                  name: "1",
                  color: "#ffffb2"
              }]
          },

          plotOptions: {
              mapline: {
                  showInLegend: false,
                  enableMouseTracking: false
              }
          },

          series: [{
              mapData: carmap,
              data: [{
          name: '1',
          data: classe1
          
        }, {
          name: '2',
          data: classe2
          
        }, {
          name: '3',
          data: classe3
          
        }, {
          name: '4',
          data: classe4
          
        }, {
          name: '5',
          data: classe5
        }],
              joinBy: ['id_car200', 'code'],
              keys: ['id_car200', 'code'],
          }]
    }

      return(
        <div>
          <ReactHighmaps config={ config }></ReactHighmaps>
        </div>
      )
  }
}














$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=us-counties-unemployment.json&callback=?', function (data) {

    /**
     * Data parsed from http://www.bls.gov/lau/#tables
     *
     * 1. Go to http://www.bls.gov/lau/laucntycur14.txt (or similar, updated datasets)
     * 2. In the Chrome Developer tools console, run this code:
     * copy(JSON.stringify(document.body.innerHTML.split('\n').filter(function (s) { return s.indexOf('<PUT DATE HERE IN FORMAT e.g. Feb-14>') !== -1; }).map(function (row) { row = row.split('|'); return { code: 'us-' + row[3].trim().slice(-2).toLowerCase() + '-' + row[2].trim(), name: row[3].trim(), value: parseFloat(row[8]) }; })))
     * 3. The data is now on your clipboard, paste it below
     */

    var countiesMap = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all']),
        lines = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all'], 'mapline'),
        options;

    // Add state acronym for tooltip
    Highcharts.each(countiesMap, function (mapPoint) {
        mapPoint.name = mapPoint.name + ', ' + mapPoint.properties['hc-key'].substr(3, 2);
    });

    options = {
        chart: {
            borderWidth: 1,
            marginRight: 50 // for the legend
        },

        title: {
            text: 'US Counties unemployment rates, April 2015'
        },

        legend: {
            title: {
                text: 'Unemployment<br>rate',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            },
            layout: 'vertical',
            align: 'right',
            floating: true,
            valueDecimals: 0,
            valueSuffix: '%',
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.85)',
            symbolRadius: 0,
            symbolHeight: 14
        },

        mapNavigation: {
            enabled: false
        },

        colorAxis: {
            dataClasses: [{
                from: 0,
                to: 2,
                color: "#F1EEF6"
            }, {
                from: 2,
                to: 4,
                color: "#D4B9DA"
            }, {
                from: 4,
                to: 6,
                color: "#C994C7"
            }, {
                from: 6,
                to: 8,
                color: "#DF65B0"
            }, {
                from: 8,
                to: 10,
                color: "#DD1C77"
            }, {
                from: 10,
                color: "#980043"
            }]
        },

        plotOptions: {
            mapline: {
                showInLegend: false,
                enableMouseTracking: false
            }
        },

        series: [{
            mapData: countiesMap,
            data: data,
            joinBy: ['hc-key', 'code'],
            name: 'Unemployment rate',
            tooltip: {
                valueSuffix: '%'
            },
            borderWidth: 0.5,
            states: {
                hover: {
                    color: '#a4edba'
                }
            }
        }, {
            type: 'mapline',
            name: 'State borders',
            data: [lines[0]],
            color: 'white'
        }, {
            type: 'mapline',
            name: 'Separator',
            data: [lines[1]],
            color: 'gray'
        }]
    };

    // Instanciate the map
    $('#container').highcharts('Map', options);
});
