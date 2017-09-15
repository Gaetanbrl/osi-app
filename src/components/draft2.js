cd Dropbox/


export default class Cartograph extends Component {

  componentDidMount() {
    let chart = this.refs.chart.getChart();
    chart.series[0].addPoint({x: 10, y: 12});
    console.log(CCPLON);
  }

  render() {

    let scores = this.props.scores
    let score = scores[0]

    return(
      <div>
        <h2> Carte </h2>      


        <ReactHighcharts config={ config } ref="chart"></ReactHighcharts>;

      </div>
    )
    
  }
}















function (data) {

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
            enabled: true
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
   








   var React = require('react');
// Note that HighMaps has to be in the codebase already
var ReactHighmaps = require('react-highcharts/ReactHighmaps.src');
var Highlight = require('react-highlight');
var ReactDOM = require('react-dom');
var maps = require('./mapdata/europe');

var config = {
  chart: {
    spacingBottom: 20
  },
  title: {
    text: 'Europe time zones'
  },

  legend: {
    enabled: true
  },

  plotOptions: {
    map: {
      allAreas: false,
      joinBy: ['iso-a2', 'code'],
      dataLabels: {
        enabled: true,
        color: 'white',
        style: {
          fontWeight: 'bold'
        }
      },
      mapData: maps,
      tooltip: {
        headerFormat: '',
        pointFormat: '{point.name}: <b>{series.name}</b>'
      }

    }
  },

  series: [{
    name: 'UTC',
    data: ['IE', 'IS', 'GB', 'PT'].map(function (code) {
      return { code: code };
    })
  }, {
    name: 'UTC + 1',
    data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU', 'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map(function (code) {
      return { code: code };
    })
  }]
};

ReactDOM.render(React.createElement(ReactHighmaps, { config: config }), document.getElementById('test'));

ReactDOM.render(React.createElement(
  Highlight,
  { className: 'jsx' },
  require("raw-loader!./highmaps.jsx")
), document.getElementById('code-js'));

ReactDOM.render(React.createElement(
  Highlight,
  { className: 'html' },
  require("raw-loader!./highmaps.html")
), document.getElementById('code-html'));

require("file?name=[name].[ext]!./highmaps.html");





// Prepare random data
var data = [
    ['DE.SH', 728],
    ['DE.BE', 710],
    ['DE.MV', 963],
    ['DE.HB', 541],
    ['DE.HH', 622],
    ['DE.RP', 866],
    ['DE.SL', 398],
    ['DE.BY', 785],
    ['DE.SN', 223],
    ['DE.ST', 605],
    ['DE.NW', 237],
    ['DE.BW', 157],
    ['DE.HE', 134],
    ['DE.NI', 136],
    ['DE.TH', 704],
    ['DE.', 361]
];

$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=germany.geo.json&callback=?', function (geojson) {

    // Initiate the chart
    Highcharts.mapChart('container', {

        title: {
            text: 'GeoJSON in Highmaps'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            tickPixelInterval: 100
        },

        series: [{
            data: data,
            mapData: geojson,
            joinBy: ['code_hasc', 0],
            keys: ['code_hasc', 'value'],
            name: 'Random data',
            states: {
                hover: {
                    color: '#a4edba'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.properties.postal}'
            }
        }]
    });
});