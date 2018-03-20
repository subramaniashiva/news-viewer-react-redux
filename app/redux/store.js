/*
  Redux store file.
  Combines the root reducer, thunk middleware (for API requests)
*/
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';

export default createStore(rootReducer, {});
