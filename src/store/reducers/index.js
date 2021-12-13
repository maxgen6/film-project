import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import films from './films';

const appReducer = combineReducers({
  films, 
});

const rootReducers = (state, action) => {
  return appReducer(state, action);
};

export { rootReducers };
