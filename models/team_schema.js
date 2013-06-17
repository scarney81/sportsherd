var Schema = require('mongoose').Schema;

var teamSchema = new Schema({
  name: { type: String, required: true },
  facebookGroupId: { type: String, required: true }
});

module.exports = teamSchema;