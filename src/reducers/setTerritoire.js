const initialState = {
  epci: null,
  comm: null
};

const setTerritoire = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_EPCI':
			return {
			        ...state,
					epci: action.epci,
					comm: null
				}
		case 'SET_COMM':
			return {
				    ...state,
					epci: state.epci,
					comm: action.comm
				}
		default:
			return state;
	}
}
export default setTerritoire