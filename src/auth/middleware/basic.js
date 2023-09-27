'use strict';

const base64 = require('base-64');
const { users } = require('../models/index.js'); // Change 'user' to 'users'

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { return _authError(); }

  let basic = req.headers.authorization.split(' ')[1]; // Get the base64 encoded string

  try {
    const decoded = base64.decode(basic);
    const [username, password] = decoded.split(':');
    
    const user = await users.authenticateBasic(username, password); // Change 'user' to 'users'
    
    if (!user) {
      return res.status(403).send('Invalid Login'); // Send a 403 response and do not call next()
    }

    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }
}


