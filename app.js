const express = require('express');
const axios = require('axios');
const { apiKey } = require('./config');

const app = express();

app.get('/local/:zip', (req, res) => {
  axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      zip: req.params.zip,
      appid: apiKey,
      units: 'imperial',
    },
  })
    .then((response) => {
      res.json({
        city: response.data.name,
        conditions: response.data.weather[0].description,
        high_temp: response.data.main.temp_max,
        low_temp: response.data.main.temp_min,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('error retrieving weather');
    });
});

module.exports = app;
