import { SET_NEW_ADDRESS } from '../actions/accounts';

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
    default:
      return state;
  }
}
