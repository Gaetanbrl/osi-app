const initialState = {
	url: null
};

const setRef = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_CAR':
			return {
				...state,
				url: action.url
			}
		default:
			return state
	}
}
export default setRef