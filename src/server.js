import React from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import App from './universal/app';

const app = express();

app.use(express.static('dist'));

app.use((req, res) => {
  const context = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App />
    </StaticRouter>
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
