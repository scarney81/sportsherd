/*globals _:true*/
var _ = require('underscore');
var Repository = require('../repositories/repository');

module.exports = function(req, res, next, id) {
  var teams = new Repository('Team');
  teams.findById(id, function(err, team) {
    if (err) return next(err);
    if (_.isUndefined(team) || _.isNull(team)) return res.send(404, 'team not found');
    req.team = team;
    next();
  });
};