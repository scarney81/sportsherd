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
      facebookId: userProperty('id'),
      displayName: userProperty('displayName'),
      emails: userProperty('emails'),
      name: userProperty('name'),
      profileUrl: userProperty('profileUrl')
    });
  });

  app.get('/profile/:profile_id', function(req, res, next) {

  });

};