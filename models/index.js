const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_KEY, {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE
});

module.exports.Photo = require('./photo');