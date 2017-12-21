import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Route } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createMemoryHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import thunkMiddleware from 'redux-thunk';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
import stats from '../../../../dist/react-loadable.json';

import App from '../../../universal/components/app';
import { pageData, dataLoading } from '../../../universal/reducers';
import routes from '../../../universal/routes';

export default () => {
  return function reactRouterMiddleware(req, res) {
    const context = {};
    const history = createHistory({
      initialEntries: [req.originalUrl],
    });

    let modules = [];

    const middleware = routerMiddleware(history);

    const store = createStore(
      combineReducers({
        pageData,
        dataLoading,
        routing: routerReducer
      }),
      { ...res.data, ...{ dataLoading: false } },
      applyMiddleware(middleware, thunkMiddleware)
    );

    const serverState = store.getState();

    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <ConnectedRouter
          context={context}
          history={history}
        >
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
          {renderRoutes(routes)}
         </Loadable.Capture>
           </ConnectedRouter>
      </Provider>
    );

    let bundles = getBundles(stats, modules);

    if (context.url) {
      res.redirect(301, context.url);
    } else {
      // TODO: this could be a dynamic import
      const assets = require('../../../webpack-assets.json');
      const serverStateStringified = JSON.stringify(serverState);
      const bundlesString = bundles.map(bundle => {
        return `<script src="http://localhost:3000/${bundle.file}"></script>`
      }).join('\n');

      res.render('layout', { html, assets, serverState: serverStateStringified, bundlesString })
    }
  }
}
