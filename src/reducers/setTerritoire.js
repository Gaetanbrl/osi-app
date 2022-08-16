import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  	epci: null,
  	comm: null,
	showEPCI: false,
	navigationType: "globale",
	navigationView: "",
	legendUrl: ""
};

const setTerritoire = createReducer(initialState, {
	'SET_EPCI': (state, action) => {
		state.comm = null;
		state.epci = action.epci;
	},
	'SET_COMM': (state, action) => {
		state.comm = action.comm;
		state.epci = action.comm.epci;
	},
	'SET_SHOW_EPCI': (state, action) => {
		state.showEPCI = action.showEPCI
	},
	'SET_NAVIGATION_TYPE': (state, action) => {
		state.navigationType = action.navigationType
	},
	'SET_NAVIGATION_VIEW': (state, action) => {
		state.navigationView = action.navigationView
	},
	'SET_LEGEND_URL': (state, action) => {
		state.legendUrl = action.legendUrl
	}
})

export default setTerritoire
