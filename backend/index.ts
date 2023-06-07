import express from 'express';
// const express = require('express');

const app = express();
const port = 3000; // default port to listen

// define a route handler for the default home page
app.get('/', (_: express.Request, res: express.Response) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
  console.log(`started at http://localhost:${port}`);
});
