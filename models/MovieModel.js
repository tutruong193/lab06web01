const mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    title: String,
    actor: String,
    year: Number,
    poster: String,
    trailer: String,
    director: String,
});

var MovieModel = mongoose.model('Movie',MovieSchema,'movie');
module.exports = MovieModel;