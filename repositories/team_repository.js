/*globals _:true*/
var _ = require('underscore');
var models = require('../models');
var Repository = require('./repository');

var TeamRepository = function() {
  var model = models.getModel('Team');
  this._repository = new Repository(model);
};

TeamRepository.prototype.all = function(callback) {
  this._repository.all(callback);
};

TeamRepository.prototype.findById = function(id, callback) {
  this._repository.findById(id, callback);
};

TeamRepository.prototype.findByFacebookId = function(facebookId, callback) {
  var query = { facebookId: facebookId };
  this._repository.findMany(query, callback);
};

TeamRepository.prototype.create = function(obj, callback) {
  this._repository.create(obj, callback);
};

TeamRepository.prototype.removeById = function(id, callback) {
  this._repository.removeById(id, callback);
};

TeamRepository.prototype.removeAll = function(callback) {
  this._repository.removeAll(callback);
};

module.exports = TeamRepository;