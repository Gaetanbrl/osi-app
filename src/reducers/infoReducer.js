import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  infos: null,
  infosCompare: null,
  loading: false,
  error: null
};

const infoReducer = createReducer(initialState, {
	FETCH_INFO_BEGIN: (state, action) => {
    state.loading = action.true;
    state.error = null;
  },
  FETCH_INFO_SUCCESS: (state, action) => {
    state.loading = action.false;
    state.error = null;
    state.infos = action.infos
    state.infosCompare = action.infoCompare
  },
  FETCH_INFO_ERROR: (state, action) => {
    state.loading = false,
    state.error = action.error,
    state.infos = null
    state.infosCompare = null

  }
});

export default infoReducer
