import React from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Route } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createMemoryHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import App from './universal/app';

const app = express();

app.use(express.static('dist'));

app.use((req, res) => {
  const context = {};

  const history = createHistory({
    initialEntries: [req.originalUrl],
  });

  const middleware = routerMiddleware(history);

  const store = createStore(
    combineReducers({
      router: routerReducer
    }),
    applyMiddleware(middleware)
  );

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <ConnectedRouter
        context={context}
        history={history}
      >
        <App />
      </ConnectedRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    res.send(`
      <!doctype html>
      <body>
        <div id="app">${html}</div>
        <script src="http://localhost:3000/bundle.js"></script>
      </body>
      </html>
    `);
  }
});

app.listen(3000);
