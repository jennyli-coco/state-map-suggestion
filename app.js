'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.disable('etag')

// Use the built-in express middleware for serving static files from './public'
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Start the server
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
