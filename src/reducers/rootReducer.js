import doLogin from './doLogin';
import setTerritoire from './setTerritoire';
import setRef from './setRef';
import setCar from './setCar';
import refIndic from './refIndic';
import infoReducer from './infoReducer';
import mainAppReducer from './mainAppReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  mainAppReducer,
  doLogin,
  setTerritoire,
  setRef,
  setCar,
  refIndic,
  infoReducer
});

export default rootReducer;
