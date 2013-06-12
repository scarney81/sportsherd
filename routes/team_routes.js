var Repository = require('../repositories/repository');
// var teams = new Repository('Event');

module.exports = function(app) {

  var teams = [
    { id: '51a01909a262420b31000001', name: 'Coconut Bangers Ballclub', facebookId: '120016944816606' },
    { id: '51a01909a262420b31000002', name: 'The Cereal Killers', facebookId: '120016944816606'  },
    { id: '51a01909a262420b31000004', name: 'Thunder Down Under', facebookId: '120016944816606'  }
  ];

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

  // get a specific team


  // // get all teams
  // // TODO: modify to support paging (middleware)
  // // TODO: only return teams that are for the user
  // app.get('/teams', function(req, res, next) {
  //   teams.all(function(err, teams) {
  //     if (err) return next(err);
  //     res.json(teams);
  //   });
  // });

  // // create a team
  // app.put('/teams', function(req, res, next) {
  //   var team = { name: req.body.name };
  //   teams.create(team, function(err, team) {
  //     if (err) return next(err);
  //     res.json(team);
  //   });
  // });

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