/*
  Root reducer. Combines all the reducer
  This files gives the structure of the state tree of the application
*/
import { combineReducers } from 'redux';

import loading from './loading';

export default combineReducers({
  loading,
});
