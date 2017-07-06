import { SET_NEW_ADDRESS, SET_ADDRESS_RECEIVER, SET_DELETE_ADDRESS, SET_EDIT_ADDRESS } from '../actions/accounts';

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
    case SET_DELETE_ADDRESS:
      return state.filter(item => item._id !== action.id)
    case SET_EDIT_ADDRESS:
      return state.map(item => {
        if(item._id === action.address._id) return action.address
        return item;
      })
    default:
      return state;
  }
}
