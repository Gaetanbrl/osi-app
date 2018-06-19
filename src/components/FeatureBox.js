import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Highcharts from 'react-highcharts';

export default class FeatureBox extends Component{

err = null;
json = null;

componentDidMount() {
	let { onLoad, url, error, infos } = this.props;
	if (url) onLoad(url);
	if (error) this.err = error.message;
	if (infos) {
		this.json = infos;
		this.err = null;
	};
}

componentDidUpdate(prevProps) {
	let { onLoad, url, error, infos } = this.props;
	if (url && url !== prevProps.url) onLoad(url);
	if (error && error !== prevProps.error) this.err = error.message;
	if (infos && infos !== prevProps.infos) {
		this.json = infos;
		this.err = null;
	} 
}

render(){

	if (!this.props.loading) {
		return(
			<ListGroup>
			<ListGroupItem tag="div">
				<small>Module expérimental d'interrogation spatiale. Cliquez sur la carte.</small>
			</ListGroupItem>				
			</ListGroup>
		)
	} else if (this.props.loading) {
		return(
			<ListGroup>
			<ListGroupItem tag="div">
				<span ><div className="loader"></div></span>
			</ListGroupItem>				
			</ListGroup>
		)
	} else if (this.err) {
		return(
			<ListGroup>
			<ListGroupItem tag="div">
				{this.err}
			</ListGroupItem>				
			</ListGroup>)
	} else if (this.json && this.json.length === 0) {
		return(
			<ListGroup>
			<ListGroupItem tag="div">
				Pas de donnée sur ce carreau. Choisissez une autre zone.
			</ListGroupItem>				
			</ListGroup>

		)
	} else if (this.json) {
		let {refIndic, setCompo} = this.props;
		
		const getKeys = ( obj ) => (
		    Object.keys(obj).map(i => (obj[i]))
		)
		const mapKeys = ( obj ) => (
			getKeys(obj).map(i => ({...i}))
		)
		
		let ref = [];	
		mapKeys(refIndic).filter((i3) => (i3.composante === setCompo)).map(i3 => (
			ref.push(i3.id)))

		let indic = [];
		Object.keys(this.json).map(key => {
			if (ref.includes(key.toUpperCase())) indic.push(key)
		});
		
		let data = [];
		indic.map(k => {
			data.push([String(refIndic[k.toUpperCase()].nom), this.json[k]])
		});

		let kv = data.concat().sort()

		let config = {
			chart: {
		        type: 'column'
		    },
		    title: {
		        text: `Synthèse par maille`
		    },
		    subtitle: {
		        text: ''
		    },
		    xAxis: {
		        type: 'category',
		        labels: {
		            rotation: -45,
		            style: {
		                fontSize: '13px',
		                fontFamily: 'Verdana, sans-serif'
		            }
		        }
		    },
		    yAxis: {
		        min: 0,
		        max: 5,
		        title: {
		            text: 'Score'
		        }
		    },
		    legend: {
		        enabled: false
		    },
		    tooltip: {
		        pointFormat: 'Score : <b>{point.y}</b>'
		    },
		    series: [{
		        name: 'Indicateurs',
		    	colorByPoint: true,
		        data: kv,
		        dataLabels: {
		            enabled: true,
		            rotation: -90,
		            color: '#FFFFFF',
		            align: 'right',
		            format: '{point.y}', // one decimal
		            y: 5, // 10 pixels down from the top
		            style: {
		                fontSize: '13px',
		                fontFamily: 'Verdana, sans-serif'
		            }
		        }
		    }]
		}

		return(
			<ListGroup>
			<ListGroupItem tag="div">				
				<Highcharts config={ config }></Highcharts>
			</ListGroupItem>				
			</ListGroup>

		)
	} else {
		return(null)
	}
}
}
