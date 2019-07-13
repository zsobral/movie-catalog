'use strict';

const request = require('supertest');

const app = require('../src/app');

describe('GET /healthz', () => {
  it('should return 200', async () => {
    await request(app)
      .get('/healthz')
      .expect(200);
  });
});

describe('GET /number', () => {
  it('should return a json with a number', async () => {
    await request(app)
      .get('/number')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => {
        expect(typeof res.body.number).toBe('number');
      });
  });
});
