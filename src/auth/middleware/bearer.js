'use strict';

const { users } = require('../models/index.js'); 
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return _authError();
  }

  const token = req.headers.authorization.split(' ')[1]; 

  try {
    const user = await users.authenticateToken(token);
    
    if (!user) {
      return res.status(403).send('Invalid Login');
    }

    // Uncomment this section to check token expiration
    // const decodedToken = jwt.verify(token, process.env.SECRET);
    // if (new Date() > new Date(decodedToken.exp * 1000)) {
    //   return res.status(403).send('Token has expired');
    // }

    // Uncomment this section to implement single-use tokens
    // if (user.usedTokens.includes(token)) {
    //   return res.status(403).send('Token has already been used');
    // }

    // Mark the token as used (if implementing single-use tokens)
    // user.usedTokens.push(token);
    // await user.save();

    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }
};


