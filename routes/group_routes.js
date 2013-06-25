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
    var group = { name: req.body.name, description: req.body.description, privacy: req.body.privacy };

    facebook.createGroup(group, function(err, id) {
      if (err) return next(err);

      group.id = id;
      res.send(200, group);
    });
  });

  app.get('/groups/:groupId/delete', function(req, res, next) {
    var facebook = req.facebook;
    var groupId = req.params.groupId;

    facebook.deleteGroup(groupId, function(err) {
      if (err) return next(err);
      res.send(200);
    });
  });
};