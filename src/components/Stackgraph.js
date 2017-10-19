import React, { Component } from 'react';
import Highcharts from 'react-highcharts';


export default class Stackgraph extends Component {

	render() {

		let config = {
			chart: {
			    type: 'area'
			},

			title: {
			    text: 'Trajectoire de vulnérabilité'
			},

			subtitle: {
			    text: 'Source: Données fictives'
			},

			xAxis: {
			    categories: ['1990', '1995', '2000', '2005', '2010', '2015'],
			    tickmarkPlacement: 'on',
			    title: {
			        enabled: false
			    }
			},

			yAxis: {
			    title: {
			        text: 'Scores combinés'
			    },
			    labels: {
			        formatter: function () {
			            return this.value;
			        }
			    }
			},

			tooltip: {
			    split: true,
			    valueSuffix: ''
			},

			plotOptions: {
			    area: {
			        stacking: 'normal',
			        lineColor: '#666666',
			        lineWidth: 1,
			        marker: {
			            lineWidth: 1,
			            lineColor: '#666666'
			        }
			    }
			},

			series: [{
			    name: 'Représentation',
			    data: [1, 2, 3, 2, 4, 5],
			    color: '#5BC0DE'
		    },{
			    name: 'Gestion',
			    data: [1, 1, 1, 2, 3, 4],
			    color: '#E88F02'
			},{
			    name: 'Enjeux',
			    data: [1, 2, 3, 4, 4, 5],
			    color: '#FF0000'
			}, {
			    name: 'Aléas',
			    data: [3, 3, 4, 4, 4, 5],
			    color: '#42A968'
			}]
		}

		return(
			<div>
			  <Highcharts config={ config }></Highcharts>
			</div>	
		)
	}
}






