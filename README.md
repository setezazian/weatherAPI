# weatherAPI

Using the open weather API (https://openweathermap.org/api), build and test a json API.

Given a URL like:
`http://localhost:3000/local/{zipcode}`

Return a json response like:

```
{
  "city": "city name",
  "conditions": "clear sky",
  "high_temp": 65,
  "low_temp": 35
}
```

## Initial Setup

1. Create a `config` folder that contains an `index.js`  file with the API key:

    ```
    module.exports = {
      apiKey: 'your-very-secret-api-key',
    };
    ```

1. Run `npm install` to install dependencies.

1. Start the server on `localhost:3000` using `npm start`.
