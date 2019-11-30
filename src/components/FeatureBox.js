import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Highcharts from 'react-highcharts';

export default class FeatureBox extends Component{

componentDidMount() {
	if (this.props.url) {
		let { onLoad, url } = this.props;
		onLoad(url);
	}
}


componentDidUpdate(prevProps) {
	if (this.props.url && this.props.url !== prevProps.url) {
		let { onLoad, url } = this.props;
		onLoad(url);
	}
}

render(){

	const col = {
		"A":"#c9302c",
		"E":"#ec971f",
		"G":"#449d44",
		"R":"#31b0d5",
		"I":"#dedede"
	}

	let { error, loading, refIndic, setRef, infos } = this.props;
	if (loading) {
		return <div className="loader"></div>
	}

    if (error) {
    	return null
    	// <div>Error! {error.message}</div>;
    }

    if (!infos || !setRef) {
    	return null
    } else {
		let composition = refIndic[setRef].composition || [refIndic[setRef].id];

		if (!composition || composition.length === 0) {
			return null
		} else {

		let indic = [];
		Object.keys(infos).map(key => {
			if (composition.includes(key.toUpperCase())) {
				return indic.push(key);
			}
			return null;
		});

		let data = [];
		indic.map(k => {
			return data.push(
				{
					name: String(refIndic[k.toUpperCase()].nom),
					color: col[k.charAt(0).toUpperCase()],
					y: infos[k]
				}
			)
		});

		let kv = data.concat().sort();
		let config = {
			chart: {
		        type: 'bar'
		    },
		    title: "",
		    xAxis: {
		        type: 'category',
		        labels: {
		            rotation: 0,
		            style: {
		                fontSize: '10px',
		                fontFamily: 'arial'
		            }
		        }
		    },
		    yAxis: {
		    		title: "",
		        min: 0,
		        max: 5,
		        tickInterval: 1,
		    },
		    legend: {
		        enabled: false
		    },
		    tooltip: {
		        pointFormat: 'Score : <b>{point.y}</b>'
		    },
		    series: [{
		        name: 'Indicateurs',
		    	colorByPoint: false,
		        data: kv,
		        dataLabels: {
		            enabled: true,
		            rotation: 0,
		            color: '#000',
		            align: 'right',
		            format: '{point.y}', // one decimal
		            y: 0, // 10 pixels down from the top
		            x: 18,
		            style: {
	                fontSize: '11px',
	                fontFamily: 'arial',
	                textOutline: 0,
	                fontWeight: 'normal'
		            }
		        }
		    }]
		}

		return(
			<div className="charts-container">
				<ListGroupItem tag="div">
					<Highcharts config={ config }></Highcharts>
				</ListGroupItem>
			</div>

		)
		}

    }
}
}
