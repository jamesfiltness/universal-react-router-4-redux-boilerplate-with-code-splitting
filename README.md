# Universal React Router 4 Redux boilerplate

:construction: _Work in progress. Currently this is a universal, React Router 4, Redux app with data-fetching. Next up is component-centric code splitting using React Loadable_ :construction:

This boilerplate was created having read [this](https://reacttraining.com/react-router/web/guides/code-splitting/code-splitting-server-rendering) in React Router 4's documentation for code splitting:

> ### Code-splitting + server rendering
> We’ve tried and failed a couple of times...

This boilerplate was originally created to solve the problem above but then I stumbled across [React Loadable]
(https://github.com/thejameskyle/react-loadable) and discovered that code splitting + universal rendering was already a solved problem.

This boilerplate now exists to show how a single page app with the following features can be put together:

* Component based code splitting using dynamic imports and React Loadable
* Universal rendering
* React Router 4 with Client-side data-fetching
* React 16, Redux, express backend
* Hot reloading
