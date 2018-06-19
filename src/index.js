import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(
	rootReducer, 
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(
		<Provider store={store}>
			<NextApp />
		</Provider>
		, document.getElementById('root'));
  });
}

registerServiceWorker();