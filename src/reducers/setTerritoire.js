const initialState = {
  	epci: null,
  	comm: null,
	showEPCI: false,
  	navigationType: "globale"
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
					epci: action.comm.epci,
					comm: action.comm,
				}
		case 'SET_SHOW_EPCI':
			return {
				  ...state,
					showEPCI: action.showEPCI,
			}
		case 'SET_NAVIGATION_TYPE':
			return {
					...state,
					navigationType: action.navigationType,
				}
		default:
			return state;
	}
}
export default setTerritoire
