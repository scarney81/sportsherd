module.exports = function(app) {

  var render_index = function(req, res, next) {
    if (req.isJSON) return next();
    res.render('index');
  };

  app.get('/profile', render_index);
  app.get('/profile/:profile_id', render_index);

  app.get('/profile/my', function(req, res, next) {
    var profile = {
      name: req.user.name,
      displayName: req.user.displayName,
      profileUrl: req.user.profileUrl
    };
    res.json(profile);
  });

  app.get('/profile/:profile_id', function(req, res, next) {

  });

};