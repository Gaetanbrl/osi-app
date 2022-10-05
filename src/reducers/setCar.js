import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	url: null,
	urlCompare: null
};

const setCar = createReducer(initialState, {
	SET_CAR: (state, action) => {
		state.url = action.url,
		state.urlCompare = action.urlCompare
	}
});
export default setCar