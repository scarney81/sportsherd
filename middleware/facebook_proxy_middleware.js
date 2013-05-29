/*globals _:true*/
var _ = require('underscore');
var Facebook = require('../facebook');

module.exports = function(req, res, next) {
  if (req.isPublic) return next();
  if (_.isUndefined(req.user) || _.isNull(req.user)) return next();

  req.facebook = new Facebook(req.user.accessToken);
  next();
};