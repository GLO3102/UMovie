var request = require('request');

exports.getAllGenres = function (req, res) {
    request({
            uri: 'https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres',
            method: 'GET'
        },
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                successCallback(res, JSON.parse(body));
            } else {
                errorCallback(res, error, response, body);
            }
        }
    );
};

function successCallback(res, body) {
    // 33 corresponds to the movie entity.
    var genres = [];
    for (var subgenre in body['33']['subgenres']) {
        var genre = body['33']['subgenres'][subgenre];
        genres.push({id: genre['id'], name: genre['name']})
    }
    res.status(200).send(genres);
}

function errorCallback(res, error, response, body) {
    console.error(error, body);
    res.status(response.statusCode).send(body);
}