'use strict';

const express = require('express');
const { body } = require('express-validator');

const validate = require('../middlewares/validate-middleware');
const authGuard = require('../middlewares/auth-guard-middleware');
const usersService = require('./users-service');

const router = express.Router();

router.post(
  '/users/sign-in',
  [validate([body('username').exists(), body('password').exists()])],
  async (req, res) => {
    try {
      const user = await usersService.findByUsername(req.body.username);
      if (!user) {
        return res.status(401).json({ error: { msg: 'username not found' } });
      }

      const passwordMatch = await usersService.comparePassword(
        req.body.password,
        user.password
      );
      if (!passwordMatch) {
        return res
          .status(401)
          .json({ error: { msg: 'password does not match' } });
      }
      const token = usersService.signJwt({
        id: user.id,
        username: user.username,
      });
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

router.get('/users/check', [authGuard], async (req, res) => {
  res.json({ msg: 'ok' });
});

module.exports = router;
