import { SET_PROVINCE } from '../actions/accounts';

let initialState = {
  provinces: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PROVINCE:
      return {
        provinces: action.provinces
      }
    default:
      return state;
  }
}
