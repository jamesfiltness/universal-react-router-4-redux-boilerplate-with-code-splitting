import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './universal/app';

ReactDOM.hydrate((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('app'))
