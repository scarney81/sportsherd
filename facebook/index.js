/*globals _:true*/
var _ = require('underscore');
var request = require('request');

var facebook = function(options) {
  options = options || {};

  this._accessToken = options.accessToken;
  this._baseUrl = options.baseUrl || 'https://graph.facebook.com/';
};

facebook.prototype._buildHeaders = function() {
  return { Authorization: 'OAuth '+this._accessToken };
};

facebook.prototype._buildRequestOptions = function(uri) {
  var headers = this._buildHeaders();
  return { uri: uri, headers: headers, json: true };
};

facebook.prototype._buildResourceURI = function(resource) {
  // TODO: check base url for trailing /
  // TODO: check resource for leading /
  return this._baseUrl+resource;
};

facebook.prototype._execute = function(options, callback) {
  request(options, function(err, res, body) {
    if (err) return callback(err);
    if (res.statusCode !== 200) return callback(res.statusCode, body);
    callback(null, body || {});
  });
};

facebook.prototype.groups = function(userId, callback) {
  var uri = this._buildResourceURI(userId+'/groups?fields=name,privacy');
  var options = this._buildRequestOptions(uri);

  this._execute(options, function(err, body) {
    if (err) return callback(err);
    callback(null, body.data || []);
  });
  
};

module.exports = facebook;