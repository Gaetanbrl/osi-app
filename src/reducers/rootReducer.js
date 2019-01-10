import doLogin from './doLogin';
import setTerritoire from './setTerritoire';
import setRef from './setRef';
import setCar from './setCar';
import refIndic from './refIndic';
import infoReducer from './infoReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  doLogin,
  setTerritoire,
  setRef,
  setCar,
  refIndic,
  infoReducer
});

export default rootReducer;
