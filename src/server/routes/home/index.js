import express from 'express';

export function getHomepage(req, res, next) {
  res.data = {
    pageData: {
      title: "Universal RR4 boilerplate",
      text: 'This is a universal React/Redux/Express app with data-fetching and code-splitting using dynamic imports()'
    }
  };

  // TODO: Use content negotiation here instead
  if(req.xhr) {
    return res.json(res.data);
  } else {
    next();
  }
}
