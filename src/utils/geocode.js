const request = require('request');

const geocode = (address, callback) => {
    // URL contains access token, keep empty when pushing to repo.
    // const url = '' + encodeURIComponent(address) + '';


    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services.', undefined);
        } else if (response.body.data.length === 0) {
            callback('Unable to find location.', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: response.body.data[0].label
            });
        }
    });
}

module.exports = geocode;