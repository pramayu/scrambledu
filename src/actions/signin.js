import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorization from '../shared/authorization';

export let SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function getUserLogin(data) {
  return dispatch => {
    return axios({
      method: 'post',
      url: '/signin',
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      let token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorization(token);
      dispatch(setCurrentUser(jwt.decode(token)));
      window.location = '/';
    })
  }
}

export function getFacebookUser() {
  return dispatch => {
    return axios.get('/signup/oauth2/facebook/jwttoken').then((res) => {
      let token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorization(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    })
  }
}
