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

facebook.prototype._execute = function(options) {

};

facebook.prototype.getGroups = function(userId, callback) {
  var uri = baseUrl+userId+'/groups?fields=privacy';
  var options = this._buildRequestOptions(uri);
  
  request(options, function(err, response, body) {
    if (err) return callback(err);
    if (response.statusCode !== 200) return callback(response.statusCode, body);

    var groups = body.data || [];
    callback(null, groups);
  });
};

module.exports = facebook;