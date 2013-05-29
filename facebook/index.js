/*globals _:true*/
var _ = require('underscore');
var request = require('request');

var baseUrl = 'https://graph.facebook.com/';

var facebook = function(accessToken) {
  this._accessToken = accessToken;
};

facebook.prototype.getGroups = function(userId, callback) {
  var uri = baseUrl+userId+'/groups?fields=privacy';
  var headers = { Authorization: 'OAuth '+this._accessToken};
  var options = { uri: uri, headers: headers, method: 'GET', json: true };
  
  request(options, function(err, response, body) {
    if (err) return callback(err);
    if (response.statusCode !== 200) return callback(response.statusCode, body);

    var groups = body.data || [];
    callback(null, groups);
  });
};

module.exports = facebook;