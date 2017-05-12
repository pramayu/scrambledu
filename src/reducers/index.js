import { combineReducers } from 'redux';

import user from './user';
import cuser from './cuser';

export default combineReducers({
  user,
  cuser
});
