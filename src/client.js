import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import App from './universal/components/app';
import { requiredPackages } from './universal/reducers';
import { renderRoutes } from 'react-router-config';
import routes from './universal/routes';

const history = createHistory();

const middleware = routerMiddleware(history);
const initialState = window.__PRELOADED_STATE__;

const store = createStore(
  combineReducers({
    requiredPackages,
    router: routerReducer
  }),
  initialState,
  applyMiddleware(middleware)
);

ReactDOM.hydrate((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {renderRoutes(routes)}
    </ConnectedRouter>
  </Provider>
), document.getElementById('app'))
