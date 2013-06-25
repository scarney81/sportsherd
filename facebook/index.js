/* jshint strict:false */
var request = require('request');

var facebook = function(options) {
  options = options || {};
  this._clientId = options.clientId;
  this._accessToken = options.accessToken;
  this._appToken = options.appToken;
  this._baseUrl = options.baseUrl || 'https://graph.facebook.com/';
};

facebook.prototype._buildHeaders = function() {
  return { Authorization: 'OAuth '+this._accessToken };
};

facebook.prototype._buildRequestOptions = function(uri, method) {
  var headers = this._buildHeaders();
  return { uri: uri, headers: headers, json: true, method: method || 'GET' };
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

facebook.prototype.createGroup = function(group, callback) {
  if (!group.name) return callback(new Error('Name is required to create a group'));
  if (!group.description) return callback(new Error('Description is required to create a group'));

  var uri = this._buildResourceURI(this._clientId+'/groups');
  var options = this._buildRequestOptions(uri, 'POST');

  options.headers['content-type'] = 'application/x-www-form-urlencoded';
  // TODO: make current user admin
  options.body = 'access_token='+this._appToken+'&name='+group.name+'&description='+group.description+'&admin=1347927447';
  delete options.json;

  this._execute(options, function(err, body) {
    if (err) return callback(err);
    callback(null, body.id || null);
  });
};

module.exports = facebook;