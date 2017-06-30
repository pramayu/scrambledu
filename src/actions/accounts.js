import axios from 'axios';

export let GET_ACCOUNT = 'GET_ACCOUNT';
export let GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS';
export let GET_ACCOUNT_FAILURE = 'GET_ACCOUNT_FAILURE';

export function getAccount() {
  return {
    type: GET_ACCOUNT
  }
}

export function getAccountSuccess(account) {
  return {
    type: GET_ACCOUNT_SUCCESS,
    account
  }
}

export function getAccountFailure(err) {
  return {
    type: GET_ACCOUNT_FAILURE,
    err
  }
}

export function setFetchAccount(id) {
  console.log(id);
  return dispatch => {
    dispatch(getAccount())
    return axios.get(`/sliquo2i4o3r23oufrg38/5872c4ec0e00167ab362/${id}/8714c9ac5782c5eb63b5`)
      .then((res) => { dispatch(getAccountSuccess(res.data.user))})
      .catch((err) => dispatch(getAccountFailure(err)))
  }
}
