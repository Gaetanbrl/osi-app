import { createReducer } from '@reduxjs/toolkit'

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


const doLogin = createReducer(initialState, {
	DO_LOGIN: (state, action) => {
		console.log("doLogin");
		state.isLogged = checkLoginData(action.password).isLogged;
		state.errorMessage = checkLoginData(action.password)?.errorMessage || '';
	},
	DO_LOGOUT: (state, action) => {
		state.isLogged = false;
	}
});

export default doLogin
