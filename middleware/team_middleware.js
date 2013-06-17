/*globals _:true*/
var _ = require('underscore');
var Teams = require('../repositories/team_repository');
var teams = new Teams();

module.exports = function(req, res, next, id) {
  if (!req.isJSON) return next();

  teams.findById(id, function(err, team) {
    if (err) return next(err);
    if (_.isUndefined(team) || _.isNull(team)) return res.send(404, 'team not found');

    // attach helpful events to the event object

    req.team = team;
    next();
  });

};