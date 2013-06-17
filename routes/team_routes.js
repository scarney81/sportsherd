var Repository = require('../repositories/repository');
var teams = new Repository('Team');

module.exports = function(app) {

  var render_index = function(req, res, next) {
    if (req.isJSON) return next();
    res.render('index');
  };

  app.get('/teams/:team_id', render_index);
  app.get('/teams', render_index);

  app.get('/teams/:team_id', function(req, res, next) {
    var team = teams.filter(function(t){ return t.id === req.params.team_id;})[0];
    res.timeoutJson(team);
  });

  app.get('/teams', function(req, res, next) {
    res.json(teams);
  });

  app.put('/teams', function(req, res, next) {
    var team = { name: req.body.name, facebookId: req.body.facebookId }; //TODO: convert to middleware
    teams.create(team, function(err, team) {
      if (err) return next(err);
      res.json(team);
    });
  });

  // // update a team
  // app.post('/teams/:team_id', function(req, res, next) {
  // });

  // // remove a team
  // app.del('/teams/:team_id', function(req, res, next) {
  //   req.team.remove(function(err) {
  //     if (err) return next(err);
  //     res.json(null);
  //   });
  // });

};