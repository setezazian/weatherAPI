const request = require('supertest');
const app = require('./app');

describe('Test the API response', () => {
  it('should respond the GET method', () => request(app)
    .get('/')
    .then((response) => {
      expect(response.statusCode).toBe(200);
    }));

  it('should return a json response', () => request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect(200, {
      city: 'city name',
      conditions: 'clear sky',
      high_temp: 65,
      low_temp: 35,
    }));
});
