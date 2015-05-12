var request = require('request');

exports.getMoviesGenres = function (req, res) {
    getGenres(req, res, '33');
};

exports.getTvShowsGenres = function (req, res) {
    getGenres(req, res, '32');
};

function getGenres(req, res, entityCode) {
    request({
            uri: 'https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres',
            method: 'GET'
        },
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                successCallback(res, JSON.parse(body), entityCode);
            } else {
                errorCallback(res, error, response, body);
            }
        }
    );
}

function successCallback(res, body, entityCode) {
    // 33 corresponds to the movie entity.
    var genres = [];
    var subgenres = body[entityCode]['subgenres'];
    for (var subgenre in subgenres) {
        var genre = subgenres[subgenre];
        genres.push({id: genre['id'], name: genre['name']})
    }
    res.status(200).send(genres);
}

function errorCallback(res, error, response, body) {
    console.error(error, body);
    res.status(response.statusCode).send(body);
}