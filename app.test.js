const axios = require('axios');
const request = require('supertest');
const app = require('./app');

// replace the implementation of axios methods
jest.mock('axios');

describe('Test the API response', () => {
  beforeEach(() => {
    axios.get.mockImplementation(() => Promise.resolve({
      status: 200,
      data: {
        name: 'city name',
        weather: [{ description: 'clear sky' }],
        main: {
          temp_max: 65,
          temp_min: 35,
        },
      },
    }));
  });

  it('should respond the GET method', () => request(app)
    .get('/local/12345')
    .then((response) => {
      expect(response.statusCode).toBe(200);
    }));

  it('should return a json response', () => request(app)
    .get('/local/12345')
    .expect('Content-Type', /json/)
    .expect({
      city: 'city name',
      conditions: 'clear sky',
      high_temp: 65,
      low_temp: 35,
    }));
});
