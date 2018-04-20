const setTerritoire = (state = {epci: null, comm: null}, action) => {
	switch(action.type) {
		case 'SET_EPCI':
			return {
					epci: action.epci,
					comm: null
				}
		case 'SET_COMM':
			return {
					epci: state.epci,
					comm: action.comm
				}
		default:
			return state;
	}
}
export default setTerritoire