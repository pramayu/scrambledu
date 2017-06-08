import axios from 'axios';

export let GET_COMMON = 'GET_COMMON';
export let GET_COMMON_SUCCESS = 'GET_COMMON_SUCCESS';
export let GET_COMMON_FAILURE = 'GET_COMMON_FAILURE';

export function getCommons() {
  return {
    type: GET_COMMON
  }
}

export function getCommonsSuccess(commons) {
  return {
    type: GET_COMMON_SUCCESS,
    commons
  }
}

export function getCommonsFailure(err) {
  return {
    type: GET_COMMON_FAILURE,
    err
  }
}

export function setFetchCommons() {
  return dispatch => {
    dispatch(getCommons())
    return axios.get('/commons')
      .then((res) => { dispatch(getCommonsSuccess(res.data.commons))})
      .catch((err) => dispatch(getCommonsFailure(err)))
  }
}
