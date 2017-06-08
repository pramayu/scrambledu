import { GET_COMMON, GET_COMMON_SUCCESS, GET_COMMON_FAILURE } from '../actions/commons';

let initialState = {
  commons: [],
  isFetching: false,
  error: false
}

export default (state = initialState, action={}) => {
  switch (action.type) {
    case GET_COMMON:
      return {
        commons: [],
        isFetching: true
      }
    case GET_COMMON_SUCCESS:
      return {
        commons: action.commons,
        isFetching: false
      }
    case GET_COMMON_FAILURE:
      return {
        isFetching: false,
        error: true
      }
    default:
      return state;
  }
}
