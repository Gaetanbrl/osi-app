const initialState = {
  compo: null,
  ref: null
};


const setRef = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_COMPO':
			return {
				...state,
				compo: action.compo,
				ref: action.compo
			}
		case 'SET_REF':
			return {
				...state,
				compo: state.compo,
				ref: action.ref
			}
		default:
			return state
	}
}
export default setRef