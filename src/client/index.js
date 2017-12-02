import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import thunkMiddleware from 'redux-thunk';

import App from '../universal/components/app';
import { pageData } from '../universal/reducers';
import routes from '../universal/routes';
import * as types from '../universal/actions/types';

const history = createHistory();

const middleware = routerMiddleware(history);
const initialState = window.__PRELOADED_STATE__;

// App reducer pattern is needed so state can be rehydrated
// when it receives new data after a history event
// https://stackoverflow.com/a/35641992/392572
const appReducer = combineReducers({
  pageData,
  routing: routerReducer
});

const rootReducer = (state, action) => {
  if (action.type === types.REHYDRATE_STATE) {
    const { routing } = state
    state = { routing, ...state } 
    state =  Object.assign(state, action.data);
  }
  
  return appReducer(state, action);
}

// TODO: create a store factory that can be used to create a store on the client
// and server
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(middleware, thunkMiddleware)
);

ReactDOM.hydrate((
  <Provider store={store}>
    <ConnectedRouter history={history}>
        {renderRoutes(routes)}
    </ConnectedRouter>
  </Provider>
), document.getElementById('app'))
