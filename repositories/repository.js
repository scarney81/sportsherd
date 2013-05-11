/*globals _:true*/
var _ = require('underscore');
var models = require('../models');
var ObjectId = require('mongoose').Schema.ObjectId;

var Repository = function(model) {
  this._model = models.getModel(model);
};

Repository.prototype.find_by_id = function(id, callback) {
  this._model.findById(id, callback);
};

Repository.prototype.save = function(obj, callback) {
  // var model = new this._model(obj);
  // model.save(function(err, model) {
  //   if (err) return callback(err);
  //   callback(null, model);
  // });
};

module.exports = Repository;