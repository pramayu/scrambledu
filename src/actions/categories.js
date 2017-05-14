import axios from 'axios';


export let SET_CATEGORIES = 'SET_CATEGORIES';


export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    categories
  }
}

export function getCategories() {
  return dispatch => {
    return axios.get('/categories').then((res) => {
      dispatch(setCategories(res.data.categories));
      console.log(res.data.categories)
    })
  }
}
