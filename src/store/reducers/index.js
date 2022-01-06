import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import movies from './movies';

const appReducer = combineReducers({
  movies,
});

const rootReducers = (state, action) => {
  return appReducer(state, action);
};

export { rootReducers };
