'use strict';

const jwt = require('jsonwebtoken');

const authGuard = (req, res, next) => {
  try {
    const token =
      req.get('Authorization') && req.get('Authorization').split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: { msg: 'invalid token' } });
    }

    jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    next();
  } catch (error) {
    res.status(401).json({ error: { msg: 'invalid token ' } });
  }
};

module.exports = authGuard;
