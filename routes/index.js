module.exports = function(app) {

  app.get('/', function(req, res, next) {
    res.render('index');
  });

  require('./team_routes')(app);
  require('./event_routes')(app);

};