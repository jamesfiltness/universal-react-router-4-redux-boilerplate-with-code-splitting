# Universal React Router 4 Redux boilerplate

:construction: :rotating_light: :construction: _Work in progress. Current progress is a universal, React Router 4, Redux app with data-fetching._ :construction: :rotating_light: :construction:

This boilerplate was created having read [this](https://reacttraining.com/react-router/web/guides/code-splitting/code-splitting-server-rendering) in React Router 4's documentation for code splitting:

> ### Code-splitting + server rendering
> We’ve tried and failed a couple of times...

I set about trying to solve this problem which has manifested itself in this boilerplate. Whilst researching the problem I came across [React Loadable](https://github.com/thejameskyle/react-loadable) and found that universal code splitting was already a solved problem.

This boilerplate's purpose is now to experiment with creating a simple Express/React/Redux/Webpack app which has the following features:

* Component based code splitting using dynamic imports and React Loadable
* Universal rendering
* Client-side data-fetching
* All the other bells and whistles
