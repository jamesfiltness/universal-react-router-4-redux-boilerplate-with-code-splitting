import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Route } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createMemoryHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';

import App from '../../../universal/components/app';
import { text } from '../../../universal/reducers';
import routes from '../../../universal/routes';

export default () => {
  return function reactRouterMiddleware(req, res) {
    const context = {};
    const history = createHistory({
      initialEntries: [req.originalUrl],
    });

    const middleware = routerMiddleware(history);

    const store = createStore(
      combineReducers({
        text,
        router: routerReducer
      }),
      res.data,
      applyMiddleware(middleware)
    );

    const serverState = store.getState();

    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <ConnectedRouter
          context={context}
          history={history}
        >
          {renderRoutes(routes)}
        </ConnectedRouter>
      </Provider>
    );
    if (context.url) {
      res.redirect(301, context.url);
    } else {
      res.send(`
        <!doctype html>
        <head>
          <title>React Router 4/Redux boilerplate</title>
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(serverState)}
          </script>
          <script src="http://localhost:3000/bundle.js"></script>
        </body>
        </html>
      `);
    }
  }
}
