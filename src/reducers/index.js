import { combineReducers } from 'redux';

import user from './user';
import cuser from './cuser';
import categories from './categories';
import commons from './common'

export default combineReducers({
  user,
  cuser,
  categories,
  commons
});
