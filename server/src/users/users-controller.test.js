'use strict';

const request = require('supertest');

const database = require('../database');
const app = require('../app');
const User = require('./users-schema');
const usersServices = require('./users-service');

const user = {
  username: 'admin',
  password: 'admin',
};

beforeAll(async () => {
  await database.connect();
  await usersServices.create(user);
});

afterAll(async () => {
  await User.deleteMany({}).exec();
  await database.connection.close();
});

describe('POST /users/sign-in', () => {
  it('should return 422 when missing any required body', async () => {
    await request(app)
      .post('/users/sign-in')
      .send({})
      .expect(422);
    await request(app)
      .post('/users/sign-in')
      .send({ username: 'test' })
      .expect(422);
    await request(app)
      .post('/users/sign-in')
      .send({ password: '1234' })
      .expect(422);
  });

  it('should return 401 with invalid credentials', async () => {
    await request(app)
      .post('/users/sign-in')
      .send({ username: 'wrong', password: 'wrong' })
      .expect(401);
  });

  it('should return a valid jwt token with valid credentials', async () => {
    let token;
    await request(app)
      .post('/users/sign-in')
      .send(user)
      .expect(200)
      .expect(res => {
        expect(res.body.token).toBeDefined();
        token = res.body.token;
      });
    await request(app)
      .get('/users/check')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('should return 401 with invalid jwt', async () => {
    await request(app)
      .get('/users/check')
      .set('Authorization', `Bearer 123`)
      .expect(401);
  });
});
