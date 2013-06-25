/* jshint strict:false*/
module.exports = function(app) {

  var renderIndex = function(req, res, next) {
    if (req.isJSON) return next();
    res.render('index');
  };

  app.get('/groups/new', renderIndex);

  app.get('/groups', function(req, res, next) {
    var facebook = req.facebook;

    facebook.groups('me', function(err, groups) {
      if (err) return next(err);
      res.json(groups);
    });
  });

  app.post('/groups', function(req, res, next) {
    var facebook = req.facebook;
    var model = { name: req.body.name, description: req.body.description };

    facebook.createGroup(model, function(err, group) {
      if (err) return next(err);
      res.send(200, group);
    });
  });

};