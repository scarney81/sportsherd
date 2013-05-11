/*globals _:true*/
var _ = require('underscore');
var events = require('../repositories/event_repository');

module.exports = function(req, res, next, id) {
  events.find_by_id(id, function(err, event) {
    if (err) return next(err);
    if (_.isUndefined(event) || _.isNull(event)) res.send(404, 'event not found');
    req.event = event;
    next();
  });
};