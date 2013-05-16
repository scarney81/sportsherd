var strategy    = require('../oauthStrategy');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) { done(null, user); });
  passport.deserializeUser(function(obj, done) { done(null, obj); });
  passport.use(strategy);

  return function(req, res, next) {
    if (req.isPublic || req.isAuthenticated()) return next();

    // save the requested resource so that the user
    // can be redirected
    req.session.redirectUrl = req.url;

    res.redirect('/public/login');
  };
};