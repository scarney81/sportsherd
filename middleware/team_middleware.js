/*globals _:true*/
var _ = require('underscore');
var Repository = require('../repositories/repository');
var teams = new Repository('Team');

module.exports = function(req, res, next, id) {

  teams.findById(id, function(err, team) {
    if (err) return next(err);
    if (_.isUndefined(team) || _.isNull(team)) return res.send(404, 'team not found');
    
    // attach helpful events to the event object

    req.team = team;
    next();
  });

};