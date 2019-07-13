'use strict';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./users-schema');

exports.create = async ({ username, password }) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = new User({ username, password: hash });
  const result = await user.save();
  return result._id;
};

exports.findByUsername = async username => {
  const user = await User.findOne({ username }).exec();
  if (!user) {
    return null;
  }

  return {
    id: user._id,
    username: user.username,
    password: user.password,
  };
};

exports.comparePassword = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};

exports.signJwt = payload => {
  const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
  return token;
};
