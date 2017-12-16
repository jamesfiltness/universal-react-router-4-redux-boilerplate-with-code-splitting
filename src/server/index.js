import express from 'express';
import reactRouterMiddleware from './middleware/react-router';
import expressRouter from './routes';
import Loadable from 'react-loadable';

const app = express();

app.use(express.static('dist'));
app.use(expressRouter);
app.use(reactRouterMiddleware());

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
});
