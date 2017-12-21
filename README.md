# Universal React Router 4 Redux boilerplate with code splitting

This boilerplate was created having read [this](https://reacttraining.com/react-router/web/guides/code-splitting/code-splitting-server-rendering) in React Router 4's documentation for code splitting:

> ### Code-splitting + server rendering
> We’ve tried and failed a couple of times...

I quickly stumbled across [React Loadable](https://github.com/thejameskyle/react-loadable) which solves the problem.

This boilerplate demonstrates a minimal universal React/Redux/React Router 4 SPA with code splitting and async data-fetching.

I'll flesh this out (and tidy up) with other features to make this a more complete boilerplate shortly.

Run `npm i` followed by `npm start` to get the app running at `localhost:3000`. Check the network tab to see bundles being pulled in on demand.

### TODOS:

* Webpack dev server and nodemon
* Jest plus coverage
* ESLint
* Git hooks
* Fonts and files
* Production build
* Basic Docker setup
* Nginx
* Html / css / js minified
* Editorconfig
* Test data fetching failure
* Express error handler middleware
* React error boundary example
* security features such as Helmet, csp headers, csurf and nsp checker
