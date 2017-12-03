import express from 'express';
import reactRouterMiddleware from './middleware/react-router';
import expressRouter from './routes';

const app = express();

app.use(express.static('dist'));
app.use(expressRouter);
app.use(reactRouterMiddleware());
app.listen(3000);
