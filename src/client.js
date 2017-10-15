import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import App from './universal/app';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

ReactDOM.hydrate((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
), document.getElementById('app'))
