var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var modelHelpers = require('./modelHelpers.js');

var movieSchema = new Schema({
    trackId: Number,
    artistName: String,
    trackName: String,
    trackCensoredName: String,
    trackViewUrl: String,
    previewUrl: String,
    artworkUrl30: String,
    artworkUrl60: String,
    artworkUrl100: String,
    collectionPrice: Number,
    trackPrice: Number,
    trackRentalPrice: Number,
    collectionHdPrice: Number,
    trackHdPrice: Number,
    trackHdRentalPrice: Number,
    releaseDate: Date,
    collectionExplicitness: String,
    trackExplicitness: String,
    trackTimeMillis: Number,
    country: String,
    currency: String,
    primaryGenreName: String,
    contentAdvisoryRating: String,
    longDescription: String,
    radioStationUrl: String
});

movieSchema.method('toJSON', modelHelpers.toJSON);

var Movie = mongoose.model('Movie', movieSchema);

exports.schema = movieSchema;
exports.model = Movie;