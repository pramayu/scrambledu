import { SET_CATEGORIES } from '../actions/categories';

let initialState = {
  categories: []
}

export default (state = initialState, action={}) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories
    default:
      return state;
  }
}
