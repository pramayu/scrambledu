import { SET_UPDATE_BANK_DATA_AS_NEW } from '../actions/accounts';

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
    default:
      return state;
  }
}
