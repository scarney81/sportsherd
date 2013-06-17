var Teams = require('../repositories/team_repository');

module.exports = function(app) {

  var teams = new Teams();

  var render_index = function(req, res, next) {
    if (req.isJSON) return next();
    res.render('index');
  };

  app.get('/teams/:team_id', render_index);
  app.get('/teams', render_index);

  app.get('/teams/:team_id', function(req, res, next) {
    res.json(req.team);
  });

  app.get('/teams', function(req, res, next) {
    var facebook = req.facebook;

    facebook.groups('me', function(err, groups) {
      if (err) return next(err);

      var groupIds = groups.map(function(group) { return group.id; });
      teams.findByGroupId(groupIds, function(err, teams) {
        if (err) return next(err);
        res.json(teams);
      });
    });
  });

  app.put('/teams', function(req, res, next) {
    var team = { name: req.body.name, facebookId: req.body.facebookId };
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