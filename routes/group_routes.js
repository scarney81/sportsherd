module.exports = function(app) {

  app.get('/groups', function(req, res, next) {
    var facebook = req.facebook;

    facebook.groups('me', function(err, groups) {
      if (err) return next(err);
      res.json(groups);
    });
  });

  app.get('/groups/:group_id', function(req, res, next) {
    var facebook = req.facebook;
    var groupId = req.params.group_id;

    facebook.group(groupId, function(err, group) {
      if (err) return next(err);
      res.json(group);
    });
  });

};