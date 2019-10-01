# Universal React Router 4 Redux boilerplate with code splitting

This boilerplate demonstrates a minimal universal React/Redux/React Router 4 single page app, with code splitting. It uses React Loadable to make working with Dynamic imports easy and work with universal rendering.


## 
Run `npm i` followed by `npm start` to get the app running at `localhost:3000`. Check the network tab to see bundles being pulled in on demand.

The gist of it is that we use React Loadable to collect all of the bundles it uses for the server render and send those down to the client in script tags:  

https://github.com/jamesfiltness/universal-react-router-4-redux-boilerplate-with-code-splitting/blob/master/src/server/middleware/react-router/index.js

and then pick those up on the client using React Loadable again:

https://github.com/jamesfiltness/universal-react-router-4-redux-boilerplate-with-code-splitting/blob/master/src/server/index.js
https://github.com/jamesfiltness/universal-react-router-4-redux-boilerplate-with-code-splitting/blob/master/src/client/index.js
