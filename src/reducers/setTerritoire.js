const initialState = {
  epci: null,
  comm: null,
  showAllComm: false,
};

const setTerritoire = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_EPCI':
			return {
			        ...state,
					epci: action.epci,
					comm: null,
				}
		case 'SET_COMM':
			return {
				    ...state,
					epci: state.epci,
					comm: action.comm,
				}
		case 'SET_SHOW_ALL_COMM':
			return {
				    ...state,
					showAllComm: action.showAllComm,
				}
		default:
			return state;
	}
}
export default setTerritoire
