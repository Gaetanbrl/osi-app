import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  compo: "RI",
  ref: "RI"
};

const setRef = createReducer(initialState, {
	'SET_COMPO': (state, action) => {
		state.compo = action.compo;
			state.ref = action.compo;
	},
	'SET_REF': (state, action) => {
		ref = action.ref
	}
})
	
export default setRef
