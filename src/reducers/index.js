import { combineReducers } from 'redux';

import user from './user';
import cuser from './cuser';
import categories from './categories';
import commons from './common'
import accounts from './account';
import preferences from './preference';
import provinces from './province';
import regencies from './regency';
import districts from './district';

export default combineReducers({
  user,
  cuser,
  categories,
  commons,
  accounts,
  preferences,
  provinces,
  regencies,
  districts
});
