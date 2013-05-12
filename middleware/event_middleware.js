/*globals _:true*/
var _ = require('underscore');
var Repository = require('../repositories/repository');
var events = new Repository('Event');

module.exports = function(req, res, next, id) {

  events.findById(id, function(err, event) {
    if (err) return next(err);
    if (_.isUndefined(event) || _.isNull(event)) res.send(404, 'event not found');

    // attach helpful events to the event object

    req.event = event;
    next();
  });
  
};