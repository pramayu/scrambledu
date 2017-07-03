import { SET_DISTRICT } from '../actions/accounts';

let initialState = {
  districts: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DISTRICT:
      return {
        districts: action.districts
      }
    default:
      return state;
  }
}
