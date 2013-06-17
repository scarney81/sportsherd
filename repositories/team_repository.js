var util = require("util");
var models = require('../models');
var Repository = require('./repository');

var TeamRepository = function() {
  this._model = models.getModel('Team');
};

util.inherits(TeamRepository, Repository);

TeamRepository.prototype.findByGroupId = function(groupId, callback) {
  var condition = (typeof groupId === 'string') ? groupId : { $in: groupId };
  this.findMany({ facebookGroupId: condition }, callback);
};

module.exports = TeamRepository;