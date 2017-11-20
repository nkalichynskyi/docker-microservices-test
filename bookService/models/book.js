const mongoose = require('mongoose');
const config = require('config');
mongoose.Promise = Promise;

db = mongoose.connect(config.db, { useMongoClient: true });

db.on('error', function(err) {
	console.log("err", err);
});

module.exports = mongoose.model('Book', { name: String });