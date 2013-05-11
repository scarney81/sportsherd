module.exports = function(app) {

  var render_index = function(req, res, next) {
    if (!req.isJSON) return next();
    res.render('index');
  };

  app.get('/teams/:team_id', render_index);
  app.get('/teams', render_index);

  // get a specific team
  app.get('/teams/:team_id', function(req, res, next) {
    res.json(req.team);
  });

  // get all teams
  app.get('/teams', function(req, res, next) {

  });

  // create a team
  app.put('/teams', function(req, res, next) {

  });

  // update a team
  app.post('/teams/:team_id', function(req, res, next) {

  });

  // remove a team
  app.del('/teams/:team_id', function(req, res, next) {

  });

};