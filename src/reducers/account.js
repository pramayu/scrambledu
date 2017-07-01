import { GET_ACCOUNT, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_FAILURE } from '../actions/accounts';

let getInitialState = {
  accounts: [],
  isFetching: false,
  error: false
}

export default (state = getInitialState, action={}) => {
  switch (action.type) {
    case GET_ACCOUNT:
      return {
        accounts: [],
        isFetching: true
      }
    case GET_ACCOUNT_SUCCESS:
      return {
        accounts: action.account,
        isFetching: false
      }
    case GET_ACCOUNT_FAILURE:
      return {
        accounts: [],
        error: true
      }
    default:
      return state;
  }
}
