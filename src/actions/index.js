export const doLogin = (password) => {
  return {
    type: 'DO_LOGIN',
    password,
  }
}

export const displayResponsiveModal = (id) => {
  return {
    type: "DISPLAY_RESPONSIVE_MODAL",
    id
  }
}

export const doLogout = () => {
  return {
    type: 'DO_LOGOUT',
  }
}

export const setTimeCompare = (timeCompare = false) => {
  return {
    type: 'SET_TIME_COMPARE',
    timeCompare
  }
}

export const setEnableTimeCompare = (enableTimeCompare = false) => {
  return {
    type: 'SET_ENABLE_TIME_COMPARE',
    enableTimeCompare
  }
}

export const setNavigationView = (navigationView = "") => {
  return {
    type: 'SET_NAVIGATION_VIEW',
    navigationView
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

export const setCar = (url, urlCompare) => {
  return {
    type: 'SET_CAR',
    url,
    urlCompare
  }
}

export const fetchInfo = (url, urlCompare) => {
  return dispatch => {
    dispatch(fetchInfoBegin());

    Promise.all(
      [url, urlCompare].map((u, i) =>
        fetch(u)
          .then(handleErrors)
          .then(res => res.json())
          .catch(error => dispatch(fetchInfoError(error))))
    ).then(responses => {
      dispatch(fetchInfoSuccess(
        _.first(_.get(responses[0], "features")),
        _.first(_.get(responses[1], "features"))
      ))
    });
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

export const fetchInfoSuccess = (infos, infoCompare) => ({
  type: 'FETCH_INFO_SUCCESS',
  infos,
  infoCompare
});

export const fetchInfoError = (error) => ({
  type: 'FETCH_INFO_ERROR',
  error
});
