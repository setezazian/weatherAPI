# Weather API
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /> <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" /> <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />

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
