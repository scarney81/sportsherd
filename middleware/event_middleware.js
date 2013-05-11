/*globals _:true*/
var _ = require('underscore');
var Repository = require('../repositories/repository');

module.exports = function(req, res, next, id) {
  var events = new Repository('Event');
  events.find_by_id(id, function(err, event) {
    if (err) return next(err);
    if (_.isUndefined(event) || _.isNull(event)) res.send(404, 'event not found');
    req.event = event;
    next();
  });
};