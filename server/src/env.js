'use strict';

const assert = require('assert');

const assertEnvVars = keys => {
  keys.forEach(key => {
    assert(process.env[key], `Missing ${key} env var`);
  });
};

assertEnvVars(['MONGO_URL', 'JWT_PRIVATE_KEY']);
