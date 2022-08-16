import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	url: null
};

const setCar = createReducer(initialState, {
	SET_CAR: (state, action) => {
		state.url = action.url
	}
});
export default setCar