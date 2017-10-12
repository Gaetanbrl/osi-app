import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-yeti.min.css';
// Pour changer l'apparence de l'appli, charger un template bootstrap dans le répertoire node_modules/bootstrap/dist/css/ et adapter la ligne ci-dessus
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import history from './history';
import Routes from './routes';

import epciStore from './components/epciStore';

let store = createStore(epciStore)

const root = document.getElementById('root')

ReactDOM.render(
	<Routes history={history} store={store} />, root
	);
registerServiceWorker();

