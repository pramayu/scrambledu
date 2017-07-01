import { GET_USER_PREPERENCES } from '../actions/accounts';

let getInitialState = {
  preferences: []
}

export default (state = getInitialState, action = {}) => {
  switch (action.type) {
    case GET_USER_PREPERENCES:
      return {
        preferences: action.preferences
      }
    default:
      return state;
  }
}
