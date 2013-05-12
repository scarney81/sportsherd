var Repository = require('../repositories/repository');
var teams = new Repository('Event');

module.exports = function(app) {

  var render_index = function(req, res, next) {
    if (req.isJSON) return next();
    res.render('index');
  };

  app.get('/teams/:team_id', render_index);
  app.get('/teams', render_index);

  // get a specific team
  app.get('/teams/:team_id', function(req, res, next) {
    res.json(req.team);
  });

  // get all teams
  // TODO: modify to support paging (middleware)
  // TODO: only return teams that are for the user
  app.get('/teams', function(req, res, next) {
    teams.all(function(err, teams) {
      if (err) return next(err);
      res.json(teams);
    });
  });

  // create a team
  app.put('/teams', function(req, res, next) {
    var team = { name: req.body.name };
    teams.create(team, function(err, team) {
      if (err) return next(err);
      res.json(team);
    });
  });

  // update a team
  app.post('/teams/:team_id', function(req, res, next) {
    
  });

  // remove a team
  app.del('/teams/:team_id', function(req, res, next) {
    req.team.remove(function(err) {
      if (err) return next(err);
      res.json(null);
    });
  });

};