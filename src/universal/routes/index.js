import App from '../components/app';
import Home from '../components/home';
import About from '../components/about';

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/about',
        component: About,
      }
    ]
  }
]

export default routes;
