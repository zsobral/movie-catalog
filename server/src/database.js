'use strict';

const mongoose = require('mongoose');

module.exports = {
  connection: mongoose.connection,
  connect: () =>
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }),
};
