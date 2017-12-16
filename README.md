# Universal React Router 4 Redux boilerplate with universal code splitting

This boilerplate was created having read [this](https://reacttraining.com/react-router/web/guides/code-splitting/code-splitting-server-rendering) in React Router 4's documentation for code splitting:

> ### Code-splitting + server rendering
> We’ve tried and failed a couple of times...

I wanted to solve this problem, quickly stumbled across [React Loadable](https://github.com/thejameskyle/react-loadable) and discovered that code splitting + universal rendering was already a solved problem.

This boilerplate demonstrates a really minimal universal React/Redux/React Router 4 SPA with code splitting and async data fetching.

### Planned features

* CSS modules, SASS, PostCss support
* Webpack Dev Server
* Hot reloading
* ESLint
* Jest integration
* Git hooks
* Docker (with simple Nginx reverse proxy)
* Basic security features (nsp, csp, synk, csrf protection)
* Comments / documentation
* Example using [react-loadable-visibility](https://github.com/stratiformltd/react-loadable-visibility)
