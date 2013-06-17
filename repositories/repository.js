var ObjectId = require('mongoose').Schema.ObjectId;

var Repository = function() {};

Repository.prototype.all = function(callback) {
  this._model.find({}, callback);
};

Repository.prototype.findById = function(id, callback) {
  this._model.findById(id, callback);
};

Repository.prototype.findMany = function(query, callback) {
  this._model.find(query, callback);
};

Repository.prototype.create = function(obj, callback) {
  var model = new this._model(obj);
  model.save(function(err, model) {
    if (err) return callback(err);
    callback(null, model);
  });
};

Repository.prototype.removeById = function(id, callback) {
  var objectId = ObjectId(id);
  this._model.remove({ _id: objectId }, callback);
};

Repository.prototype.removeAll = function(callback) {
  this._model.remove({}, callback);
};

module.exports = Repository;