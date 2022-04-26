const request = require('request');

const forecast = (lat, long, callback) => {
    // URL contains access token, keep empty when pushing to repo.
    // const url = '' + lat + ',' + long + '';


    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (response.body.error) {
            callback('Unable to find location.', undefined);
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
        }
    });
}

module.exports = forecast;