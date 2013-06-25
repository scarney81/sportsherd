/*globals _:true*/
/*jshint strict:false*/
var _ = require('underscore');
var Facebook = require('../facebook');
var config = require('../config');

module.exports = function(req, res, next) {
  if (req.isPublic) return next();
  if (_.isUndefined(req.user) || _.isNull(req.user)) return next();

  var accessToken = req.user.accessToken;
  var appToken = req.appToken;
  var clientId = config.facebookOAuthParams.clientID;
  var options = { accessToken: accessToken, appToken: appToken, clientId: clientId };

  req.facebook = new Facebook(options);
  next();
};