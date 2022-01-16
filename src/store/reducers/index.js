import { combineReducers } from 'redux';
// TODO: Review16.01.2020: Redundant dependency
import { connectRouter } from 'connected-react-router';

import movies from './movies';

const appReducer = combineReducers({
  movies,
});

const rootReducers = (state, action) => {
  return appReducer(state, action);
};

export { rootReducers };
