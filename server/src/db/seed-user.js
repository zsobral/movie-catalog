'use strict';

const database = require('../database');
const usersServices = require('../users/users-service');

database.connect().then(async () => {
  await usersServices.create({ username: 'admin', password: 'admin' });
  await database.connection.close();
});
