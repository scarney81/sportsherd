module.exports = function(app) {

  var render_index = function(req, res, next) {
    if (req.isJSON) return next();
    res.render('index');
  };

  app.get('/events/:event_id', render_index);
  app.get('/events', render_index);

  // get a specific event
  app.get('/events/:event_id', function(req, res, next) {
    res.json(req.event);
  });

  // get all events
  // TODO: modify to support paging (middleware)
  app.get('/events', function(req, res, next) {

  });

  // create a event
  app.put('/events', function(req, res, next) {

  });

  // update a event
  app.post('/events/:event_id', function(req, res, next) {

  });

  // remove a event
  app.del('/events/:event_id', function(req, res, next) {

  });

};