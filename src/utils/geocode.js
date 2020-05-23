const request = require('request');
const geocode = (address, result) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicDFub3EiLCJhIjoiY2thY3VmcnQ4MWs5bDMwbXQ4anQzdDV1ZCJ9.9gMRbC3S9ZTUv86mOgAn0w&limit=1'
    request({ url: url, json: true }, (error, { body }) => {
        if (body.features.length === 0) {
            result('Unable to find location, Try again later.', undefined);
        } else {
            result(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode