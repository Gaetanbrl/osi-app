export const doLogin = (password) => {
  return {
    type: 'DO_LOGIN',
    password,
  }
}

export const doLogout = () => {
  return {
    type: 'DO_LOGOUT',
  }
}

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

export const setShowEPCI = (showEPCI = true) => {
  return {
    type: 'SET_SHOW_EPCI',
    showEPCI
  }
}

export const setNavigationType = (navigationType = "") => {
  return {
    type: 'SET_NAVIGATION_TYPE',
    navigationType
  }
}

export const setLegendUrl = (legendUrl = "") => {
  return {
    type: 'SET_LEGEND_URL',
    legendUrl
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

export const setCar = (url) => {
  return {
    type: 'SET_CAR',
    url
  }
}

export const fetchInfo = (url) => {
  return dispatch => {
    dispatch(fetchInfoBegin());
    fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchInfoSuccess(json["features"]["0"]["properties"]));
        return json;
      })
      .catch(error => dispatch(fetchInfoError(error)));
  };
}

function handleErrors(res) {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
}


export const fetchInfoBegin = () => ({
  type: 'FETCH_INFO_BEGIN'
});

export const fetchInfoSuccess = (infos) => ({
  type: 'FETCH_INFO_SUCCESS',
  infos
});

export const fetchInfoError = (error) => ({
  type: 'FETCH_INFO_ERROR',
  error
});
