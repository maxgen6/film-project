import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import history from 'utils/history';
import { rootReducers } from './reducers';

let middlewares = [thunk, routerMiddleware(history)];
const composeEnhancers = composeWithDevTools({
  traceLimit: 20,
  trace: true,
});

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(...middlewares)));
