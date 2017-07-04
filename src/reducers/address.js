import { SET_NEW_ADDRESS, SET_ADDRESS_RECEIVER } from '../actions/accounts';

let initialState = {
  address: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_ADDRESS:
      return [
        ...state,
        Object.assign({}, action.address)
      ]
    case SET_ADDRESS_RECEIVER:
      return action.address
    default:
      return state;
  }
}
