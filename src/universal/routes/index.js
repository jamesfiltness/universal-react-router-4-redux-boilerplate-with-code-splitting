import path from 'path';
import React from 'react';
import Loadable from 'react-loadable';
import App from '../components/app';

function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <div>Loading!</div>;
  } else {
    return null;
  }
}

const AsyncAbout = Loadable({
  loader: () => import(
    /* webpackChunkName: "about" */
    '../components/about'
  ),
  loading: Loading,
});

const AsyncHome = Loadable({
  loader: () => import(
    /* webpackChunkName: "home" */
    '../components/home'
  ),
  loading: Loading,
});

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: AsyncHome
      },
      { path: '/about',
        component: AsyncAbout,
      }
    ]
  }
]

export default routes;
