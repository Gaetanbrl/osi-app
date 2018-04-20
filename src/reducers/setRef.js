const setRef = (state = null, action) => {
	switch(action.type) {
		case 'SET_REF':
			return action.ref
		default:
			return state
	}
}
export default setRef