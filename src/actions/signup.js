import axios from 'axios';


export function addNewUser(data) {
  return dispatch => {
    return axios({
      method: 'post',
      url: '/signup/81abc52ad7185eac7c92',
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}


export function checkUserExist(identifier) {
  return dispatch => {
    return axios.get('/signup/check/' +identifier+ '/d38d7d1738e2a0cf3cfa5d4ad805abe73ac77bb')
  }
}
