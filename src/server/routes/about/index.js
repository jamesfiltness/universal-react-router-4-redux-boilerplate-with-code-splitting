import express from 'express';

export function getAboutPage(req, res, next) {
  res.data = {
    pageData: {
      title: 'About',
      text: 'Some about copy'
    }
  };
  
  // if the call is made via fetch on the client then we just want to send the data back
  // Allowing next() to be called means that the reactRouterMiddleware is invoked which sends the server
  // rendered HTML as a response instead of the data we need in the context of data fetching
  
  // TODO: Use content negotiation here instead
  if(req.xhr) {
    return res.json(res.data);
  } else {
    next();
  }
}
