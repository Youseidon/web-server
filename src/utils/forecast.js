const request = require('request');

const forecast = (latitude, longitude, result) => {
    const url = 'http://api.weatherstack.com/current?access_key=2eea00c0ec9c1a6191ade9fe3c7a5734&query=' + longitude + ',' + latitude + '&units=m'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            result('Unable to connect to the weather service.', undefined);
        } else if (body.error) {
            result('Exception: ' + body.error, undefined);
        } else {
            result(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                humidity: body.current.humidity,
                wind_speed: body.current.wind_speed
            });
        }
    })
}

module.exports = forecast;