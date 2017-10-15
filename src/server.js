import React from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Route } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createMemoryHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import App from './universal/app';
import { requiredPackages } from './universal/reducers';

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
      requiredPackages,
      router: routerReducer
    }),
    {
      requiredPackages: [
        {
          url: 'https://github.com/reactjs/react-redux',
          text: 'React Redux',
        }
      ],
    },
    applyMiddleware(middleware)
  );

  const serverState = store.getState();

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
});

app.listen(3000);
