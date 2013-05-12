var Schema = require('mongoose').Schema;

var eventSchema = new Schema({
  name: { type: String, required: true }
});

module.exports = eventSchema;