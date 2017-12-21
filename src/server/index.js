import express from 'express';
import Loadable from 'react-loadable';
import mustacheExpress from 'mustache-express';
import reactRouterMiddleware from './middleware/react-router';
import expressRouter from './routes';

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.set('views', './src/server/templates')

app.use(express.static('dist'));
app.use(expressRouter);
app.use(reactRouterMiddleware());

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('App running at http://localhost:3000/');
  });
});
