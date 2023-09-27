'use strict';

require('dotenv').config();
const { db } = require('./src/auth/models');
const server = require('./src/server.js');
const PORT = process.env.PORT || 3001;

// starts the server
db.sync()
  .then(() => {
    server.start(PORT);
  }).catch(e => {
    console.error('Could not start server', e.message);
  });