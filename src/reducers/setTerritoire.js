import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  	epci: null,
  	comm: null,
	showEPCI: false,
	navigationType: "globale",
	navigationView: "",
	legendUrl: "",
	timeCompare: false,
	enableTimeCompare: false
};

const setTerritoire = createReducer(initialState, {
	'SET_ENABLE_TIME_COMPARE': (state, action) => {
		state.enableTimeCompare = action.enableTimeCompare;
	},
	'SET_TIME_COMPARE': (state, action) => {
		state.timeCompare = action.timeCompare;
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
