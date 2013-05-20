var Repository = require('../repositories/repository');
var events = new Repository('Event');

module.exports = function(app) {

  var render_index = function(req, res, next) {
    if (req.isJSON) return next();
    res.render('index');
  };

  app.get('/events/:event_id', render_index);
  app.get('/events', render_index);

  app.get('/events', function(req, res, next) {
    var events = [
      { id: 1, name: 'Invention of Electricity' },
      { id: 2, name: 'Industrial Revolution' },
      { id: 3, name: 'The Manhattan Project' }
    ];
    setTimeout(function() { res.json(events); }, 1500);
  });

  // get a specific event
  // app.get('/events/:event_id', function(req, res, next) {
  //   res.json(req.event);
  // });

  // // get all events
  // // TODO: modify to support paging (middleware)
  // // TODO: only return events that are for the user
  // app.get('/events', function(req, res, next) {
  //   events.all(function(err, evts) {
  //     if (err) return next(err);
  //     res.json(evts);
  //   });
  // });

  // // create a event
  // app.put('/events', function(req, res, next) {
  //   var event = { name: req.body.name };
  //   events.create(event, function(err, event) {
  //     if (err) return next(err);
  //     res.json(event);
  //   });
  // });

  // // update a event
  // app.post('/events/:event_id', function(req, res, next) {

  // });

  // // remove a event
  // app.del('/events/:event_id', function(req, res, next) {
  //   req.event.remove(function(err) {
  //     if (err) return next(err);
  //     res.json(null);
  //   });
  // });

};