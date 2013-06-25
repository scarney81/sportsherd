/*globals _:true*/
/*jshint strict:false*/
var _ = require('underscore');
var config = require('../config');
var request = require('request');
var appToken = null;

module.exports = function(req, res, next) {
  if (req.isPublic) return next();
  if (_.isUndefined(req.user) || _.isNull(req.user)) return next();

  if (!_.isUndefined(appToken) && !_.isNull(appToken)) {
    req.appToken = appToken;
    next();
  } else {
    var clientId = config.facebookOAuthParams.clientID;
    var clientSecret = config.facebookOAuthParams.clientSecret;
    var url = 'https://graph.facebook.com/oauth/access_token?client_id='+clientId+'&client_secret='+clientSecret+'&grant_type=client_credentials';

    request(url, function(err, response, body) {
      if (err) return next(err);
      if (res.statusCode !== 200) return next(body);
      appToken = body.split('=')[1];
      req.appToken = appToken;
      next();
    });
  }
};