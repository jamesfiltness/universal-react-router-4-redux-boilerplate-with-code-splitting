import path from 'path';
import React from 'react';
import Loadable from 'react-loadable';
import App from '../components/app';

function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <div></div>;
  } else {
    return null;
  }
}

const AsyncAbout = Loadable({
  loader: () => import('../components/about'),
  loading: Loading,
});

const AsyncHome = Loadable({
  loader: () => import('../components/home'),
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
