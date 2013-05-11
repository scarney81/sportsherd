var mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/sportsherd');
var connection = mongoose.connection;

// register error and open callbacks
connection.on('error', console.error.bind(console, 'connection error:'));
connection.on('open', function() { console.log('connection to mongodb is open'); });

// register models
mongoose.model('Team', require('./team_schema'));
mongoose.model('Event', require('./event_schema'));

module.exports = {
  getModel: function(model) { return mongoose.model(model); }
};