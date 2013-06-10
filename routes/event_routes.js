var Repository = require('../repositories/repository');
var events = new Repository('Event');

module.exports = function(app) {

  var events = [
    { id: '51b01909a262420b31000001', name: 'Invention of Electricity' },
    { id: '51b01909a262420b31000002', name: 'Industrial Revolution' },
    { id: '51b01909a262420b31000004', name: 'The Manhattan Project' }
  ];

  var render_index = function(req, res, next) {
    if (req.isJSON) return next();
    res.render('index');
  };

  app.get('/events/:event_id', render_index);
  app.get('/events', render_index);

  app.get('/events/:event_id', function(req, res, next) {
    var evt = null;
    var id = req.params.event_id;
    events.forEach(function(e) {
      if (e.id === id) evt = e;
    });
    res.json(evt);
  });

  app.get('/events', function(req, res, next) {
    res.json(events);
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