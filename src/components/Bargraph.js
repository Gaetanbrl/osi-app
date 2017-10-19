import React, { Component } from 'react';
import Highcharts from 'react-highcharts';


export default class Bargraph extends Component {

	render() {

		let config = {
		    chart: {
		        type: 'column'
		    },
		    title: {
		        text: 'Profils de vulnérabilité'
		    },
		    xAxis: {
		        categories: ['St-Catherine', 'Plonévez', 'Keralain', 'Lantourloup', 'Trézalouest', 'Plouvieux', 'Locatom']
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: 'Scores combinés'
		        },
		        stackLabels: {
		            enabled: true,
		            style: {
		                fontWeight: 'bold',
		                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
		            }
		        }
		    },
		    legend: {
		        align: 'right',
		        x: -30,
		        verticalAlign: 'top',
		        y: 25,
		        floating: true,
		        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
		        borderColor: '#CCC',
		        borderWidth: 1,
		        shadow: false
		    },
		    tooltip: {
		        headerFormat: '<b>{point.x}</b><br/>',
		        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
		    },
		    plotOptions: {
		        column: {
		            stacking: 'normal',
		            dataLabels: {
		                enabled: true,
		                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
		            }
		        }
		    },
			series: [{
			    name: 'Représentation',
			    data: [2, 5, 1, 2, 5, 3, 3],
			    color: '#42A968'
		    },{
			    name: 'Gestion',
			    data: [1, 5, 1, 3, 5, 2, 3],
			    color: '#E88F02'
			},{
			    name: 'Enjeux',
			    data: [4, 5, 5, 4, 2, 3, 5],
			    color: '#FF0000'
			}, {
			    name: 'Aléas',
			    data: [1, 5, 4, 3, 2, 3, 5],
			    color: '#5BC0DE'
			}]
		}

		return(
			<div>
			  <Highcharts config={ config }></Highcharts>
			</div>	
		)
	}
}






