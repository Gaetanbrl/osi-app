import SHA512 from 'crypto-js/sha512';

import { loginData } from '../data/LoginData';

const initialState = {
	displayForm: false,
	isLogged: false,
};

const checkLoginData = (user, password) =>
	(SHA512(user).toString() === loginData.user
	&& SHA512(password).toString() === loginData.password)
		? { isLogged: true, displayForm: false }
		: { isLogged: false, displayForm: true };

export const doLogin = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_DISPLAY_LOGIN_FORM':
			return {
				...state,
				displayForm: action.value !== undefined ? action.value : !state.displayForm,
			}
		case 'DO_LOGIN':
			return {
				...state,
				...checkLoginData(action.user, action.password),
			}
		default:
			return state
	}
}

export default doLogin
