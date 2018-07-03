const initialState = {
  infos: null,
  loading: false,
  error: null
};

export default function infoReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_INFO_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      };

    case 'FETCH_INFO_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        infos: action.infos
      };

    case 'FETCH_INFO_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
        infos: null
      };

    default:
      return state;
  }
}
