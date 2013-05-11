/*globals _:true*/
var _ = require('underscore');
var teams = require('../repositories/team_repository');

module.exports = function(req, res, next, id) {
  teams.find_by_id(id, function(err, team) {
    if (err) return next(err);
    if (_.isUndefined(team) || _.isNull(team)) res.send(404, 'team not found');
    req.team = team;
    next();
  });
};