import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import "bootstrap/dist/css/bootstrap.min.css"

import rootReducer from './reducers/rootReducer';
import App from './App';

import {unregister} from './registerServiceWorker';
import './index.css';
import './stylesheets/app.scss';

import { configureStore } from '@reduxjs/toolkit'

// const store = createStore(
//   rootReducer
//   , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   , applyMiddleware(thunk)
// );

const store2 = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(thunk),
  devTools: process.env.NODE_ENV !== 'production'
})

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
	<Provider store={store2}>
		<App />
	</Provider>
);


if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    root.render(
		<Provider store={store2}>
			<NextApp />
		</Provider>)
  });
}

unregister();
