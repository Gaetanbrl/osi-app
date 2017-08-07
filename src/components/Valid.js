import React, { Component } from 'react';

export default class Valid extends Component {

	render() {

		return (
			<div className="input-group">
				<span className="input-group-addon">Visualiser la vulnérabilité</span>
				<input className="form-control input-lg" type="text" placeholder=" ... Sélectionner une source de données dans la liste ce-dessus ..."/>
				<span className="input-group-btn">
					<button className="btn btn-lg btn-primary glyphicon glyphicon-eye-open"></button>
				</span>
			</div>
	)
	}
}


