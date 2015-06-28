var Watchlist = require('../models/watchlist').model;
var User = require('../models/user').model;
var Movie = require('../models/movie').model;
var _ = require('underscore');

exports.addMovieToWatchlist = function (req, res) {
    Watchlist.findById(req.params.id, function (err, watchlist) {
        if (!err) {
            if (watchlist) {
                if (req.body) {
                    var movie = new Movie(req.body);
                    watchlist.movies.push(movie.toJSON());
                    watchlist.save();
                    res.status(200).send(watchlist);
                } else {
                    res.status(412).send({
                        errorCode: 'REQUEST_BODY_REQUIRED',
                        message: 'Request body is missing'
                    });
                }
            } else {
                sendWatchlistNotFoundError(res, req);
            }
        } else {
            handleFindByIdError(err, res, req);
        }
    });
};

exports.createWatchlist = function (req, res) {
    User.findById(req.user.id, function (err, user) {
        if (!err) {
            var watchlist = new Watchlist({
                name: req.body.name,
                owner: user.toJSON()
            });
            watchlist.save(function (err) {
                if (!err) {
                    res.status(201).send(watchlist);
                } else {
                    console.error(err);
                }
            });
        } else {
            console.error(err);
        }
    });
};

exports.createWatchlistUnsecure = function (req, res) {
    var watchlist = new Watchlist({
        name: req.body.name,
        owner: req.body.owner
    });
    watchlist.save(function (err) {
        if (!err) {
            res.status(201).send(watchlist);
        } else {
            console.error(err);
        }
    });
};

exports.getWatchlists = function (req, res) {
    Watchlist.find({}, function (err, watchlists) {
        if (!err) {
            res.status(200).send(watchlists || []);
        } else {
            console.log(err);
            res.status(500).send(err);
        }
    });
};

exports.getWatchlistById = function (req, res) {
    Watchlist.findById(req.params.id, function (err, watchlist) {
        if (!err) {
            if (watchlist) {
                res.status(200).send(watchlist);
            } else {
                sendWatchlistNotFoundError(res, req);
            }
        } else {
            handleFindByIdError(err, res, req);
        }
    });
};

exports.removeMovieFromWatchlist = function (req, res) {
    Watchlist.findById(req.params.watchlistId, function (err, watchlist) {
        if (!err) {
            if (watchlist) {
                var movieToRemove = watchlist.movies.filter(function (movie) {
                    return movie.trackId == req.params.trackId;
                }).pop();

                if (movieToRemove) {
                    movieToRemove.remove();
                    watchlist.save();
                    res.status(200).send(watchlist);
                } else {
                    res.status(404).send({
                        errorCode: 'MOVIE_NOT_FOUND',
                        message: 'Movie ' + req.params.trackId + ' was not found'
                    });
                }
            } else {
                sendWatchlistNotFoundError(res, req);
            }
        } else {
            handleFindByIdError(err,res,req);
        }
    });
};

exports.removeWatchlist = function (req, res) {
    Watchlist.findById(req.params.id, function (err, watchlist) {
        if (!err) {
            if (watchlist) {
                if(watchlist.owner.id == req.user.id) {
                    watchlist.remove();
                    res.status(200).send({
                        message: 'Watchlist ' + req.params.id + ' deleted successfully.'
                    });
                }
                else {
                    res.status(412).send({
                        errorCode: 'NOT_WATCHLIST_OWNER',
                        message: 'Watchlist can only be deleted by its owner.'
                    });
                }
            } else {
                sendWatchlistNotFoundError(res, req);
            }
        } else {
            handleFindByIdError(err,res,req);
        }
    });
};

exports.removeWatchlistUnsecure = function (req, res) {
    Watchlist.findById(req.params.id, function (err, watchlist) {
        if (!err) {
            if (watchlist) {
                watchlist.remove();
                res.status(200).send({
                    message: 'Watchlist ' + req.params.id + ' deleted successfully.'
                });
            } else {
                sendWatchlistNotFoundError(res, req);
            }
        } else {
            handleFindByIdError(err,res,req);
        }
    });
};

exports.updateWatchlist = function (req, res) {
    Watchlist.findById(req.params.id, function (err, watchlist) {
        if (!err) {
            if (watchlist) {
                watchlist.name = req.body.name;
                watchlist.movies = req.body.movies;
                watchlist.save();
                res.status(200).send(watchlist);
            } else {
                sendWatchlistNotFoundError(res, req);
            }
        } else {
            handleFindByIdError(err,res,req);
        }
    });
};

function handleFindByIdError(err, res, req) {
    console.error(err);
    if (err.name === 'CastError') {
        sendWatchlistNotFoundError(res, req);
    } else {
        res.status(500).send(err);
    }
}

function sendWatchlistNotFoundError(res, req) {
    res.status(404).send({
        errorCode: 'WATCHLIST_NOT_FOUND',
        message: 'Watchlist ' + req.params.id + ' was not found'
    });
}