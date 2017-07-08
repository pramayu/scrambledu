import { SET_UPDATE_BANK_DATA_AS_NEW, SET_BANK_DATA } from '../actions/accounts';

let initialState = {
  bank_accounts: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_UPDATE_BANK_DATA_AS_NEW:
      return [
        ...state,
        Object.assign({}, action.bank)
      ]
    case SET_BANK_DATA:
      return action.bank
    default:
      return state;
  }
}
