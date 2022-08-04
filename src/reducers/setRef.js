const initialState = {
  compo: "RI",
  ref: null
};

const setRef = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_COMPO':
			console.log(action.compo);
			return {
				...state,
				compo: action.compo,
				ref: action.compo,
			}
		case 'SET_REF':
			return {
				...state,
				ref: action.ref
			}
		default:
			return state
	}
}
export default setRef
