var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var modelHelpers = require('./modelHelpers.js');

var movieSchema = require('./movie').schema;

var watchlistSchema = new Schema({
    name: String,
    owner: {
        id: String,
        email: String,
        name: String
    },
    movies: [movieSchema]
});

watchlistSchema.method('toJSON', modelHelpers.toJSON);

var Watchlist = mongoose.model('Watchlist', watchlistSchema);

exports.schema = watchlistSchema;
exports.model = Watchlist;
