import { SET_REGENCY } from '../actions/accounts';


let initialState = {
  regencies: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_REGENCY:
      return {
        regencies: action.regencies
      }
    default:
      return state;
  }
}
