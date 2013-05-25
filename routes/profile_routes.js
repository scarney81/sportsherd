module.exports = function(app) {

  var render_index = function(req, res, next) {
    if (req.isJSON) return next();
    res.render('index');
  };

  app.get('/profile', render_index);
  app.get('/profile/:profile_id', render_index);

  app.get('/profile/my', function(req, res, next) {
    
    var userProperty = function(prop) {
      return (req && req.user && req.user.hasOwnProperty(prop))
        ? req.user[prop]
        : '';
    };

    res.json({
      name: userProperty('name'),
      displayName: userProperty('displayName'),
      profileUrl: userProperty('profileUrl'),
      facebookId: userProperty('id')
    });
  });

  app.get('/profile/:profile_id', function(req, res, next) {

  });

};