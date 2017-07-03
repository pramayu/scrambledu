import axios from 'axios';

export let GET_ACCOUNT = 'GET_ACCOUNT';
export let GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS';
export let GET_ACCOUNT_FAILURE = 'GET_ACCOUNT_FAILURE';
export let GET_USER_PREPERENCES = 'GET_USER_PREPERENCES';
export let SET_PROVINCE = 'SET_PROVINCE';
export let SET_REGENCY = 'SET_REGENCY';
export let SET_DISTRICT = 'SET_DISTRICT';

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

export function setUserPreperences(preferences) {
  return {
    type: GET_USER_PREPERENCES,
    preferences
  }
}

export function setProvince(provinces) {
  return {
    type: SET_PROVINCE,
    provinces
  }
}

export function setRegency(regencies) {
  return {
    type: SET_REGENCY,
    regencies
  }
}

export function setDistrict(districts) {
  return {
    type: SET_DISTRICT,
    districts
  }
}

export function setFetchAccount(id) {
  return dispatch => {
    dispatch(getAccount())
    return axios.get(`/sliquo2i4o3r23oufrg38/5872c4ec0e00167ab362/${id}/8714c9ac5782c5eb63b5`)
      .then((res) => { dispatch(getAccountSuccess(res.data.user))})
      .catch((err) => dispatch(getAccountFailure(err)))
  }
}

export function editUserAccount(data, id) {
  return dispatch => {
    return axios({
      method: 'put',
      url: `/sliquo2i4o3r23oufrg38/d3ri93fdh923fdh3928ehd/${id}`,
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export function editUserPrefrences(data, id) {
  return dispatch => {
    return axios({
      method: 'put',
      url: `/sliquo2i4o3r23oufrg38/38h29fdh23f938ery39y/${id}/fjweijnvksdjfoehf`,
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export function getUserPreferences(id) {
  return dispatch => {
    return axios.get(`/sliquo2i4o3r23oufrg38/dlqh4o23rh0389rh2/${id}/kfj30r93f30d308ihd`)
      .then((res) => dispatch(setUserPreperences(res.data.preferences)))
  }
}

export function getProvince() {
  return dispatch => {
    return axios.get('/sliquo2i4o3r23oufrg38/f3r9fh938hf98dhw8d/s092d0jdwqijwdih/doi3e938djowd')
      .then((res) => { dispatch(setProvince(res.data.province)) })
  }
}

export function getRegency(id) {
  return dispatch => {
    return axios.get(`/sliquo2i4o3r23oufrg38/dj938hd938hd938fded/d398y93fhiuwefh398y/${id}/d83hq0ifdw`)
      .then((res) => { dispatch(setRegency(res.data.regency)) })
  }
}

export function getDistrict(id) {
  return dispatch => {
    return axios.get(`/sliquo2i4o3r23oufrg38/d903pdijwedoj3rh0hf0/do30wfhe0ifh3yr48/${id}/nfpa3847gfdjf93`)
      .then((res) => { dispatch(setDistrict(res.data.district)) })
  }
}