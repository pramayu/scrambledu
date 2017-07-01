import { combineReducers } from 'redux';

import user from './user';
import cuser from './cuser';
import categories from './categories';
import commons from './common'
import accounts from './account';
import preferences from './preference';

export default combineReducers({
  user,
  cuser,
  categories,
  commons,
  accounts,
  preferences
});
