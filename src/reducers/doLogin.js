import SHA512 from 'crypto-js/sha512';

import { loginData } from '../data/LoginData';

const initialState = {
	isLogged: false,
	errorMessage: '',
};

const checkLoginData = (password) =>
	SHA512(password).toString() === loginData.password
		? { isLogged: true }
		: {
				isLogged: false,
				errorMessage: 'Mot de passe incorrect'
			};

export const doLogin = (state = initialState, action) => {
	switch(action.type) {
		case 'DO_LOGIN':
			return {
				...state,
				...checkLoginData(action.password),
			}
		case 'DO_LOGOUT':
			return {
				...state,
				isLogged: false,
			}
		default:
			return state
	}
}

export default doLogin
