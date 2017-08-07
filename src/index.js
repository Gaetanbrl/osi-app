import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-yeti.min.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import history from './history';
import Routes from './routes';

const root = document.getElementById('root')

ReactDOM.render(
	<Routes history={history} />, root
	);
registerServiceWorker();

