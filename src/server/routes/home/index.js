import express from 'express';

export function getHomepage(req, res, next) {
  res.data = {
    text: 'Experimenting with React Router 4 and Redux.'
  };

  next();
}
