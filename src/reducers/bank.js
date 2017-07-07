import { SET_BANK_NAME } from '../actions/accounts';

let initialState = {
  isFetching: false,
  bank: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BANK_NAME:
      return {
        isFetching: true,
        bank: action.bank
      }
    default:
      return state;
  }
}
