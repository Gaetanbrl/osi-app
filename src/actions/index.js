export const setEpci = (epci) => {
  return {
    type: 'SET_EPCI',
    epci
  }
}
export const setComm = (comm) => {
	return {
		type: 'SET_COMM',
		comm
	}
}

export const setRef = (ref) => {
  return {
    type: 'SET_REF',
    ref
  }
}

export const setCompo = (compo) => {
	return {
		type: 'SET_COMPO',
		compo
	}
}


export const fetchInfo = () => {
  return dispatch => {
    dispatch(fetchInfoBegin());
    return fetch("https://www.reddit.com/r/reactjs.json")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchInfoSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchInfoError(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


export const fetchInfoBegin = () => ({
  type: 'FETCH_INFO_BEGIN'
});

export const fetchInfoSuccess = infos => ({
  type: 'FETCH_INFO_SUCCESS',
  payload: { infos }
});

export const fetchInfoError = error => ({
  type: 'FETCH_INFO_ERROR',
  payload: { error }
});