'use strict';

const { users } = require('../models/index.js'); // Make sure it's 'users', not 'user'

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return _authError();
  }

  let token = req.headers.authorization.split(' ')[1]; // Get the token from the authorization header

  try {
    const user = await users.authenticateToken(token); // Change to 'authenticateToken'
    
    if (!user) {
      return res.status(403).send('Invalid Login');
    }

    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }
};

