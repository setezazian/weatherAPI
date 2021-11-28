const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    city: 'city name',
    conditions: 'clear sky',
    high_temp: 65,
    low_temp: 35,
  });
});

module.exports = app;
