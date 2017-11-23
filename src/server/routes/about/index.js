import express from 'express';

export function getAboutPage(req, res, next) {
  res.data = {
    text: 'This is a universal React/Redux/Express app with data-fetching and code-splitting using dynamic imports()'
  };

  next();
}
