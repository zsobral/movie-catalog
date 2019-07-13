'use strict';

require('./env');

const database = require('./database');
const app = require('./app');

const port = process.env.PORT || 3000;

database.connection.on('error', err => {
  console.error(err);
  process.exit(1);
});

database.connection.once('open', () => {
  app.listen(port, () => {
    console.info(`server started on port ${port}`);
  });
});

database.connect();
