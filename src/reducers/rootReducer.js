import setTerritoire from './setTerritoire';
import setRef from './setRef';
import refIndic from './refIndic';
import infoReducer from './infoReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	setTerritoire,
	refIndic,
	setRef,
	infoReducer
});

export default rootReducer;